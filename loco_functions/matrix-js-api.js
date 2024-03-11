const mockHelpers = require('./helpers/mockHelpers.js');
const jsApiMockup = require('./helpers/jsApiMockup.js');

/**
 * Function description string
 */
const description = 'jsApi mockup';

/**
 * Main process function
 * @param {object} param.req entire request object
 * @param {object} param.query GET request query
 * @param {object} param.bodyJSON POST request body
 * @param {string} param.reqMethod request method
 * @param {object} param.loco helper functions object
 * @param {object} param.envVars environment variables
 * @param {array} param.paths array of wildcard paths
 * @returns {object} response object consisting of response statusCode, body and headers object
 */
const processFunction = async (param) => {
    if (param.reqMethod === 'GET' && param.query?.SQ_ACTION === 'getToken') {
        return {
            statusCode: 200,
            headers: param.loco.corsHeaders({'Content-Type': 'text/plain'}),
            body: '1234TOKEN4321',
        };
    } else {
        // Handle other types
        console.log('param.bodyJSON', param.bodyJSON);
        return {
            statusCode: 200,
            headers: param.loco.corsHeaders(),
            body: await mockHelpers.returnJsonWithDelay(0.25, jsApiMockup.mockRespone(param.bodyJSON)),
        };
    }
};

// Export
module.exports = {
    processFunction,
    description,
};
