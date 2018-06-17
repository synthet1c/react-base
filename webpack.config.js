const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	entry: {
		app: `./public/src/index.js`
	},
	devtool: 'source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		compress: true,
		port: 1337,
		hot: true,
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							camelCase: true,
							importLoaders: 2,
							localIndentName: '[name]__[local]--[hash:base64:5]'
						}
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Hot Module Replacement',
			template: path.resolve(__dirname, './public/index.html')
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: ['.js', '.jsx', '.scss']
	},
	output: {
		path: path.resolve(__dirname, './public/dist'),
		filename: '[name].bundle.js'
	},
}