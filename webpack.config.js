const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const PreloadWebpackPlugin = require("preload-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const CompressionPlugin = require("compression-webpack-plugin");
// const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

const resolve = (dir) => path.join(__dirname, './', dir);
const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';

const WebpackDefinePluginConfig = new webpack.DefinePlugin({
	'process.env': {
		NODE_ENV: JSON.stringify(env),
	},
});

const CreateHtmlWebpackPluginConfig = ({ filename }) =>
	new HtmlWebpackPlugin({
		template: resolve('public/index.html'),
		favicon: resolve('public/RadixSymbol.ico'),
		inject: 'body',
		filename,
	});

const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
	filename: 'css/[name].[hash].css',
	chunkFilename: 'css/[id].[hash].css',
	ignoreOrder: true,
});

const CleanWebpackPluginConfig = new CleanWebpackPlugin({
	verbose: true,
	cleanStaleWebpackAssets: false,
});

module.exports = {
	entry: ['@babel/polyfill', resolve('src/index.js')],
	optimization: {
		runtimeChunk: 'single',
		removeEmptyChunks: true,
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				vendors: {
					reuseExistingChunk: true,
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
				},
			},
		},
		minimizer: [
			new TerserJSPlugin({
				terserOptions: {
					compress: {
						drop_console: true,
					},
					output: {
						comments: false,
					},
					sourceMap: false,
				},
			}),
			new OptimizeCSSAssetsPlugin({}),
		],
	},
	output: {
		filename: '[name].[hash].bundle.js',
		path: resolve('build'),
		publicPath: '/',
		crossOriginLoading: 'use-credentials',
	},
	resolve: {
		modules: [resolve('src'), 'node_modules'],
		extensions: ['.js', '.jsx', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|.json)$/,
				loader: 'babel-loader',
				include: [resolve('src')],
				exclude: resolve('node_modules'),
			},
			{
				test: /\.css$/,
				use: [
					isDev ? 'css-hot-loader' : 'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
				],
			},
			{
				test: /\.scss$/,
				use: [
					isDev ? 'css-hot-loader' : 'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.jpg|png|gif|woff(2)?|eot|ttf|svg|mp4|webm$/,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name].[hash].[ext]',
						limit: 5000,
						outputPath: 'assets',
					},
				},
			},
		],
	},
	node: { fs: 'empty' },
	performance: {
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
	devServer: {
		contentBase: resolve('build'),
		historyApiFallback: {
			disableDotRule: true,
		},
		inline: true,
		port: 3000,
		open: true,
	},
	plugins: [
		// new MomentLocalesPlugin(),
		CreateHtmlWebpackPluginConfig({ filename: 'index.html' }),
		WebpackDefinePluginConfig,
		MiniCssExtractPluginConfig,
		CleanWebpackPluginConfig,
		new Dotenv({
			allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
			systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
		}),
		// new PreloadWebpackPlugin({
		//   rel(entry) {
		//     if (/\.css$/.test(entry)) return "prefetch";
		//     if (/\.woff$/.test(entry)) return "preload";
		//     if (/\.woff2$/.test(entry)) return "preload";
		//     if (/\.svg$/.test(entry)) return "prefetch";
		//     return "prefetch";
		//   },
		//   as(entry) {
		//     if (/\.css$/.test(entry)) return "style";
		//     if (/\.woff$/.test(entry)) return "font";
		//     if (/\.woff2$/.test(entry)) return "font";
		//     // if (/\.svg$/.test(entry)) return "image";
		//     return "script";
		//   },
		// }),
		// // new BundleAnalyzerPlugin({
		// //   analyzerMode: "static",
		// // }),
		// // new CompressionPlugin({
		//   // algorithm: "gzip",
		//   test: /\.(js|jsx|json|css|html|svg)$/,
		//   threshold: 10240,
		//   compressionOptions: { level: 1 },
		//   filename: "[path][base].gz",
		//   minRatio: 0.8,
		// }),
	],
};
