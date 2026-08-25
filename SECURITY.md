# Security Policy

## Supported versions

Security fixes are applied to the latest version on the default branch.

## Reporting a vulnerability

Do not open a public issue for a suspected vulnerability. Use GitHub's **Security → Report a vulnerability** private reporting flow after the repository is published. If private vulnerability reporting is not enabled, contact the repository owner privately.

Include the affected revision, impact, reproduction steps, and any suggested mitigation. Avoid including real credentials, tokens, personal data, or production endpoints.

## Authentication note

This starter stores the OIDC user in browser local storage, matching the documented ABP React template approach. Applications with stricter threat models should evaluate a Backend-for-Frontend architecture with `HttpOnly` cookies. Frontend permission checks are user-interface controls; every backend endpoint must enforce authorization independently.
