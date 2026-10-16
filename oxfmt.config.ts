import { defineConfig } from 'oxfmt'

export default defineConfig({
  overrides: [
    {
      files: ['**/*.json', '**/*.jsonc'],
      options: {
        printWidth: 100
      }
    }
  ],
  printWidth: 120,
  semi: false,
  singleQuote: true,
  sortImports: {
    customGroups: [
      {
        elementNamePattern: ['http://**', 'https://**', 'bun', 'bun:*', 'node:*'],
        groupName: 'runtime-value',
        modifiers: ['value']
      },
      {
        elementNamePattern: ['http://**', 'https://**', 'bun', 'bun:*', 'node:*'],
        groupName: 'runtime-type',
        modifiers: ['type']
      },
      {
        elementNamePattern: ['./**/*.vue', '../**/*.vue', './**/*.tsx', '../**/*.tsx'],
        groupName: 'components',
        modifiers: ['value']
      }
    ],
    groups: [
      ['value-builtin', 'runtime-value'],
      ['type-builtin', 'runtime-type'],
      {
        newlinesBetween: false
      },
      'value-external',
      'type-external',
      ['value-internal', 'value-subpath'],
      ['type-internal', 'type-subpath'],
      'components',
      ['value-parent', 'value-sibling', 'value-index'],
      ['type-parent', 'type-sibling', 'type-index'],
      ['style', 'side_effect_style'],
      'unknown'
    ]
  },
  sortTailwindcss: {
    functions: ['cn', 'cva']
  },
  trailingComma: 'none'
})
