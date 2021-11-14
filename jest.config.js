const path = require('path');

module.exports = {
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/__jest__/**/*.[jt]s?(x)'],
    moduleDirectories: ['node_modules', path.join(__dirname, 'src/modules'), './src', './'],
    moduleNameMapper: {
        '\\.(s?css|less)$': 'identity-obj-proxy',
    },
};
