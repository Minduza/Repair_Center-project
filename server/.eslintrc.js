module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    node: true,
    rules: {
      '@typescript-eslint/no-var-requires': 0,
    }
  };