# Project Structure

```text
.
├── .github/                 GitHub Actions and contribution templates
├── docs/                    Adopter and developer documentation
├── public/                  Static files copied without bundling
├── src/
│   ├── components/
│   │   ├── layout/          Header, sidebar, and application shell
│   │   ├── providers/       React context providers
│   │   └── ui/              Source-owned UI primitives
│   ├── lib/
│   │   ├── api/             Shared Axios client and feature modules
│   │   ├── auth/            OIDC client and ABP permissions
│   │   ├── i18n/            i18next initialization
│   │   ├── routing/         Menu and route metadata
│   │   ├── runtime-config.ts
│   │   └── utils.ts
│   ├── locales/             Client translation JSON
│   ├── pages/               TanStack route components
│   ├── test/                Shared test setup
│   ├── env.ts               Compile-time fallbacks
│   ├── main.tsx             Bootstrap and provider composition
│   ├── router.tsx           Route tree and guards
│   └── styles.css           Tailwind layers and design tokens
├── dynamic-env.json         Deploy-time public configuration
├── package.json             Commands and dependencies
├── vite.config.ts           Build, aliases, proxy, and config copying
└── vitest.config.ts         Unit-test configuration
```

## Startup flow

```text
Load dynamic environment
        ↓
Initialize OIDC client
        ↓
Create TanStack Query client
        ↓
Mount authentication provider
        ↓
Start TanStack Router
        ↓
Render the application
```

## Adding a feature

For a backend feature such as Orders:

1. Add DTOs and HTTP functions to `src/lib/api/orders.ts`.
2. Add reusable components under `src/components/orders/`.
3. Add the route page under `src/pages/`.
4. Register the route in `src/router.tsx`.
5. Add navigation to `src/lib/routing/route-config.ts`.
6. Apply the same ABP permission to route and navigation checks.
7. Add translation keys under `src/locales/`.
8. Add tests beside the component or module.

Keep API contracts out of visual components, use the shared Axios client, and use TanStack Query for server state.

