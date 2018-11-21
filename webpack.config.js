const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin()
    ]
}
