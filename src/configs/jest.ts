/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2024-12-03T16:02:21+01:00
 * @Copyright: Technology Studio
**/

import { jestConfig } from 'eslint-config-txo-typescript'
import typescriptEslint from 'typescript-eslint'

export default typescriptEslint.config(
  {
    files: ['__tests__/**/*.ts'],
    extends: [
      jestConfig,
    ],
  },
)
