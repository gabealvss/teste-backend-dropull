import { pathsToModuleNameMapper } from 'ts-jest/utils'

import { compilerOptions } from './tsconfig.json'

export default {
  clearMocks: true,
  coverageDirectory: 'coverage',
  preset: 'ts-jest'
}