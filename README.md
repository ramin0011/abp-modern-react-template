# Orbit Admin — ABP Modern React Starter

A manually assembled React frontend based on the ABP modern React UI documentation. No ABP CLI or ABP Studio generator is used.

## Stack

- Vite + React + TypeScript
- TanStack Router and TanStack Query
- Tailwind CSS with source-owned shadcn-style components
- React Hook Form + Zod
- Axios with ABP request headers
- `oidc-client-ts` using Authorization Code + PKCE
- i18next localization, Zustand permissions, Vitest

## Run

```bash
npm install
npm run dev
```

The frontend works as a standalone interface. To connect an ABP backend, edit `dynamic-env.json` with the HTTP API host, OpenIddict authority, registered SPA client ID, redirect URI, and scopes. The Vite build copies this file to `public/dynamic-env.json`.

## ABP integration points

- `src/lib/runtime-config.ts` loads `/dynamic-env.json` and `/getEnvConfig`.
- `src/lib/auth/auth-client.ts` configures OIDC Authorization Code + PKCE.
- `src/lib/auth/permissions.ts` reads `/api/abp/application-configuration`.
- `src/lib/api/axios.ts` adds bearer, `__tenant`, and `Accept-Language` headers.
- `src/lib/i18n/i18n.ts` supports ABP keys such as `AbpAccount::Login`.

The protected Team example expects the `OrbitAdmin.Team` policy. Rename it to a permission exposed by your backend.
