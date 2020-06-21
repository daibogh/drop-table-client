const path = require("path");

const webpack = require("webpack");

const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",

  entry: ["./src/index.tsx"],
  optimization: {
    minimize: true, //Update this to true or false
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      app: path.resolve(__dirname, "./src/app/"),
      shared: path.join(__dirname, "/src/shared"),
      core: path.resolve(__dirname, "./src/core/"),
      enums: path.resolve(__dirname, "./src/enums/"),
      utils: path.resolve(__dirname, "./src/utils/"),
      data: path.resolve(__dirname, "./src/data/"),
      assets: path.resolve(__dirname, "./src/assets/"),
    },
  },

  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/",
  },

  plugins: [
    new DuplicatePackageCheckerPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new ExtractTextPlugin("style.css"),
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader",
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
        }),
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      { test: /\.png$/, loader: "file" },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: "file" },
    ],
  },
};
