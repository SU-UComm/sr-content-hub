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
    },
    entry: {
        global: glob.sync('./src/modules/**/global.js'),
        reactContexts: './src/modules/ReactContexts/render.jsx',
        reactRouter: './src/modules/ReactRouter/render.jsx',
        reactExamples: './src/modules/ReactExamples/render.jsx',
    },
    chunks: {
        allPages: ['global'],
        pages: [
            {
                pages: ['reactContexts'],
                addChunks: ['reactContexts'],
                removeChunks: [],
            },
            {
                pages: ['reactRouter'],
                addChunks: ['reactRouter'],
                removeChunks: [],
            },
            {
                pages: ['reactExamples'],
                addChunks: ['reactExamples'],
                removeChunks: [],
            },
        ],
    },
    rewrites: [
        {from: /^\/$/, to: '/reactRouter.html'},
        {from: /./, to: '/reactRouter.html'},
    ],
};
