module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['next/core-web-vitals', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
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
      },
    ],
    'react/no-unescaped-entities': 'off',

    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'framer-motion',
            importNames: ['motion'],
            message:
              "Import `motion` from '@/lib/motion' instead so prefers-reduced-motion is honored (see src/lib/motion.tsx).",
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
    },
    {
      files: ['src/lib/motion.tsx'],
      rules: {
        'no-restricted-imports': 'off',
      },
    },
  ],
};
