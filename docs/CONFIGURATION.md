# Configuration

The application combines runtime JSON with Vite compile-time fallbacks.

## Precedence

Configuration is resolved in this order:

1. `/dynamic-env.json`
2. `/getEnvConfig`
3. Vite variables and defaults from `src/env.ts`

The first successful runtime response wins as a complete configuration object.

## Runtime configuration

Edit the root `dynamic-env.json`. Vite copies it to `public/dynamic-env.json` when development or production builds start.

| Property | Purpose |
|---|---|
| `application.baseUrl` | Public frontend origin |
| `application.name` | Display name |
| `application.logoUrl` | Optional branding asset |
| `oAuthConfig.issuer` | OpenIddict/OIDC authority |
| `oAuthConfig.redirectUri` | Registered login callback |
| `oAuthConfig.postLogoutRedirectUri` | Registered logout return address |
| `oAuthConfig.clientId` | Public OpenIddict SPA client ID |
| `oAuthConfig.scope` | Space-separated OIDC and API scopes |
| `apis.default.url` | API host or gateway origin, without `/api` |
| `apis.default.rootNamespace` | Descriptive backend namespace |
| `adminConsoleUrl` | Optional ABP Admin Console origin |

The runtime file is public. Never put secrets, passwords, private keys, or connection strings in it.

## Vite fallbacks

Copy `.env.example` to `.env.local` for local overrides:

```powershell
Copy-Item .env.example .env.local
```

Supported variables:

| Variable | Fallback target |
|---|---|
| `VITE_APP_NAME` | Application name |
| `VITE_APP_URL` | Frontend origin |
| `VITE_API_URL` | API host/gateway |
| `VITE_AUTH_URL` | OIDC issuer |
| `VITE_REDIRECT_URL` | OIDC callback |
| `VITE_CLIENT_ID` | OpenIddict client ID |
| `VITE_SCOPE` | Requested scopes |

Vite embeds these values in the public bundle. They must not contain secrets.

## Tenant and culture

The selected tenant ID is stored in `sessionStorage['abp_tenant_id']` and sent through ABP's `__tenant` header. The active i18next language is sent through `Accept-Language`.

## Deployment replacement

For immutable builds, replace or mount `dist/dynamic-env.json` at deployment time. Serve it as `application/json`, give it a short cache policy, and exclude it from SPA fallback rewrites.

