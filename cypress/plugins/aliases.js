const path = require('path');
const globalAliases = require('../../webpack/config').alias;
globalAliases['cypress'] = path.resolve(__dirname, '../../cypress');

module.exports = {
    resolve: {
        alias: globalAliases,
    },
};
