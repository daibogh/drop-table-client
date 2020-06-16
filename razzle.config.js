const LoadableWebpackPlugin = require("@loadable/webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const postcssNormalize = require('postcss-normalize');
const ForkTSCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const {addSassPlugin} = require('./config/sass-plugin')

// const sassRegex = /\.(scss|sass)$/;
// const sassModuleRegex = /\.module\.(scss|sass)$/;
// const getStyleLoaders = (cssOptions, preProcessor) => {
// 	const loaders = [
// 		{
// 			loader: MiniCssExtractPlugin.loader
// 		},
// 		{
// 			loader: require.resolve('css-loader'),
// 			options: cssOptions,
// 		},
// 		{
// 			loader: require.resolve('postcss-loader'),
// 			options: {
// 				ident: 'postcss',
// 				plugins: () => [
// 					require('postcss-flexbugs-fixes'),
// 					require('postcss-preset-env')({
// 						autoprefixer: {
// 							flexbox: 'no-2009',
// 						},
// 						stage: 3,
// 					}),
// 					postcssNormalize(),
// 				],
// 				sourceMap: false,
// 			},
// 		},
// 	].filter(Boolean);
// 	if (preProcessor) {
// 		loaders.push({
// 			loader: require.resolve(preProcessor),
// 			options: {
// 				sourceMap: false,
// 			},
// 		});
// 	}
// 	return loaders;
// };

module.exports = {
  plugins: [
    'babel-ts',
  //   {
  //   name: 'typescript',
  //   // options: {
  //   //   useBabel: true,
  //   //   tsLoader: {
  //   //     transpileOnly: true,
  //   //     experimentalWatchApi: true,
  //   //   },
  //   //   forkTsChecker: {
  //   //     tsconfig: './tsconfig.json',
  //   //     tslint: './tslint.json',
  //   //     watch: './src',
  //   //     typeCheck: true,
  //   //   },
  //   // },
  //   options: {
  //     useBabel: true,
  //     useEslint: true,
  //     forkTsChecker: {
  //       tsconfig: './tsconfig.json',
  //       tslint: undefined,
  //       watch: './src',
  //       typeCheck: true
  //     }
  //   }
  // },
'bundle-analyzer', 'serviceworker'],
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
    // config.plugins.push(new MiniCssExtractPlugin({
		// 	filename: 'static/css/bundle.[contenthash:8].css',
		// 	chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
		// 	allChunks: true,

		// }))

		// config.module.rules.push(
		// 	{
		// 		test: sassRegex,
		// 		exclude: sassModuleRegex,
		// 		use: getStyleLoaders(
		// 			{
		// 				importLoaders: 2,
		// 				sourceMap: false,
		// 			},
		// 			'sass-loader'
		// 		),
		// 		sideEffects: true,
		// 	},
		// 	{
		// 		test: sassModuleRegex,
		// 		use: getStyleLoaders(
		// 			{
		// 				importLoaders: 2,
		// 				sourceMap: false,
		// 				modules: true,
		// 				getLocalIdent: getCSSModuleLocalIdent,
		// 			},
		// 			'sass-loader'
		// 		),
		// 	}
		// )
    

    
    return config;
  },
};
