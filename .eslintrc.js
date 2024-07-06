module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'eslint:recommended',
    'prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:react/jsx-runtime',
  ],
  plugins: ['prettier', 'react', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'no-console': 0,
    'react/state-in-constructor': 0,
    indent: 0,
    'linebreak-style': 0,
    'react/prop-types': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 100,
        tabWidth: 2,
        semi: true,
        endOfLine: 'auto',
      },
    ],
    'import/no-extraneous-dependencies': ['off'],
    'arrow-body-style': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        filter: {
          regex: '^(__typename)$',
          match: false,
        },
      },
    ],
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
    'no-restricted-exports': 'off',
    'class-methods-use-this': 'off',
    'react/require-default-props': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
    ],
  },
  overrides: [
    {
      files: ['**/*{tsx,jsx}'],
      rules: {
        'react/prop-types': 'off',
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
    {
      files: ['**/*.test.{js,jsx}'],
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: './jest.config.js',
          },
        },
      },
    },
  ],
};
