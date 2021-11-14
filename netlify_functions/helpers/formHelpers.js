module.exports = {
    /**
     * Transform JSON to POST request string
     * @param {object} inputJSON JSON to be transformed
     * @returns {string} POST request string
     */
    generateFormData(inputJSON) {
        var formBody = [];
        for (var property in inputJSON) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(inputJSON[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        return formBody.join('&');
    },
};
