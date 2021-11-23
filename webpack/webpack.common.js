/* global devServer */
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const config = require('./config');

// Our function that generates our html plugins
function generateHtmlPlugins(templateDir) {
    // Read files in /html directory
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir)).filter(function (file) {
        //ignore folder
        return file.indexOf('.html') > -1;
    });

    return templateFiles.map((item) => {
        // Split names and extension
        const parts = item.split('.');
        const name = parts[0];
        const extension = parts[1];
        // Create new HTMLWebpackPlugin with options
        return new HtmlWebPackPlugin({
            filename: `${name}.html`,
            template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
            chunks: ['reactContexts'],
        });
    });
}
const htmlPlugins = generateHtmlPlugins('../src/html');

class WatchForHotHTMLChanges {
    apply(compiler) {
        compiler.hooks.watchRun.tap('WatchForHotHTMLChanges', (comp) => {
            if (comp.modifiedFiles) {
                const changedFiles = Array.from(comp.modifiedFiles, (file) => `\n  ${file}`).join('');
                console.log('===============================');
                console.log('FILES CHANGED:', changedFiles);
                console.log('===============================');

                devServer.sendMessage(devServer.webSocketServer.clients, 'content-changed');
            }
        });
    }
}

const copyWebPack = new CopyWebpackPlugin({
    patterns: [
        {
            from: path.resolve(__dirname, '../src/externals'),
            to: 'externals',
        },
    ],
});

module.exports = {
    entry: config.entry,
    output: {
        path: path.resolve(__dirname, `../${config.buildFolder}`), // Output folder
        filename: 'js/[name].js', // JS output path
    },
    resolve: {
        alias: config.alias,
    },
    module: {
        rules: [
            {
                // HTML
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: false,
                            interpolate: true, // allow HTML snippets with commonJs require tags
                        },
                    },
                ],
            },
            {
                // Inline SVG
                test: /inline-.+\.svg$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                        },
                    },
                ],
            },
            {
                // JavaScript and JSX only (no JSON)
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                // Images & fonts
                test: /\.(png|svg|jpg|gif|woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /inline-.+\.svg$/,
                type: 'asset/resource',
                generator: {
                    filename: './mysource_files/[name][ext]',
                },
            },
        ],
    },
    plugins: [new ESLintPlugin({extensions: ['js', 'jsx']})].concat(htmlPlugins).concat(new WatchForHotHTMLChanges()).concat(copyWebPack),
    optimization: {
        minimize: false,
        runtimeChunk: false,
    },
};
