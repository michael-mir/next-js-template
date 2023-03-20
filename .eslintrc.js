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
  parser: '@typescript-eslint/parser',
  env: {
    es2021: true,
    browser: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'prettier',
    'next',
  ],
  plugins: [
    'simple-import-sort',
    'prettier',
  ],
  rules: {
    // ERROR
    quotes: [2, 'single'],
    'eol-last': [2, 'always'],
    'no-tabs': [2, { 'allowIndentationTabs': true }],
    'no-restricted-imports': [2, {
      paths: [{
        name: 'lodash',
        message: 'Please use lodash/* instead.',
      }],
    }],
    // WARN
    'semi': [1, 'always', { 'omitLastInOneLineBlock': true }],
    'arrow-body-style': [1, 'as-needed'],
    'comma-dangle': [1, 'only-multiline'],
    'simple-import-sort/exports': [1],
    'simple-import-sort/imports': [1],
    'max-len': [1, {
      'code': 100,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreTemplateLiterals: true,
    }],
    'no-console': [1, { 'allow': ['info', 'error'] }],
    // OFF
    'import/prefer-default-export': [0],
    'react/jsx-props-no-spreading': [0],
    'react/function-component-definition': [0],
  },
};
