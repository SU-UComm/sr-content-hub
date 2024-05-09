export const contentHubAPI = {
    search: {
        allContent: `${window.globalData.urls.contentHub}/r/api/a/all-content`,
        newContent: `${window.globalData.urls.contentHub}/r/api/cm/new-content`,
        myContent: `${window.globalData.urls.contentHub}/r/api/cp/my-content`,
    },
    modules: {
        homeMyContent: `${window.globalData.urls.contentHub}/r/api/cp/my-content`,
        homeLatestContent: `${window.globalData.urls.contentHub}/r/api/cm/latest-content`,
        userData: `${window.globalData.urls.contentHub}/r/api/a/usr`,
        hubStatus: `${window.globalData.urls.contentHub}/r/api/a/hub-status?ids=`,
        contentApi: `${window.globalData.urls.contentApi}`,
        relMedia: `${window.globalData.urls.contentHub}/r/api/a/related-media?id=`,
        relTerms: `${window.globalData.urls.contentHub}/r/api/a/taxonomy-terms?ids=`,
        beaconEndpoint: `${window.globalData.urls.contentHub}/r/h/ch/beacon`,
        authorization: `${window.globalData.urls.contentHub}/r/api/a/authorization`,
    },
    vars: {
        srDrafts: '130757',
        matrixUrl: `${window.globalData.urls.contentHub.replace('content', '')}`,
        placeholderImg: `${window.globalData.urls.contentHub.replace('content', '')}_media/content-hub-images/placeholder-images/fallback-image.png`,
    },
    icons: {
        search: `${window.globalData.urls.contentHub.replace('content', '')}__data/assets/file/0023/31982/search.svg`,
    },
};

const requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
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
    // console.log('URL,', requestUrl);
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
    // console.log('URL,', requestUrl);
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
// `${contentHubAPI.modules.contentApi}/assets/${assetID}?data=attributes,metadata,urls`;
export const getAPIData = async (assetID) => {
    const requestUrl = `${contentHubAPI.modules.contentApi}?id=${assetID}`;
    // console.log('API DATA URL,', requestUrl);
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
    // console.log('URL,', url);
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
