const contentHubAPI = {
    search: {
        allContent: 'https://sug-web.matrix.squiz.cloud/content/r/api/a/all-content',
        newContent: 'https://sug-web.matrix.squiz.cloud/content/r/api/cm/new-content',
        myContent: 'https://sug-web.matrix.squiz.cloud/content/r/api/cp/my-content',
    },
    modules: {
        homeMyContent: 'https://sug-web.matrix.squiz.cloud/content/r/api/cp/my-content',
        homeLatestContent: 'https://sug-web.matrix.squiz.cloud/content/r/api/cm/latest-content',
        userData: 'https://sug-web.matrix.squiz.cloud/content/r/api/a/usr',
        hubStatus: 'https://sug-web.matrix.squiz.cloud/content/r/api/a/hub-status',
        contentApi: 'https://sug-web.matrix.squiz.cloud/__api',
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
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: '',
        },
    }).then((res) => {
        return (res = res.json());
    });

    return response;
};

/**
 * GET Data
 * @param {string} url endpoint URL
 * @param {string} queryString request query string
 * @returns {object} JSON object
 */
export const getSearchData = async (pageName, queryString = '') => {
    let url = contentHubAPI.search[pageName];
    console.log('URL,', url);
    const response = await fetch(`${url}${queryString ? `?${queryString}` : ''}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: '',
        },
    }).then((res) => {
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
