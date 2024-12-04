/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2024-11-11T16:26:28+01:00
 * @Copyright: Technology Studio
**/

import {
  stylisticConfig,
  typescriptConfigList,
  jestConfig,
  typescriptEslintConfig,
} from 'eslint-config-txo-typescript'
import {
  reactConfig,
} from 'eslint-config-txo-typescript-react'

const defaultConfigList = typescriptEslintConfig(
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    extends: [
      // eslint-disable-next-line @typescript-eslint/no-deprecated -- remove when migrated to prettier
      stylisticConfig,
      ...typescriptConfigList,
      reactConfig,
    ],
  },
)

const jestConfigList = typescriptEslintConfig(
  {
    files: ['__tests__/**/*.ts'],
    extends: [
      jestConfig,
    ],
  },
)

export const configList = [
  ...defaultConfigList,
  ...jestConfigList,
  {
    ignores: [
      '.releaserc.js',
      'commitlint.config.js',
      'coverage/**/*',
      'eslint.config.js',
      'jest.config.js',
      'lib/**/*',
      'node_modules',
      'release.config.js',
    ],
  },
]
