export const contentHubAPI = {
    search: {
        allContent: 'https://sug-web.matrix.squiz.cloud/content/r/api/a/all-content',
        newContent: 'https://sug-web.matrix.squiz.cloud/content/r/api/cm/new-content',
        myContent: 'https://sug-web.matrix.squiz.cloud/content/r/api/cp/my-content',
    },
    modules: {
        homeMyContent: 'https://sug-web.matrix.squiz.cloud/content/r/api/cp/my-content',
        homeLatestContent: 'https://sug-web.matrix.squiz.cloud/content/r/api/cm/latest-content',
        userData: 'https://sug-web.matrix.squiz.cloud/content/r/api/a/usr',
        hubStatus: 'https://sug-web.matrix.squiz.cloud/content/r/api/a/hub-status?ids=',
        contentApi: 'https://sug-web.matrix.squiz.cloud/__api',
        relMedia: 'https://sug-web.matrix.squiz.cloud/content/r/api/a/related-media?id=',
        relTerms: 'https://sug-web.matrix.squiz.cloud/content/r/api/a/taxonomy-terms?ids=',
        beaconEndpoint: 'https://sug-web.matrix.squiz.cloud/content/r/h/ch/beacon',
    },
};

// Bearer token to be replaced with matrix fetch
const requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 12d38e8866ffa3dab979d333957477a9',
    },
};

export const fetchFBData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const res = await response.json();
        return res;
    } catch (error) {
        console.error('Error fetching data:', error);
        return error;
    }
};

/**
 * GET USER Data
 * @param {string} url endpoint URL
 * @param {string} queryString request query string
 * @returns {object} JSON object
 */
export const getUserData = async () => {
    let url = contentHubAPI.modules.userData;
    const response = await fetch(url, requestOptions).then((res) => {
        return (res = res.json());
    });
    return response;
};

/**
 * GET myContent Data
 * @param {string} module to get endpoint URL
 * @param {string} assetID request asset ID
 * @returns {object} JSON object
 */
export const getMyContent = async () => {
    const requestUrl = contentHubAPI.search.myContent;
    const response = await fetch(requestUrl, requestOptions).then((res) => {
        return (res = res.json());
    });
    return response;
};

/**
 * GET related Media Data
 * @param {string} assetID request asset ID
 * @returns {object} JSON object
 */
export const getMedia = async (assetID) => {
    const requestUrl = `${contentHubAPI.modules.relMedia}${assetID}`;
    const response = await fetch(requestUrl, requestOptions).then((res) => {
        return (res = res.json());
    });
    return response;
};

/**
 * GET Taxonomy Terms Data
 * @param {string} assetID array of asset ID
 * @returns {object} JSON object
 */
export const getTaxonomyTerms = async (assetIDs) => {
    const requestUrl = contentHubAPI.modules.relTerms + assetIDs;
    console.log('URL,', requestUrl);
    const response = await fetch(requestUrl, requestOptions).then((res) => {
        return (res = res.json());
    });
    return response;
};

/**
 * GET Hub Status Data
 * @param {string} assetIDs array of asset IDs
 * @returns {object} JSON object
 */
export const getHubStatus = async (assetIDs) => {
    const requestUrl = contentHubAPI.modules.hubStatus + assetIDs;
    console.log('URL,', requestUrl);
    const response = await fetch(requestUrl, requestOptions).then((res) => {
        return (res = res.json());
    });
    return response;
};

/**
 * GET ContentAPI Data
 * @param {string} module to get endpoint URL
 * @param {string} assetID request asset ID
 * @returns {object} JSON object
 */
export const getAPIData = async (assetID) => {
    const requestUrl = `${contentHubAPI.modules.contentApi}/assets/${assetID}?data=attributes,metadata,urls`;
    console.log('URL,', requestUrl);
    const response = await fetch(requestUrl, requestOptions).then((res) => {
        return (res = res.json());
    });
    return response;
};

/**
 * GET Search Data
 * @param {string} url endpoint URL
 * @returns {object} JSON object
 */
export const getSearchData = async (url) => {
    // let url = contentHubAPI.search[pageName];
    console.log('URL,', url);
    const response = await fetch(url, requestOptions).then((res) => {
        return (res = res.json());
    });
    return response;
};

/**
 * POST Data
 * @param {string} url endpoint URL
 * @param {string} queryString request query string
 * @param {object} requestData data to send over
 * @returns {object} JSON object
 */
export const postData = async (url, queryString = '', requestData = {}) => {
    const response = await fetch(`${url}${queryString ? `?${queryString}` : ''}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
    }).then((res) => {
        return (res = res.json());
    });

    return response;
};
