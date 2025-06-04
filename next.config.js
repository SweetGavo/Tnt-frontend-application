/** @type {import('next').NextConfig} */
const webpackConfig = require('./webpack.config.js');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: ['./styles'],
    prependData: `@import "styles/variables.scss";`
  },
  webpack: (config, options) => {
    // Merge our webpack config with Next.js's default config
    config.resolve.extensions = [...config.resolve.extensions, ...webpackConfig.resolve.extensions];
    config.resolve.alias = { ...config.resolve.alias, ...webpackConfig.resolve.alias };
    
    // Update CSS modules configuration
    const sassRule = config.module.rules.find(
      (rule) => rule.test && rule.test.toString().includes('scss')
    );
    
    if (sassRule && sassRule.oneOf) {
      sassRule.oneOf.forEach(moduleRule => {
        if (moduleRule.use) {
          const cssLoader = moduleRule.use.find(
            (loader) => typeof loader === 'object' && loader.loader && loader.loader.includes('css-loader')
          );
          if (cssLoader && cssLoader.options && cssLoader.options.modules) {
            cssLoader.options.modules = {
              ...cssLoader.options.modules,
              exportLocalsConvention: 'camelCase'
            };
          }
        }
      });
    }

    config.module.rules.push(...webpackConfig.module.rules);
    config.optimization = { ...config.optimization, ...webpackConfig.optimization };

    return config;
  }
};

module.exports = nextConfig;
