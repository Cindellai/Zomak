import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'
import { globalIgnores } from 'eslint/config'

const currentDirectory = path.dirname(fileURLToPath(import.meta.url))
const compat = new FlatCompat({ baseDirectory: currentDirectory })

const config = [
  globalIgnores([
    '.next/**',
    'node_modules/**',
    'public/**',
    'sanity/**',
    '*.png',
    'next-env.d.ts'
  ]),
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      '@next/next/no-img-element': 'off'
    }
  }
]

export default config
