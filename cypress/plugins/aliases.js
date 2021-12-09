const path = require('path');
const globalAliases = require('../../webpack/config').alias;
globalAliases['cypress'] = path.resolve(__dirname, '../../cypress');
globalAliases['netlify'] = path.resolve(__dirname, '../../netlify_functions');

console.log(JSON.stringify(globalAliases, null, 2));

module.exports = {
    resolve: {
        alias: globalAliases,
    },
};
