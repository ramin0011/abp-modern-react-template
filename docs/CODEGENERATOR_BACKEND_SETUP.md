# CodeGenerator Backend Setup

The checked-in React configuration targets a unified ABP API and Auth Server at `https://localhost:44366` and runs the SPA at `http://localhost:3000`.

No backend credentials belong in this repository. The frontend needs only public URLs, the public OIDC client ID, and public scope names.

## Security action required

Credentials were exposed while discussing the backend configuration. Rotate all exposed values before running or publishing the backend, including:

- The external AI provider API key
- PostgreSQL credentials
- Certificate passphrases
- String-encryption passphrases

Removing or editing a message does not make an exposed credential safe again. Generate new values at their respective providers and update private deployment configuration. Enable GitHub push protection to help block future secret commits.

## Frontend values

The React app now uses:

| Setting | Value |
|---|---|
| Application URL | `http://localhost:3000` |
| API URL | `https://localhost:44366` |
| OIDC issuer | `https://localhost:44366/` |
| OIDC client | `CodeGenerator_App` |
| Login callback | `http://localhost:3000/auth/callback` |
| Logout return | `http://localhost:3000` |
| Assumed API scope | `CodeGenerator` |
| Example protected policy | `AbpIdentity.Users` |

The backend was not running during integration, so `CodeGenerator` must be confirmed against the issuer's discovery document when it starts.

## Update `App` settings

Add the React origin to the existing comma-separated values. Preserve all existing origins; do not copy secrets into this example.

```jsonc
{
  "App": {
    "SelfUrl": "https://localhost:44366",
    "CorsOrigins": "<existing origins>,http://localhost:3000",
    "RedirectAllowedUrls": "<existing URLs>,http://localhost:3000,http://localhost:3000/auth/callback"
  }
}
```

Use plain URL strings in the real JSON—not Markdown link syntax. If a Windows path appears in JSON, escape its backslash, for example `C:\\codes`.

## Add the OpenIddict configuration entry

Add a public React application beside the existing Blazor and Swagger entries:

```json
{
  "OpenIddict": {
    "Applications": {
      "CodeGenerator_App": {
        "ClientId": "CodeGenerator_App",
        "RootUrl": "http://localhost:3000"
      }
    }
  }
}
```

Add the entry to the configuration read by the database migrator/data seeder. In some ABP solutions that is a separate `DbMigrator/appsettings.json`; in a unified project it may be the same application configuration.

## Update the OpenIddict data seed contributor

Adding an arbitrary configuration key does not guarantee that older or customized ABP seed code will create the client. Inspect the backend's `OpenIddictDataSeedContributor` or equivalent. It must create `CodeGenerator_App` with these capabilities:

```text
Client type: public
Consent type: implicit
Grant types: authorization_code, refresh_token
PKCE: required
Redirect URI: http://localhost:3000/auth/callback
Post-logout redirect URI: http://localhost:3000
Scopes: openid, profile, email, phone, roles, CodeGenerator
```

Follow the existing `CreateApplicationAsync` helper signature in your generated backend. The intended block is conceptually:

```csharp
var rootUrl = configuration["OpenIddict:Applications:CodeGenerator_App:RootUrl"]
    ?.TrimEnd('/');

await CreateApplicationAsync(
    name: "CodeGenerator_App",
    type: OpenIddictConstants.ClientTypes.Public,
    consentType: OpenIddictConstants.ConsentTypes.Implicit,
    displayName: "CodeGenerator React",
    secret: null,
    grantTypes: new List<string>
    {
        OpenIddictConstants.GrantTypes.AuthorizationCode,
        OpenIddictConstants.GrantTypes.RefreshToken
    },
    scopes: commonScopes.Union(new[] { "CodeGenerator" }).ToList(),
    redirectUris: new List<string> { $"{rootUrl}/auth/callback" },
    postLogoutRedirectUris: new List<string> { rootUrl! }
);
```

This is an integration shape, not a drop-in guarantee: generated helper signatures differ between ABP versions. Copy the structure of an existing public client in your contributor and use the exact values above.

The SPA must not have a client secret.

## Seed the client

Run the backend's database migrator or data-seeding process after changing configuration and the contributor.

Some customized contributors return immediately when a client already exists. If `CodeGenerator_App` was previously seeded with incorrect URLs, update or remove only that application through your normal administration/data migration process and seed it again.

## Confirm the resource scope

Start the backend and open:

```text
https://localhost:44366/.well-known/openid-configuration
```

Check `scopes_supported` for `CodeGenerator`. If the backend uses a different API resource scope, replace `CodeGenerator` in:

- `dynamic-env.json`
- `.env.example`
- `src/env.ts`

Do not guess additional service scopes. Request only resources the React client needs.

## Verify CORS and application configuration

After signing in, verify that these requests succeed:

```text
GET https://localhost:44366/api/abp/application-configuration
GET https://localhost:44366/api/<your-application-endpoint>
```

Requests should contain a bearer token and `Accept-Language`. When a tenant is selected, they also contain ABP's `__tenant` header.

The Team example now requires `AbpIdentity.Users`. A user without that policy will not see or enter the page. Change the policy in `src/router.tsx` and `src/lib/routing/route-config.ts` if your backend uses a different permission.

## Local certificate

The browser must trust the ASP.NET Core certificate for `https://localhost:44366`. If necessary, run the normal .NET development-certificate trust flow on the backend machine before testing OIDC redirects.

