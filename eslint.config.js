import typescriptEslint from 'typescript-eslint'

import { config } from './lib/index.js'

/** @type {import('eslint').Linter.Config[]} */
export default typescriptEslint.config(
  {
    files: ['**/*.ts'],
    extends: config,
  },
  {
    ignores: [
      'coverage',
      'lib',
      'node_modules',
    ]
  }
)
