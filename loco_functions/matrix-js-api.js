const mockHelpers = require('../src/helpers/mockHelpers.js');
const jsApiMockup = require('../src/helpers/jsApiMockup.js');

exports.handler = async (req) => {
    if (req.httpMethod === 'OPTIONS') {
        // Handle OPTIONS
        return {
            statusCode: 204,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                Allow: 'OPTIONS, GET, HEAD, POST',
                'Cache-Control': 'max-age=604800',
            },
        };
    } else if (req.httpMethod === 'GET' && req.queryStringParameters?.SQ_ACTION === 'getToken') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Content-Type': 'text/html; charset=UTF-8',
                'Cache-Control': 'no-cache',
            },
            body: '1234TOKEN4321',
        };
    } else {
        // Handle other types
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
            },
            body: await mockHelpers.returnJsonWithDelay(1, jsApiMockup.mockRespone(req.body)),
        };
    }
};
