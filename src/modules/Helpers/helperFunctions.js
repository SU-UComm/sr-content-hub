export const getQueryStringParams = (url) => {
    const urlArr = url.split('?');
    let query = urlArr[1] || '';
    query = query.replace('?', '');

    let queryArr = query.split('&');
    const queryParams = [];

    queryArr.forEach((thisParam) => {
        let thisParamArr = thisParam.split('=');
        if (thisParamArr.length === 2) {
            queryParams.push({name: thisParamArr[0], value: thisParamArr[1]});
        }
    });

    console.log('QUERY STRING PARAMS: ', queryParams);
    return queryParams;
};

export const createUrl = (queryParams) => {
    const queryStringArray = [];

    for (const entry of queryParams) {
        const encodedKey = entry.name;
        const encodedValue = entry.value;
        queryStringArray.push(`${encodedKey}=${encodedValue}`);
    }

    const queryString = queryStringArray.join('&');
    return queryString;
};

export const getLabel = (value) => {
    let label = value;
    if (value.toLowerCase() == 'sent-to-sr') {
        label = 'Publishing soon on Stanford Report';
    } else if (value == 'published') {
        label = 'Published on Stanford Report';
    } else if (value == '') {
        label = 'All';
    } else {
        label = value[0].toUpperCase() + value.substring(1);
    }
    return label;
};
