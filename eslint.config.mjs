import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { FlatCompat } from '@eslint/eslintrc'

const currentDirectory = path.dirname(fileURLToPath(import.meta.url))
const compat = new FlatCompat({ baseDirectory: currentDirectory })

const config = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      '@next/next/no-img-element': 'off'
    },
    ignores: [
      '.next/**',
      'node_modules/**',
      'public/**',
      'sanity/**',
      '*.png',
      'next-env.d.ts'
    ]
  }
]

export default config
