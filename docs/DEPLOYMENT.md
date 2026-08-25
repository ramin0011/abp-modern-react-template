# Deployment

The application builds into static files and can be hosted by any HTTPS-capable static web server.

## Production build

```bash
npm ci
npm run check
```

The artifact is written to `dist/`.

## Before deploying

1. Use HTTPS for the frontend, API, gateway, and Auth Server.
2. Update `dynamic-env.json` with production origins.
3. Register production callback and logout URIs in OpenIddict.
4. Add the frontend origin to backend CORS configuration.
5. Confirm API scopes and issuer match the deployed backend.
6. Apply a suitable Content Security Policy and security headers.

## Static server rules

TanStack Router uses browser-history paths. Configure an SPA fallback to `index.html` for routes such as `/products` and `/auth/callback`.

Do not rewrite these resources:

```text
/dynamic-env.json
/assets/*
/favicon.*
```

`/dynamic-env.json` must return valid JSON with `application/json` content type.

## Example Nginx shape

```nginx
location = /dynamic-env.json {
    try_files $uri =404;
    add_header Cache-Control "no-cache";
}

location /assets/ {
    try_files $uri =404;
    add_header Cache-Control "public, max-age=31536000, immutable";
}

location / {
    try_files $uri $uri/ /index.html;
}
```

Add organization-specific TLS and security headers separately.

## Runtime configuration per environment

Prefer one immutable JS/CSS build with a different public configuration file in each environment:

```text
One production build
        │
        ├── Development dynamic-env.json
        ├── Staging dynamic-env.json
        └── Production dynamic-env.json
```

Never inject secrets because every browser can read this file.

## GitHub Pages

GitHub Pages can host documentation and a UI preview, but OIDC requires care:

- Project sites normally use `/repository-name/`; Vite `base` and router history must match.
- GitHub Pages does not provide a standard configurable SPA fallback.
- The registered OpenIddict callback must include the exact Pages URL and prefix.
- A public preview must not target private or localhost-only backends.

For a production OIDC SPA, a host with explicit rewrite rules—such as Azure Static Web Apps, Cloudflare Pages, Netlify, Vercel, S3/CloudFront, or Nginx—is generally simpler. CI validates and uploads `dist` as an artifact but does not deploy automatically because the final origin is required for secure OIDC configuration.

## Cache policy

- Hashed assets under `assets/`: long-lived immutable cache
- `index.html`: short or no cache
- `dynamic-env.json`: no cache or short revalidation

## Post-deployment checks

- Direct navigation to `/products` returns the application.
- Direct navigation to `/auth/callback` returns the application.
- `/dynamic-env.json` returns JSON.
- OIDC discovery is reachable over trusted HTTPS.
- Login and logout return to the exact deployed origin.
- API calls include bearer, culture, and tenant headers as expected.

