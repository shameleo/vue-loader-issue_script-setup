const pathUtils = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    context: __dirname,
    mode: 'development',
    entry: './src/index',
    output: {
        path: pathUtils.resolve(__dirname, './dist'),
        filename: `[name].js`
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                    onlyCompileBundledFiles: true
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
};