module.exports = {
    /**
     * Returns stringified JSON with delay
     * @param {number} sec seconds to delay the response
     * @param {JSON} jsonResponse JSON to return as stringified
     * @returns {string} strigified JSON response
     */
    returnJsonWithDelay(sec, jsonResponse) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(JSON.stringify(jsonResponse));
            }, sec * 1000);
        });
    },
};
