import globals from 'globals'
import pluginJs from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
  {
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 12,
      sourceType: 'module'
    }
  },
  pluginJs.configs.recommended,
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          tabWidth: 2,
          useTabs: false,
          jsxSingleQuote: true,
          trailingComma: 'none',
          arrowParens: 'always',
          endOfLine: 'lf'
        }
      ]
    }
  }
]
