const glob = require('glob');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMqpackerPlugin = require('css-mqpacker');
const {PurgeCSSPlugin} = require('purgecss-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const config = require('./config');

module.exports = (env) => {
    return merge(common, {
        mode: 'production',
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    mode: 'icss',
                                },
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [CssMqpackerPlugin()],
                                },
                            },
                        },
                        'sass-loader',
                        'import-glob-loader',
                    ],
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
            new CleanWebpackPlugin({
                cleanAfterEveryBuildPatterns: [config.buildFolder],
                verbose: true,
            }),
            // new PurgeCSSPlugin({
            //     paths: glob.sync(config.purgeCssPath, {nodir: true}),
            // }),
        ],
        optimization: {
            minimize: env.minify === 'true' ? true : false,
            splitChunks: {
                chunks: 'all',
                name: 'vendor',
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true,
                    },
                },
            },
        },
    });
};
