const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },
            {
                test: /\.html$/,
                loaders: ["html-loader"]
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./static/index.html",
            filename: "./index.html"
        })
    ],
    devServer: {
        port: 8008,
        hot: true,
        compress: false,
        contentBase: path.join(__dirname, 'dist'),
        writeToDisk: false
    }
}
