const { PHASE_PRODUCTION_BUILD } = require('next/dist/shared/lib/constants');

module.exports = (phase) => {
  const isProdBuild = phase === PHASE_PRODUCTION_BUILD;
  /** @type {import('next').NextConfig} */
  const config = {
    compress: true, // default
    swcMinify: true, // default || Terser
    cleanDistDir: true, // default
    reactStrictMode: true,
    transpilePackages: ['lodash-es'],
    // [babel-plugin-transform-imports]:
    modularizeImports: {
      lodash: {
        transform: 'lodash/{{member}}',
        preventFullImport: true,
      },
    },
    experimental: {
      forceSwcTransforms: true, // SWC || Babel
      // optimizeCss: true // Use "Critters" package
    },
    sassOptions: {
      prependData: '@import "mixins";',
    },
    compiler: {
      ...(isProdBuild && {
        // [babel-plugin-react-remove-properties]:
        reactRemoveProperties: { properties: ['^data-testid$'] },
        // [babel-plugin-transform-remove-console]:
        removeConsole: { exclude: ['info', 'error'] },
      }),
    },
  };

  return config;
};
