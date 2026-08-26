# Integrating an ABP Backend

This guide connects the React starter to an existing ABP Framework backend without using ABP CLI to generate or install the frontend.

ABP solution structures vary across versions, templates, and commercial modules. The names of seed contributors and configuration keys may differ, so use your solution's existing OpenIddict registration as the source of truth.

## Integration checklist

You need five matching values:

| React setting | Backend source |
|---|---|
| `oAuthConfig.issuer` | Auth Server or unified HTTP API host issuer |
| `oAuthConfig.clientId` | Seeded OpenIddict public SPA application |
| `oAuthConfig.scope` | OpenIddict scopes/resources exposed to the client |
| `apis.default.url` | HTTP API host or microservice Web Gateway |
| `application.baseUrl` | Public address of this React application |

You also need matching redirect URIs, CORS origins, and ABP permission names.

## 1. Identify the backend topology

### Layered or tiered application

Use the HTTP API host for `apis.default.url`. When the Auth Server is separate, use its origin for `oAuthConfig.issuer`.

```text
React SPA ──API calls──► HTTP API Host
    │
    └──OIDC redirects──► Auth Server
```

### Single-layer or unified host

The API and issuer may use the same origin.

### Microservice solution

Use the Web Gateway for `apis.default.url` and the dedicated Auth Server for `oAuthConfig.issuer`. Request every resource scope required by the services called through the gateway.

```text
React SPA ──API calls──► Web Gateway ──► Services
    │
    └──OIDC redirects──► Auth Server
```

Find local HTTPS URLs in backend launch settings, ABP Studio solution configuration, or the running services' console output.

## 2. Register or reuse an OpenIddict SPA client

Modern ABP solutions commonly seed a client named `<ProjectName>_App`. Reusing that client is usually simpler than adding another one: set this frontend's client ID, redirect URI, and scopes to match it.

If adding a client manually, locate your solution's existing OpenIddict data seed contributor and follow its current registration pattern. The client needs these conceptual settings:

```text
Client type: public
Client ID: MyProject_App
Grant type: authorization_code
Response type: code
PKCE: required
Redirect URI: http://localhost:3000/auth/callback
Post-logout redirect URI: http://localhost:3000
Scopes: openid profile email phone offline_access MyProject
```

Do not create or expose a client secret for this SPA.

When `offline_access` is allowed, OpenIddict can issue refresh tokens. If refresh tokens are disabled, remove `offline_access` from the frontend scopes and provide another supported renewal strategy.

After changing seed data, run the solution's database migrator or data-seeding process. Existing OpenIddict application records may need to be updated or removed before reseeding; follow the conventions of your backend repository.

## 3. Configure backend CORS

Allow the exact frontend origin:

```text
http://localhost:3000
```

Production must use the actual HTTPS origin, for example `https://app.example.com`.

Depending on the template, origins may live in `App:CorsOrigins`, environment variables, gateway configuration, or an explicit ASP.NET Core CORS policy. Do not use a wildcard origin with credentials.

OIDC redirects are validated independently of CORS. Both must be correct.

## 4. Configure the React application

Edit the root `dynamic-env.json`:

```json
{
  "application": {
    "baseUrl": "http://localhost:3000",
    "name": "My Application"
  },
  "oAuthConfig": {
    "issuer": "https://localhost:44301/",
    "redirectUri": "http://localhost:3000/auth/callback",
    "postLogoutRedirectUri": "http://localhost:3000",
    "clientId": "MyProject_App",
    "scope": "offline_access openid profile email phone MyProject"
  },
  "apis": {
    "default": {
      "url": "https://localhost:44300",
      "rootNamespace": "MyCompany.MyProject"
    }
  },
  "adminConsoleUrl": "https://localhost:44307"
}
```

Important rules:

- `issuer` must match the server discovery document exactly.
- Login and logout redirects must exactly match registered client values.
- `apis.default.url` must not include `/api`; the Axios client adds it.
- In microservices, normally point the API URL to the gateway.
- `rootNamespace` is descriptive and is not currently used at runtime.

Restart Vite after changing the root file so it is recopied to `public/dynamic-env.json`.

## 5. Match permissions

After authentication, the app fetches:

```http
GET /api/abp/application-configuration
```

It reads `auth.grantedPolicies`. The included Team route uses the demonstration policy `AbpIdentity.Users`. Replace it in:

- `src/lib/routing/route-config.ts`
- `src/router.tsx`

Use a permission defined and granted by your backend, such as a project permission or module permission like `AbpIdentity.Users`.

UI checks do not replace server authorization. Protect the application service with ABP authorization attributes or policies.

## 6. Add typed API modules

Keep API contracts in modules under `src/lib/api/`:

```ts
import { api } from '@/lib/api/axios'

export interface ProductDto {
  id: string
  name: string
  price: number
}

export interface ProductListResult {
  totalCount: number
  items: ProductDto[]
}

export async function getProducts(): Promise<ProductListResult> {
  const { data } = await api.get<ProductListResult>('/app/product')
  return data
}
```

Consume them with TanStack Query:

```ts
const products = useQuery({
  queryKey: ['products'],
  queryFn: getProducts,
})
```

The modern React workflow does not use jQuery proxies from `abp generate-proxy -t js`. Inspect Swagger or `/api/abp/api-definition?includeTypes=true` and maintain TypeScript DTOs explicitly.

## 7. Verify the integration

Start the backend services and then run `npm run dev`. Verify in this order:

1. `<issuer>/.well-known/openid-configuration` returns OIDC metadata.
2. `http://localhost:3000/dynamic-env.json` returns JSON, not SPA HTML.
3. **Sign in** redirects to the expected Auth Server.
4. The callback returns to `/auth/callback` and then restores the initiating internal page.
5. Browser storage contains an OIDC user for the authority and client.
6. `/api/abp/application-configuration` returns `200` and policies.
7. Application API calls contain a bearer token and return expected DTOs.

Never paste live access or refresh tokens into issues.

## Common problems

### `invalid_redirect_uri`

The callback does not exactly match the OpenIddict record. Check scheme, host, port, path, and trailing slash.

### CORS failure

Add the frontend origin to the API host or gateway and confirm requests reach the intended host.

### `invalid_scope`

A requested scope is unregistered or not permitted for the client. Align `oAuthConfig.scope` with OpenIddict seed data.

### Login succeeds but the API returns `401`

Check audience/resources, API authentication, system clock, issuer, and whether the API scope was granted.

### The API returns `403`

The current user or client lacks an ABP permission. Grant it and sign in again or reload application configuration.

### Team menu is missing

`AbpIdentity.Users` was not returned as `true`. Grant it to the current user/role or replace it with another backend permission.

### Local HTTPS certificate errors

Trust the ASP.NET Core development certificate. Never disable TLS validation in production.

## Official references

- [ABP React UI](https://abp.io/docs/latest/framework/ui/react)
- [React authorization](https://abp.io/docs/latest/framework/ui/react/authorization)
- [React environment variables](https://abp.io/docs/latest/framework/ui/react/environment-variables)
- [React HTTP requests](https://abp.io/docs/latest/framework/ui/react/http-requests)
- [React permission management](https://abp.io/docs/latest/framework/ui/react/permission-management)
