module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
  },
  rules: {
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'jsx-quotes': ['off', 'double'],
    '@typescript-eslint/comma-dangle': ['off', 'error'],
    '@typescript-eslint/indent': 'off',
    'implicit-arrow-linebreak': ['off', 'error'],
    'operator-linebreak': ['off', 'error'],
    'react/jsx-one-expression-per-line': 'off',
  },
};
