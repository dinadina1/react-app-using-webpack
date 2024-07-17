const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html")
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'build')
        },
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '*', '.jsx']
    }
}