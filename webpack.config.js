const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const resolve = (dir) => path.join(__dirname, './', dir);

module.exports = {
	entry: resolve('src/index.js'),
	devServer: {
		contentBase: resolve('build'),
		historyApiFallback: {
			disableDotRule: true,
		},
		inline: true,
		port: 5000,
		open: true,
	},
	mode: 'development',
	module: {
		rules: [
			//Allows use javascript
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/, //don't test node_modules folder
				use: {
					loader: 'babel-loader',
				},
				resolve: {
					extensions: ['.js', '.jsx'],
				},
			},
			//Allows use of CSS
			{
				test: /\.css$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
				],
			},
			//Allows use of images
			{
				test: /\.(png|jpg|svg)$/i,
				loader: 'file-loader',
			},
		],
	},
	plugins: [
		//Allows remove/clean the build folder
		new CleanWebpackPlugin(),
		//Allows update react components in real time
		new HotModuleReplacementPlugin(),
		//Allows to create an index.html in our build folder
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'), //we put the file that we created in public folder
		}),
		//This get all our css and put in a unique file
		new MiniCssExtractPlugin({
			filename: 'styles.[contentHash].css',
		}),
	],
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	output: {
		path: resolve('build'),
		filename: 'bundle.js',
	},
};
