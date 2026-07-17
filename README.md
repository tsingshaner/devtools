# @qingshaner/devtools

[![npm version](https://img.shields.io/npm/v/@qingshaner/devtools)](https://www.npmjs.com/package/@qingshaner/devtools)
[![CI](https://github.com/tsingshaner/devtools/actions/workflows/ci.yml/badge.svg)](https://github.com/tsingshaner/devtools/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/tsingshaner/devtools)](./LICENSE)

Shared Biome, CSpell, and TypeScript configurations.

## Install

```sh
pnpm add -D @qingshaner/devtools @biomejs/biome
```

Requires Node.js 22 or newer and pnpm 11 or newer.

## Usage

### Biome

```json
{
  "extends": ["@qingshaner/devtools/biome"]
}
```

### CSpell

```yaml
import:
  - '@qingshaner/devtools/cspell'
```

### TypeScript

```json
{
  "extends": "@qingshaner/devtools/config/tsconfig.base.json"
}
```

Application and Node.js presets are also available as `tsconfig.app.json` and `tsconfig.node.json`.

## License

[ISC](./LICENSE)
