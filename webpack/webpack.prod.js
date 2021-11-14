const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const basePath = __dirname;

// Change path for build
common.output.path = path.resolve(__dirname, '../build');

module.exports = (env) => {
    // Environment variables from script command
    const env_minify = env.minify;
    let minimize = false;

    // Conditional minification
    if (env_minify === 'true') {
        minimize = true;
    }

    return merge(common, {
        mode: 'production',
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader', 'import-glob-loader'],
                },
            ],
        },
        plugins: [
            new Dotenv({
                path: `.env`,
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[name].css',
            }),
            new CleanWebpackPlugin(['build'], {root: basePath + '/' + '..'}),
        ],
        optimization: {
            minimize: minimize,
        },
    });
};
