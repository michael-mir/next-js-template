module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
    'stylelint-config-rational-order',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'string-quotes': 'single',
  },
}
