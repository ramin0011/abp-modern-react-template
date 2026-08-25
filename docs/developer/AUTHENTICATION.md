# Authentication and Authorization Architecture

This document explains the complete authentication structure of the Orbit Admin React application: runtime configuration, OpenID Connect, Authorization Code with PKCE, session restoration, token renewal, ABP permissions, authenticated HTTP requests, logout, backend requirements, security boundaries, and known limitations.

## Architecture overview

```text
dynamic-env.json
      │
      ▼
Runtime configuration
      │
      ▼
OIDC UserManager
      │
      ├── Login redirect ───────► ABP Auth Server / OpenIddict
      │                               │
      │                               ▼
      │                         Authorization code
      │                               │
      ◄──────── /auth/callback ◄──────┘
      │
      ▼
Access token + identity claims
      │
      ├──► React AuthProvider
      ├──► ABP application configuration
      ├──► Permission store
      └──► Axios Authorization header
```

The implementation separates four responsibilities:

1. OIDC configuration and protocol operations
2. React authentication state
3. ABP permission loading
4. Authenticated API requests

## Relevant source files

| File | Responsibility |
|---|---|
| `dynamic-env.json` | Deploy-time application, OIDC, and API configuration |
| `src/env.ts` | Vite-based fallback configuration |
| `src/lib/runtime-config.ts` | Loads and exposes runtime configuration |
| `src/lib/auth/auth-client.ts` | Creates the OIDC `UserManager` and supplies access tokens |
| `src/components/providers/auth-provider.tsx` | Makes authentication state and actions available to React |
| `src/pages/auth-callback-page.tsx` | Completes the OIDC authorization response |
| `src/lib/auth/permissions.ts` | Loads and stores ABP granted policies |
| `src/lib/api/axios.ts` | Adds authentication, tenant, and culture headers to API calls |
| `src/router.tsx` | Registers the callback and permission-protected routes |
| `src/components/layout/header.tsx` | Presents login and logout actions |

## Runtime configuration

Authentication settings are defined in `dynamic-env.json`:

```json
{
  "oAuthConfig": {
    "issuer": "https://localhost:44301/",
    "redirectUri": "http://localhost:3000/auth/callback",
    "postLogoutRedirectUri": "http://localhost:3000",
    "clientId": "Orbit_Admin_App",
    "scope": "offline_access openid profile email phone OrbitAdmin"
  }
}
```

### Configuration properties

`issuer` is the ABP Auth Server or OpenIddict authority. The OIDC client uses its discovery document to locate the authorization, token, logout, and UserInfo endpoints. The configured value must match the issuer advertised by the server.

`clientId` identifies the React application. A browser SPA is a public client; no client secret may be embedded in the frontend.

`redirectUri` is the address to which OpenIddict returns the browser after authentication. It must exactly match a redirect URI registered for the OpenIddict client.

`postLogoutRedirectUri` is the address to which the Auth Server returns the browser after logout.

The configured scopes have these meanings:

| Scope | Purpose |
|---|---|
| `openid` | Enables OpenID Connect authentication |
| `profile` | Requests common identity claims such as name |
| `email` | Requests email claims |
| `phone` | Requests phone claims |
| `offline_access` | Requests refresh-token capability |
| `OrbitAdmin` | Requests access to the application API |

The API scope must match a scope registered by the backend.

### Configuration precedence

`src/lib/runtime-config.ts` loads configuration in this order:

```text
/dynamic-env.json
        ↓ when unavailable
/getEnvConfig
        ↓ when unavailable
Vite fallbacks from src/env.ts
```

Runtime configuration allows endpoints and client settings to change at deployment time without rebuilding the React bundle. Vite variables remain compile-time fallbacks.

## Application bootstrap

`src/main.tsx` initializes the application in this order:

```ts
async function bootstrap() {
  await loadRuntimeConfig()
  initUserManager()
  // Mount React providers and the router.
}
```

Configuration must load before the OIDC client is created because the client requires the deployed issuer, client ID, redirect URI, and scopes.

## OIDC client

The low-level authentication implementation lives in `src/lib/auth/auth-client.ts`. It maintains one `UserManager` instance:

```ts
let manager: UserManager | null = null
```

The manager is configured approximately as follows:

```ts
const settings = {
  authority: oAuthConfig.issuer,
  client_id: oAuthConfig.clientId,
  redirect_uri: oAuthConfig.redirectUri,
  post_logout_redirect_uri: oAuthConfig.postLogoutRedirectUri,
  response_type: 'code',
  scope: oAuthConfig.scope,
  automaticSilentRenew: true,
  loadUserInfo: true,
  userStore: new WebStorageStateStore({
    store: window.localStorage,
  }),
}
```

### Authorization Code with PKCE

`response_type: 'code'` selects the Authorization Code flow. `oidc-client-ts` automatically adds PKCE for the browser client:

1. It generates a random code verifier.
2. It derives a code challenge from the verifier.
3. It sends the challenge to the authorization endpoint.
4. OpenIddict returns a short-lived authorization code.
5. The client exchanges the code together with the verifier.
6. The server issues tokens only when the verifier matches the original challenge.

PKCE prevents an intercepted authorization code from being exchanged by an attacker.

### Stored user session

The authenticated OIDC `User` is stored in browser local storage. Depending on the server response, it can contain:

- Access token
- Refresh token
- ID token
- Expiration timestamp
- Granted scopes
- Identity claims
- OIDC session metadata

The OIDC library typically stores it under a key shaped like:

```text
oidc.user:<authority>:<client-id>
```

Temporary authorization state, including the PKCE transaction state, is managed separately by `oidc-client-ts`.

Local storage lets a login survive page reloads and browser restarts. It also means an XSS vulnerability could expose tokens to malicious JavaScript, so XSS prevention and Content Security Policy are important.

## Login flow

The React provider exposes login through:

```ts
getUserManager().signinRedirect()
```

The header calls this method when the user selects **Sign in**.

The resulting flow is:

```text
User selects Sign in
        │
        ▼
signinRedirect()
        │
        ├── Load OIDC discovery metadata
        ├── Generate state and PKCE values
        └── Redirect to /connect/authorize
                    │
                    ▼
             User authenticates
                    │
                    ▼
      Redirect to /auth/callback?code=...&state=...
```

The Auth Server handles credentials and interactive login. The React application never receives or processes the user's password.

## Callback processing

TanStack Router maps `/auth/callback` to `AuthCallbackPage`.

The page invokes:

```ts
getUserManager().signinRedirectCallback()
```

The callback operation:

1. Reads the authorization code and state from the URL.
2. Confirms that the returned state matches the stored transaction.
3. Retrieves the stored PKCE verifier.
4. Exchanges the code at the token endpoint.
5. Validates the OIDC response.
6. Creates and persists a `User` object.
7. Emits the `UserLoaded` event.

After success, the callback validates the stored return URL, permits only this application's origin, and replaces the callback location with that safe internal URL. This removes the authorization response from browser history and prevents an external open redirect. A `useRef` guard prevents duplicate callback processing when React Strict Mode replays effects during development. If processing fails, the page displays the error.

## React authentication state

`AuthProvider` converts the OIDC client into React state and actions. Its public value is:

```ts
interface AuthContextValue {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: () => Promise<void>
  logout: () => Promise<void>
}
```

Components consume it with:

```ts
const auth = useAuth()
```

### Session restoration

When the provider mounts, it calls:

```ts
const current = await manager.getUser()
setUser(current)
```

This restores a stored session after a page reload. Authentication is currently calculated as:

```ts
Boolean(user && !user.expired)
```

### Authentication events

The provider subscribes to:

```ts
manager.events.addUserLoaded(onLoaded)
manager.events.addUserUnloaded(onUnloaded)
```

When a user is loaded, React state is updated and ABP application configuration is refreshed with the new access token. When a user is unloaded, the React user and permission store are cleared.

## Token renewal

API requests obtain tokens through `ensureAccessToken()`:

```text
Load stored user
      │
      ├── No user ───────────────► return null
      │
      ├── Token unexpired ───────► return access token
      │
      └── Token expired
              │
              ▼
         signinSilent()
              │
              ├── Successful ────► return renewed access token
              └── Failed ────────► return null
```

`automaticSilentRenew: true` also asks `oidc-client-ts` to renew around the token expiration time. Because `offline_access` is requested, OpenIddict may issue a refresh token if the backend client is configured to allow it.

If renewal fails, the current implementation returns `null`; it does not automatically redirect the user to login.

## Authenticated HTTP requests

`src/lib/api/axios.ts` defines the shared API client. Its request interceptor:

1. Resolves the API URL from runtime configuration.
2. Gets or renews the current access token.
3. Adds `Authorization: Bearer <token>` when a token exists.
4. Adds ABP's `__tenant` header when a tenant is selected.
5. Adds `Accept-Language` from i18next.

A request written as:

```ts
api.get('/app/products')
```

is sent conceptually as:

```http
GET https://localhost:44300/api/app/products
Authorization: Bearer <access-token>
X-Requested-With: XMLHttpRequest
Accept-Language: en
__tenant: <selected-tenant-id>
```

The backend must validate the token signature, issuer, audience, expiration, scopes, and required endpoint permission.

If a request still receives `401` after request-time token renewal, the response interceptor records the full return URL and starts one OIDC login redirect. The callback later validates and restores that internal location. The interceptor does not retry the failed request in place.

## ABP permissions

After restoring or loading a user, the application requests:

```http
GET /api/abp/application-configuration
Authorization: Bearer <access-token>
__tenant: <selected-tenant-id>
```

The relevant response section is expected to resemble:

```json
{
  "auth": {
    "grantedPolicies": {
      "OrbitAdmin.Team": true,
      "OrbitAdmin.Products.Create": true,
      "OrbitAdmin.Products.Delete": false
    }
  }
}
```

Granted policies are stored in Zustand. Permission checks use:

```ts
isGranted('OrbitAdmin.Team')
```

The function returns `true` only when the server explicitly grants the policy. When application-configuration loading fails, an empty policy collection is stored, so protected features fail closed.

## Route and menu authorization

The Team route checks authentication in its `beforeLoad` handler, starts OIDC login when necessary, waits for initial application-configuration loading, and then checks `OrbitAdmin.Team`. The sidebar uses the same policy to decide whether to render the Team navigation entry.

```text
OrbitAdmin.Team = true
        │
        ├── Team menu is visible
        └── /team is accessible

Policy missing or false
        │
        ├── Team menu is hidden
        └── /team redirects to /
```

This is a user-interface authorization check, not the final security boundary. A user can modify frontend state; therefore every sensitive backend endpoint must enforce its server-side permission independently.

## Logout

The provider logs out through:

```ts
getUserManager().signoutRedirect()
```

The library redirects to the OpenIddict end-session endpoint and includes the configured post-logout redirect. After the server ends its session, the browser returns to the application root. When the local OIDC user is unloaded, the React user and permission store are cleared.

## Current route protection

Authentication exists globally, but most demonstration pages are intentionally public:

| Route | Current protection |
|---|---|
| `/` | Public |
| `/products` | Public |
| `/settings` | Public |
| `/team` | Requires `OrbitAdmin.Team` |
| `/auth/callback` | OIDC callback |

There is no global `RequireAuth` wrapper yet. Unauthenticated requests made with the shared Axios client simply omit the `Authorization` header.

## Required backend registration

For this frontend configuration, the OpenIddict client should approximately use:

```text
Client ID:
  Orbit_Admin_App

Client type:
  Public SPA client

Grant type:
  Authorization Code

PKCE:
  Required

Redirect URI:
  http://localhost:3000/auth/callback

Post-logout redirect URI:
  http://localhost:3000

Allowed scopes:
  openid
  profile
  email
  phone
  offline_access
  OrbitAdmin
```

The API host must allow CORS requests from `http://localhost:3000`. The issuer, HTTPS certificates, scope name, API audience, redirect addresses, and client registration must agree exactly.

Never add an OpenIddict client secret to the React project.

## Security boundaries

Frontend checks improve navigation and user experience. Backend authorization provides the actual security guarantee.

```text
Frontend permission checks
    = UI and navigation protection

Backend authorization
    = security enforcement
```

Because tokens are stored in local storage:

- Avoid rendering untrusted HTML.
- Avoid `dangerouslySetInnerHTML` with untrusted content.
- Deploy a strong Content Security Policy.
- Keep dependencies updated.
- Never log tokens or complete OIDC `User` objects.
- Never include client secrets in frontend files.

For higher-security applications, consider a Backend-for-Frontend architecture with `HttpOnly` cookies so OAuth tokens are not directly accessible to browser JavaScript.

## Known limitations and recommended improvements

### Add a global authentication guard

Most routes remain public. Private pages should wait for `isLoading` to finish, check `isAuthenticated`, remember the requested URL, and redirect unauthenticated users to login.

### Complete the `401` flow

The request interceptor attempts renewal before sending. If the server still returns `401`, the response interceptor redirects to login and preserves a safe return URL. It does not retry the original request after authentication or distinguish every backend authentication failure category.

### Refresh permissions after tenant changes

Changing `abp_tenant_id` affects subsequent requests but does not immediately reload application configuration. Tenant switching should clear cached server state and reload permissions.

### Handle more OIDC events

Production handling commonly includes access-token expiring, access-token expired, silent-renew errors, remote sign-out, and user-session changes.

### Add an explicit logout callback

A dedicated logout callback can make local cleanup, errors, and redirect behavior clearer.

### Consider official ABP adapters

The project manually integrates `oidc-client-ts` and `/api/abp/application-configuration`. It does not currently use `@volo/abp-react-app-config` or `@volo/abp-react-oidc-auth`. The manual approach keeps this CLI-free starter understandable, while the official adapters may offer closer alignment with ABP-generated templates.
