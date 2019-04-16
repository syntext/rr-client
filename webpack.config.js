const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = (env, argv) => ({
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                resolve: {
                    extensions: ['.js', '.jsx'],
                },
                exclude: /node_modules/,
                loaders: ['babel-loader'],
            },
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    fix: true,
                    emitWarning: true
                },
            },
            {
                test: /\.html$/,
                loaders: ['html-loader'],
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    entry: [
        './src/index.jsx'
    ],
    output: {
        filename: argv.mode === 'development' ? '[name].[hash].js' : '[name].[chunkhash].js',
        publicPath: '/',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './static/index.html',
            filename: './index.html',
        }),
    ],
    devServer: {
        port: 8008,
        hot: true,
        compress: false,
        contentBase: path.join(__dirname, 'dist'),
        writeToDisk: false,
        historyApiFallback: true
    },
})
