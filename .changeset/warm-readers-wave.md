---
"@qingshaner/devtools": major
---

- Change `./biome` to export a Biome configuration manifest with a `recommended` preset. Consumers that need the previous direct configuration export must switch to `@qingshaner/devtools/biome-legacy`. Move the shared configuration to `configs/recommended.json`, include the manifest in the published package, and remove the `noUndeclaredClasses` rule.
- Enable `noEmit` in the base TypeScript preset. Consumers that emit JavaScript or declarations must explicitly override `noEmit` to `false`.
- Add reusable `./oxfmt` and `./oxlint` configuration exports with import sorting, Tailwind CSS sorting, and lint rules.
- Update repository tooling: add Oxfmt and Oxlint development dependencies and Knip integration, replace the format and lint scripts with `check`, and normalize the Changesets configuration.
