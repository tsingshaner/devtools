---
"@qingshaner/devtools": major
---

- Replace the `./tsconfig/app.json` export with `./tsconfig/web.json`. Update existing imports and `extends` paths to the new export. The web preset now uses ES2025 libraries and no longer includes Node.js types by default.
- Add `./tsconfig/react.json`, extending the web preset with the React JSX transform and TypeScript extension imports.
- Enable unused local, unused parameter, and unchecked side-effect import checks in the base TypeScript preset. Consumers may need to fix newly reported errors.
- Require Node.js 24 or newer and Biome `^2.5.15`, and enable package.json field sorting in the shared Biome configuration while disabling the conflicting generic key sorter for package.json files.
- Update development dependencies and the pnpm lockfile, align editor formatting actions, and update release automation for the new toolchain with OIDC permissions.
