# Publishing the Repository on GitHub

The project files are ready for a public GitHub repository. The remaining steps require the repository owner's GitHub account and final repository URL.

## Create and push the repository

Create an empty GitHub repository without generating another README, license, or `.gitignore`. Then run commands shaped like:

```bash
git remote add origin https://github.com/ramin0011/abp-modern-react-template.git
git push -u origin master
```

If the public default branch should be `main`, rename it before the first push:

```bash
git branch -M main
git push -u origin main
```

The CI workflow accepts both `main` and `master`.

## Recommended GitHub settings

After the first push:

1. Add a concise description such as “CLI-free modern React starter for existing ABP Framework backends.”
2. Add topics: `abp`, `abp-framework`, `react`, `vite`, `oidc`, `tanstack-router`.
3. Enable Issues and optionally Discussions.
4. Enable private vulnerability reporting under **Security**.
5. Enable Dependabot alerts and security updates.
6. Protect the default branch and require the CI `validate` job.
7. Require pull-request review when more than one maintainer exists.
8. Disable force pushes and branch deletion for the default branch.
9. Decide whether GitHub Pages is needed; read `docs/DEPLOYMENT.md` before enabling it for the application.

## Final repository-specific edits

Once the final URL is known:

- Replace `https://github.com/ramin0011/abp-modern-react-template` and `YOUR_REPOSITORY_DIRECTORY` in the root README.
- Add a CI badge using the actual owner, repository, and default branch.
- Update the copyright holder in `LICENSE` if desired.
- Add maintainer contact details to `SECURITY.md` if private reporting is unavailable.
- Add a `CODEOWNERS` file when the owner/team names are known.

## First release

After CI passes on the default branch:

1. Confirm `CHANGELOG.md` describes version `0.1.0`.
2. Create an annotated `v0.1.0` tag.
3. Create a GitHub release from that tag.
4. Describe that the release is a frontend starter and does not include an ABP backend.
5. Link the integration guide prominently in the release notes.

Do not attach environment files containing production endpoints if those endpoints are confidential.

