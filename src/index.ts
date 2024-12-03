/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2024-11-11T16:26:28+01:00
 * @Copyright: Technology Studio
**/

import typescriptEslint from 'typescript-eslint'
import {
  stylisticConfig,
  typescriptConfigList,
} from 'eslint-config-txo-typescript'
import {
  reactConfig,
} from 'eslint-config-txo-typescript-react'

import jestConfigList from './configs/jest.js'

export const config = typescriptEslint.config(
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    extends: [
      // eslint-disable-next-line @typescript-eslint/no-deprecated -- remove when migrated to prettier
      stylisticConfig,
      ...typescriptConfigList,
      reactConfig,
    ],
  },
  ...jestConfigList,
)

export const ignoreList = [
  'commitlint.config.js',
  'coverage/**/*',
  'release.config.js',
  '.releaserc.js',
  'eslint.config.js',
  'node_modules',
  'lib/**/*',
]
