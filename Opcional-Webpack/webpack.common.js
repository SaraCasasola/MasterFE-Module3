const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const basePath = __dirname;

module.exports = {    
	context: path.join(basePath, "src"),
	resolve: {
	extensions: [".js", ".ts", ".jsx", ".tsx"]
	},
	entry: {
		app: "./index.tsx",
		appStyles: ["./index.scss"]
	},
	output: {
		filename: "./js/[name].[chunkhash].js",
	},
	module: {
		rules: [
				{
					test: /\.tsx$/,
					exclude: /node_modules/,
					loader: "babel-loader",
				},
				{
					test: /\.scss$/,
					exclude: /node_modules/,
					use: [
						MiniCssExtractPlugin.loader,
						"css-loader",
						{
							loader: "sass-loader",
							options: {
								implementation: require("sass")
							}
						},
					]
				},
				{
					test: /\.css$/,
					exclude: /node_modules/,
					use: [
						MiniCssExtractPlugin.loader,
						"css-loader"
					]
				},
				{
					test: /\.(png|jpg)$/,
					exclude: /node_modules/,
					loader: "url-loader",
					options: {
						limit: 5000,
						name: "./img/[hash].[name].[ext]",
					}
				},
				{
					test: /\.html$/,
					loader: "html-loader",
				}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
				filename: "index.html", 
				template: "index.html",
				hash: true
		}),
		new MiniCssExtractPlugin({
			filename: "./css/[name].[chunkhash].css",
			chunkFilename: "[id].css"
	  }),
	]
};