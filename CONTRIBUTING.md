# Contributing

Thank you for improving this project. Small, focused pull requests are easiest to review.

## Development setup

1. Install Node.js 22 or newer.
2. Fork and clone the repository.
3. Run `npm ci`.
4. Copy `.env.example` to `.env.local` when compile-time overrides are needed.
5. Run `npm run dev`.

## Before opening a pull request

Run the complete local verification suite:

```bash
npm run check
```

For ABP integration changes, document which backend topology was tested:

- Layered or single-layer application
- Separate Auth Server or unified host
- Microservice Web Gateway
- ABP and .NET versions

Do not commit credentials, client secrets, access tokens, private certificates, or environment-specific production configuration.

## Pull requests

- Explain the problem and the chosen solution.
- Include tests for behavior changes.
- Update documentation when configuration or public APIs change.
- Keep unrelated formatting or dependency changes out of the pull request.

By contributing, you agree that your contribution is licensed under the MIT License.
