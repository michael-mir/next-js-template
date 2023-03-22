/*
  0 - off,
  1 - warning,
  2 - error
*/

module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
    project: './tsconfig.eslint.json',
  },
  env: {
    es2021: true,
    browser: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    // ERROR
    'no-tabs': [2, { allowIndentationTabs: true }],
    'no-restricted-imports': [
      2,
      {
        paths: [
          {
            name: 'lodash',
            message: 'Please use lodash/* instead.',
          },
        ],
      },
    ],
    '@typescript-eslint/consistent-type-imports': [2, { disallowTypeAnnotations: false }],
    // WARN
    'prettier/prettier': [1],
    semi: [1, 'always', { omitLastInOneLineBlock: true }],
    'comma-dangle': [1, 'only-multiline'],
    'simple-import-sort/exports': [1],
    'simple-import-sort/imports': [
      1,
      {
        groups: [
          // External packages:
          ['^react', '^@?\\w'],
          // Internal packages:
          ['^@(/.*|$)'],
          // Side effect imports:
          ['^\\u0000'],
          // Parent imports:
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports:
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports:
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'max-len': [
      1,
      {
        code: 100,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-console': [1, { allow: ['info', 'error'] }],
    // OFF
    'sort-imports': 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-extraneous-dependencies': 0,
    'react/function-component-definition': 0,
  },
};
