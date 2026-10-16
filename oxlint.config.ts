import { defineConfig } from 'oxlint'

export default defineConfig({
  categories: {
    correctness: 'error'
  },
  env: {
    builtin: true
  },
  overrides: [
    {
      files: ['**/*.svelte', '**/*.astro', '**/*.vue'],
      rules: {
        'no-unused-vars': 'off',
        'prefer-const': 'off',
        'typescript/consistent-type-imports': 'off'
      }
    },
    {
      files: ['**/*.vue'],
      rules: {
        'react/rules-of-hooks': 'off'
      }
    }
  ],
  plugins: ['typescript', 'unicorn', 'oxc', 'react', 'jsx-a11y', 'vitest'],
  rules: {
    curly: ['warn', 'all'],
    'jsx-a11y/role-supports-aria-props': 'error',
    'no-case-declarations': 'error',
    'no-console': 'warn',
    'no-throw-literal': 'warn',
    'no-unused-labels': 'error',
    'no-unused-private-class-members': 'error',
    'no-unused-vars': [
      'warn',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'none',
        varsIgnorePattern: '^_'
      }
    ],
    'no-useless-concat': 'warn',
    'operator-assignment': ['warn', 'always'],
    'oxc/bad-min-max-func': 'error',
    'react/jsx-fragments': ['error', 'syntax'],
    'react/only-export-components': [
      'error',
      {
        allowConstantExport: true
      }
    ],
    'react/rules-of-hooks': 'error',
    'require-await': 'warn',
    'typescript/array-type': [
      'warn',
      {
        default: 'array'
      }
    ],
    'typescript/consistent-type-imports': 'error',
    'typescript/prefer-for-of': 'warn',
    'unicorn/consistent-assert': 'warn',
    'unicorn/error-message': 'warn',
    'unicorn/explicit-length-check': 'warn',
    'unicorn/prefer-at': 'warn',
    'vitest/no-standalone-expect': 'warn',
    yoda: 'warn'
  }
})
