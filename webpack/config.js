const glob = require('glob');
const path = require('path');

module.exports = {
    buildFolder: 'build',
    host: '127.0.0.1',
    port: 3000,
    watchFiles: ['./src/**/*.*'],
    devServerClient: {
        logging: 'info',
        overlay: {errors: true, warnings: false},
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
        reactApp: glob.sync('./src/modules/_ReactApp/render.jsx'),
    },
    chunks: {
        allPages: ['global'],
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
