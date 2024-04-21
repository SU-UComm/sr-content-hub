const statuses = ['submitted', 'reviewed', 'sent-to-sr', 'published'];

const hubStatus = (ids) => {
    return ids.split(',').map((id, i) => {
        return {
            id: id,
            name: `Mockup name #${i}`,
            hubStatus: statuses[Math.floor(Math.random() * statuses.length)], // get random status
            hubStatusDesc: '',
            hubReviewMsg: '',
        };
    });
};

// Override to avoid cors warning - doesn't impact PROD in any way
const corsOverwrite = {
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type',
};

/**
 * Function description string
 */
const description = 'Content Hub requests mockup';

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
    if (param.paths.join('/') === 'r/api/a/hub-status') {
        return {
            statusCode: 200,
            headers: param.loco.corsHeaders(corsOverwrite),
            body: await param.loco.returnJsonWithDelay(0.25, hubStatus(param?.query?.ids ?? [])),
        };
    } else {
        return {
            statusCode: 200,
            headers: param.loco.corsHeaders(corsOverwrite),
            body: {notSupportedUrl: true},
        };
    }
};

// Export
module.exports = {
    processFunction,
    description,
};
