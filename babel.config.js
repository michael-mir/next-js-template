/* next/babel: {
    'styled-jsx': {}
    'preset-env': {}
    'preset-react': {}
    'class-properties': {}
    'transform-runtime': {}
    'preset-typescript': {}
  }
*/

module.exports = {
  presets: [['next/babel']],
  plugins: [[
    'transform-imports', {
      lodash: {
        transform: member => `lodash/${member}`,
        preventFullImport: true,
      },
    },
  ]],

  env: {
    production: {
      plugins: [
        ['react-remove-properties', { properties: ['data-testid'] }],
        'transform-remove-console',
      ],
    },
  },
};
