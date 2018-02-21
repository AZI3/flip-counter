'use strict';

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    entry: './dev.js',
    devtool: 'source-map',
    output: {
        filename: 'dev.js',
    },
    devServer: {
        compress: true,
        port: 3001,
        index: 'index.html',
        hot: true,
        inline: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    }
});