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
        reactApp: glob.sync('./src/modules/_ReactApp/render.jsx'),
    },
    chunks: {
        allPages: ['global', 'tailwind'],
        pages: [
            {
                pages: ['reactApp'],
                addChunks: ['reactApp'],
                removeChunks: [],
            },
        ],
    },
    rewrites: [
        {from: /^\/$/, to: '/reactRouter.html'},
        {from: /./, to: '/reactRouter.html'},
    ],
};
