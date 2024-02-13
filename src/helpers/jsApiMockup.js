const mockErrorId = 997;
const mockedErrorResponse = {error: `Assetid "${mockErrorId}" provided is invalid or doesn't exist on system`, errorCode: 'assetNotFound'};

/**
 * Return mocked jsApi response
 * @param {string} queryString jsApi POST request query string
 * @returns {JSON|error} JSON response or Error() if unhandled type
 */
const mockRespone = (queryString) => {
    const inputQuery = JSON.parse(queryString);
    return pickRequestType(inputQuery);
};

/**
 * Pick proper function to handle request response returned based on inputQuery.type
 * @param {JSON} inputQuery jsApi request json
 * @returns {JSON|error} JSON response or Error() if unhandled type
 */
const pickRequestType = (inputQuery) => {
    switch (inputQuery.type) {
        case 'cloneAsset':
            return cloneAsset(inputQuery);
        case 'getGeneral':
            return getGeneral(inputQuery);
        case 'setMetadataAllFields':
            return setMetadataAllFields(inputQuery);
        default:
            throw new Error(`Unhandled type: ${inputQuery.type}`);
    }
};

/**
 * Clone asset mockup
 * @param {JSON} inputQuery jsApi request json
 * @returns {JSON} mocked response
 */
const cloneAsset = (inputQuery) => {
    if (inputQuery.id === mockErrorId) {
        return mockedErrorResponse;
    } else {
        return {
            success: `Mockup asset name (#${inputQuery.id}) has been successfully cloned to #1234`,
            assetid: inputQuery.id,
            newParent: inputQuery.new_parent,
            clonedAssets: [{id: parseInt(Math.random() * (10000 - 1000) + 1000, 10), link_id: parseInt(Math.random() * (10000 - 1000) + 1000, 10), name: inputQuery.clone_name}],
        };
    }
};

/**
 * Get general information asset mockup
 * @param {JSON} inputQuery jsApi request json
 * @returns {JSON} mocked response
 */
const getGeneral = (inputQuery) => {
    if (inputQuery.id === mockErrorId) {
        return mockedErrorResponse;
    } else {
        return {
            name: 'Mockup name',
            short_name: 'Mockup name',
            asset_id: inputQuery.id,
            id: inputQuery.id,
            type_code: 'folder',
            type: 'Folder',
            icon_path: 'https://mockup.url/__data/asset_types/folder/icon.png',
            web_path: 'https://mockup.url/mockup_name',
            urls: ['https://mockup.url/mockup_name'],
            status: 'Under Construction',
            statusId: '2',
            created: 1637857729,
            created_userid: '65',
            created_username: 'John Doe (Squiz)',
            updated: 1637857730,
            updated_userid: '65',
            updated_username: 'John Doe (Squiz)',
            published: 'Never Published',
            published_userid: 'Never Published',
            published_username: 'Never Published',
            status_changed: 1637857729,
            status_changed_userid: '65',
            status_changed_username: 'John Doe (Squiz)',
            maximum_perm_on_asset: 'Admin Access',
            can_live_edit: true,
            effective_write: true,
            attribute_contextualised: true,
            metadata_contextualised: true,
            contextualable_screens: {details: 'attribute', metadata: 'metadata'},
        };
    }
};

/**
 * Set metadata all fields
 * @param {JSON} inputQuery jsApi request json
 * @returns {JSON} mocked response
 */
const setMetadataAllFields = (inputQuery) => {
    if (inputQuery.id === mockErrorId) {
        return mockedErrorResponse;
    } else {
        const fieldIds = inputQuery.field_id.replace('\\', '').split(',');
        const fieldValues = inputQuery.field_val.replace('\\', '').split(',');
        const responseArray = fieldIds.map((id, i) => {
            return `Metadatafield #${id} has been successfully set to "${fieldValues[i]}" for Asset "Mocked name" (#${inputQuery.id})`;
        });
        return {success: responseArray};
    }
};

module.exports = {
    mockRespone,
};
