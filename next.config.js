const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true, // default === true
  cleanDistDir: true, // default === true
  swcMinify: true, // Off if u need Terser
  reactStrictMode: true,
  transpilePackages: ['lodash-es'],
  modularizeImports: { // [babel-plugin-transform-imports]
    lodash: {
      transform: 'lodash/{{member}}',
      preventFullImport: true,
    },
  },
  experimental: {
    // optimizeCss: true, <-- need "Critters" package
    forceSwcTransforms: true, // Off Babel => On SWC
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'public/styles')],
    prependData: '@import "mixins";',
  },
  compiler: {
    removeConsole: { exclude: ['info', 'error'] }, // [babel-plugin-react-remove-properties]
    reactRemoveProperties: { properties: ['^data-testid$'] }, // [babel-plugin-transform-remove-console]
  },
};

module.exports = nextConfig;
