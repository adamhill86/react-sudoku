module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-react',
    'eslint-plugin-prettier',
  ],
  extends: ['react-app'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'arrow-body-style': ['warn', 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': ["error", "last"],
    'indent': ['error', 2],
    'jsx-quotes': ['error', 'prefer-single'],
    'prefer-const': 'error',
    'quotes': ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
  }
}
