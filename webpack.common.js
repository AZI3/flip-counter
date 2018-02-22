'use strict';

const path = require('path');
const styleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist')
    },

    plugins: [
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