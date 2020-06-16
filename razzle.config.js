const LoadableWebpackPlugin = require("@loadable/webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const postcssNormalize = require('postcss-normalize');
const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const {addSassPlugin} = require('./config/sass-plugin')

module.exports = {
  plugins: [
    'babel-ts',
    'bundle-analyzer',
    'serviceworker'
  ],
  modify: (defaultConfig, { target, dev }, webpack) => {

    let config = defaultConfig;

    // add loadable webpack plugin only
    // when we are building the client bundle
    if (target === "web") {
      const filename = path.resolve(__dirname, "build");

      // saving stats file to build folder
      // without this, stats files will go into
      // build/public folder
      config.plugins.push(
        new LoadableWebpackPlugin({
          outputAsset: false,
          writeToDisk: { filename },
        })
      );
    }
		config = addSassPlugin(config)
    return config;
  },
};
