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
    'jsx-quotes': ['error', 'prefer-single']
  }
}
