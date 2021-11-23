/* global devServer */
const Dotenv = require('dotenv-webpack');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const config = require('./config');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    devServer: {
        onBeforeSetupMiddleware(app) {
            devServer = app; // eslint-disable-line

            // Redirect POST requests to GET
            devServer.app.post('*', (req, res) => {
                res.redirect(req.originalUrl);
            });
        },
        hot: true,
        host: config.host,
        port: config.port,
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
    ],
});
