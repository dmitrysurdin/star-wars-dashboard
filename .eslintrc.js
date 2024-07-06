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
  },
  overrides: [
    {
      files: ['*.tsx', '*.ts', '*.js', '*.jsx'],
    },
  ],
};
