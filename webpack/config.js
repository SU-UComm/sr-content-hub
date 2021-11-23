const glob = require('glob');
const path = require('path');

module.exports = {
    buildFolder: 'build',
    host: '127.0.0.1',
    port: 3000,
    alias: {
        nodeModules: path.resolve(__dirname, '../node_modules/'),
        src: path.resolve(__dirname, '../src/'),
        modules: path.resolve(__dirname, '../src/modules'),
        helpers: path.resolve(__dirname, '../src/helpers'),
    },
    entry: {
        reactContexts: './src/modules/ReactContexts/render.jsx',
        global: glob.sync('./src/modules/**/global.js'),
        //'main': ['./src/index.js']
        //'main': ['./src/index.js'].concat(js_files)
    },
};
