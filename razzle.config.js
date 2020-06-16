const LoadableWebpackPlugin = require("@loadable/webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const postcssNormalize = require('postcss-normalize');
const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const {addSassPlugin} = require('./config/sass-plugin')
const {addLoadablePlugin} = require('./config/loadable-plugin')

module.exports = {
  plugins: [
    'babel-ts',
    'bundle-analyzer',
    // 'serviceworker'
  ],
  modify: (defaultConfig, { target, dev }, webpack) => {

    let config = defaultConfig;
    config = addLoadablePlugin(config,{ target, dev }, webpack)
    config = addSassPlugin(config)
    
    return config;
  },
};
