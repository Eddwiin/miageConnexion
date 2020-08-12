const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    node: {
        fs: "empty"
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new DotenvPlugin({
            path: './.env',
            safe: true 
        })
    ]
}
