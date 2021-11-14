const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    devServer: {
        before(app, server) {
            devServer = server;
            app.post('*', (req, res) => {
                res.redirect(req.originalUrl);
            });
        },
        contentBase: '../dist',
        hot: true,
        host: '127.0.0.1',
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader', 'import-glob-loader'],
            },
        ],
    },
    plugins: [
        new Dotenv({
            path: `.env.development`,
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
});
