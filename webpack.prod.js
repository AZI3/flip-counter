'use strict';

const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    entry: './app.js',
    output: {
        filename: 'flip-counter-js.min.js',
        library: 'FlipCounterJs',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    plugins: [
        new UglifyJsPlugin({
            // sourceMap: true,
            uglifyOptions: {
                compress: {
                    warnings: false
                },
                output: {
                    comments: false
                }
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});