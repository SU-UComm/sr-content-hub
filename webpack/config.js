const glob = require('glob');
const path = require('path');

module.exports = {
    buildFolder: 'build',
    host: '127.0.0.1',
    port: 3000,
    watchFiles: ['./src/**/*.*'],
    //purgeCssPath: `${path.join(__dirname)}/../src/**/*.html`,
    devServerClient: {
        logging: 'info',
        overlay: {errors: true, warnings: false},
    },
    publicPath: '/',
    proxy: {
        // '/api': {
        //     target: 'https://domain.tld:80',
        //     changeOrigin: true
        // }
    },
    alias: {
        cypress: path.resolve(__dirname, '../cypress/'),
        nodeModules: path.resolve(__dirname, '../node_modules/'),
        src: path.resolve(__dirname, '../src/'),
        modules: path.resolve(__dirname, '../src/modules'),
        helpers: path.resolve(__dirname, '../src/helpers'),
        images: path.resolve(__dirname, '../src/images'),
    },
    entry: {
        global: glob.sync('./src/modules/**/global.js'),
        tailwind: glob.sync('./src/js/tailwind.js'),
        chHome: glob.sync('./src/modules/Home.jsx'),
        chNewContent: glob.sync('./src/modules/NewContent.jsx'),
        chAllContent: glob.sync('./src/modules/AllContent.jsx'),
        chInsights: glob.sync('./src/modules/Insights.jsx'),
    },
    chunks: {
        allPages: ['global', 'tailwind'],
        pages: [
            {
                pages: ['index'],
                addChunks: ['chHome'],
                removeChunks: [],
            },
            {
                pages: ['newContent'],
                addChunks: ['chNewContent'],
                removeChunks: [],
            },
            {
                pages: ['allContent'],
                addChunks: ['chAllContent'],
                removeChunks: [],
            },
            {
                pages: ['insights'],
                addChunks: ['chInsights'],
                removeChunks: [],
            },
        ],
    },
    rewrites: [
        {from: /^\/$/, to: '/'},
        {from: /./, to: '/'},
    ],
};
