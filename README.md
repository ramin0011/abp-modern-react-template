# ABP Modern React Starter

An unofficial, CLI-free React starter inspired by the modern [ABP React UI architecture](https://abp.io/docs/latest/framework/ui/react). It gives frontend teams a readable, source-owned application that can be connected to an existing ABP Framework backend without generating the UI with ABP CLI or ABP Studio.

> [!IMPORTANT]
> This is a community starter, not an official Volosoft template or ABP product. ABP, ABP Framework, and Volosoft are trademarks of their respective owners.

## Why this project exists

Use this repository when you already have an ABP backend—or want to build one separately—and prefer to own the React application structure directly.

It demonstrates the same major concepts documented for ABP's modern React UI:

- Runtime `dynamic-env.json` configuration
- OpenID Connect Authorization Code flow with PKCE
- ABP application-configuration and granted policies
- Axios bearer, `__tenant`, and `Accept-Language` headers
- TanStack Router and TanStack Query
- Source-owned shadcn-style components with Tailwind CSS
- React Hook Form, Zod, i18next, Zustand, and Vitest

No ABP CLI command is needed to install or run this frontend.

## Status and scope

This repository is a frontend starter and reference implementation. It does not include:

- An ASP.NET Core or ABP backend
- Database migrations or seed data
- ABP Admin Console
- Generated TypeScript proxies
- Commercial ABP modules or themes
- A client secret—browser applications must remain public OIDC clients

The dashboard and product catalog contain demonstration data. Replace them with typed modules backed by your own application services.

## Quick start

Requirements:

- Node.js 22.12 or newer
- npm 10 or newer

```bash
git clone YOUR_REPOSITORY_URL
cd YOUR_REPOSITORY_DIRECTORY
npm ci
npm run dev
```

Open `http://localhost:3000`.

The interface runs without a backend. Sign-in, server permissions, and authenticated API calls become active after an ABP backend is configured.

## Connect an ABP backend

1. Register or reuse an OpenIddict public SPA client in the backend.
2. Allow `http://localhost:3000` in backend CORS configuration.
3. Register the callback `http://localhost:3000/auth/callback` and logout return `http://localhost:3000`.
4. Grant Authorization Code, PKCE, required scopes, and optionally refresh-token access.
5. Copy the backend API, Auth Server, client ID, and scopes into `dynamic-env.json`.
6. Rename example permissions such as `OrbitAdmin.Team` to policies exposed by your backend.
7. Replace demonstration data with typed API modules under `src/lib/api/`.

The complete walkthrough is in [ABP backend integration](docs/ABP_BACKEND_INTEGRATION.md).

## Configuration example

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
  }
}
```

Edit the root `dynamic-env.json`. Vite copies it to `public/dynamic-env.json` before development and production builds. See [configuration](docs/CONFIGURATION.md) for precedence and deployment details.

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start Vite on port 3000 |
| `npm run build` | Type-check and create `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint with zero warnings allowed |
| `npm test` | Run Vitest once |
| `npm run test:watch` | Run Vitest in watch mode |
| `npm run typecheck` | Run TypeScript project checks |
| `npm run check` | Run lint, tests, and production build |

## Documentation

- [ABP backend integration](docs/ABP_BACKEND_INTEGRATION.md)
- [Runtime configuration](docs/CONFIGURATION.md)
- [Deployment](docs/DEPLOYMENT.md)
- [Project structure](docs/PROJECT_STRUCTURE.md)
- [Authentication architecture](docs/developer/AUTHENTICATION.md)
- [Contributing](CONTRIBUTING.md)
- [Security policy](SECURITY.md)
- [Support](SUPPORT.md)

## Project layout

```text
src/
├── components/
│   ├── layout/       Application shell
│   ├── providers/    React context providers
│   └── ui/           Source-owned UI primitives
├── lib/
│   ├── api/          Axios client and typed backend modules
│   ├── auth/         OIDC client and ABP permissions
│   ├── i18n/         Localization setup
│   └── routing/      Navigation metadata
├── locales/          Client-side translation resources
├── pages/            Route-level pages
├── main.tsx          Runtime bootstrap
└── router.tsx        TanStack route tree
```

## Security

Frontend permission checks are user-interface controls, not a security boundary. Every backend endpoint must enforce its own ABP permissions. Never commit secrets, tokens, production certificates, or confidential endpoints.

Please report vulnerabilities privately as described in [SECURITY.md](SECURITY.md).

## Contributing

Contributions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) and run:

```bash
npm run check
```

before opening a pull request.

## License

Released under the [MIT License](LICENSE).
