# @qingshaner/devtools

## 2.0.0

### Major Changes

- 19999fc: - Change `./biome` to export a Biome configuration manifest with a `recommended` preset. Consumers that need the previous direct configuration export must switch to `@qingshaner/devtools/biome-legacy`. Move the shared configuration to `configs/recommended.json`, include the manifest in the published package, and remove the `noUndeclaredClasses` rule.
  - Enable `noEmit` in the base TypeScript preset. Consumers that emit JavaScript or declarations must explicitly override `noEmit` to `false`.
  - Add reusable `./oxfmt` and `./oxlint` configuration exports with import sorting, Tailwind CSS sorting, and lint rules.
  - Update repository tooling: add Oxfmt and Oxlint development dependencies and Knip integration, replace the format and lint scripts with `check`, and normalize the Changesets configuration.

## 1.0.1

### Patch Changes

- af9335e: Update package config

## 1.0.0

### Major Changes

- 76dcba7: - Replace the `./tsconfig/app.json` export with `./tsconfig/web.json`. Update existing imports and `extends` paths to the new export. The web preset now uses ES2025 libraries and no longer includes Node.js types by default.
  - Add `./tsconfig/react.json`, extending the web preset with the React JSX transform and TypeScript extension imports.
  - Enable unused local, unused parameter, and unchecked side-effect import checks in the base TypeScript preset. Consumers may need to fix newly reported errors.
  - Require Node.js 24 or newer and Biome `^2.5.15`, and enable package.json field sorting in the shared Biome configuration while disabling the conflicting generic key sorter for package.json files.
  - Update development dependencies and the pnpm lockfile, align editor formatting actions, and update release automation for the new toolchain with OIDC permissions.

## 0.0.3

### Patch Changes

- be56090: - Simplify release automation by removing redundant CI, coverage, test, and build steps.
  - Stop passing the unused npm token during publishing.

## 0.0.2

### Patch Changes

- 5750f4a: - Replace the `./config` export with explicit `./tsconfig/base.json`, `./tsconfig/node.json`, and `./tsconfig/app.json` exports.

## 0.0.1

### Patch Changes

- 58f42da: - Publish reusable Biome, CSpell, and TypeScript configurations.
  - Replace the sample library and JSR release path with configuration package exports.
