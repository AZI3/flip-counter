'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var styleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: __dirname + "/app.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "flipCounter.js"
    },
    devtool: 'source-map',
    // watch: true,
    devServer: {
        open: true,
        port: 3001,
        index: 'index.html',
        hot: true,
        inline: true,
        historyApiFallback: true,
        compress: true
    },
    plugins: [
        new ExtractTextPlugin('css/style.min.css'),
        new styleLintPlugin({
            configFile: '.stylelintrc',
            context: '',
            files: '**/*.scss',
            syntax: 'scss',
            failOnError: false,
            quiet: false
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        {loader: 'postcss-loader'},
                        {loader: 'sass-loader'}
                    ]
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    stats: {
        colors: true
    }
};