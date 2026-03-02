module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'next/core-web-vitals', // Next.js 核心規則
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    '@next/next/no-html-link-for-pages': 'off',
    'prefer-const': 'warn',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^[A-Z_]',
      },
    ],
    'react/no-unescaped-entities': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
    },
  ],
};
