const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@components': path.resolve(__dirname, './src/Components'),
    '@pages': path.resolve(__dirname, './src/Pages'),
    '@css': path.resolve(__dirname, './src/assets/css'),
    '@utils': path.resolve(__dirname, './src/Utils'),
  })
);
