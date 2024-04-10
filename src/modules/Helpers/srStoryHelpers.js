/* ============================================================================================== */
/**
 *  @file releaseStories.js
 *  @description File stores functions for Releasing stories from Content Hub to Stanford Report
 *  @author [Squiz]
 **/
/* ============================================================================================== */
/**
 * @name releaseAsStory
 * @description Releases specific story to Stanford Report as full story
 * @author [ Squiz ]
 **/
export const releaseAsStory = {
    init: (storyId, contentHubAPI) => {
        // Validate input details
        if (typeof storyId === 'undefined') {
            return releaseAsStory.err('Story ID is undefined.');
        }
        // Check if location on where to put the story is available
        const targetLocation = contentHubAPI?.vars?.srDrafts || '';
        if (targetLocation === '') {
            return releaseAsStory.err('Target location is not defined.');
        }

        return releaseAsStory.linkStory(storyId, targetLocation);
    },
    err: (errMsg) => {
        console.log(errMsg);
        return `${errMsg}`;
    },
    linkStory: (storyId, targetId) => {
        // Check if JS API is available
        const jsApi = window?.jsApi || '';
        if (jsApi === '') {
            return releaseAsStory.err('JS API is not available.');
        }
        if (typeof jsApi.createLink !== 'function') {
            return releaseAsStory.err('createLink function inside JS API is not available.');
        }

        // Looks like all the information are in place, we can use the JS API now to release the story
        jsApi.createLink({
            parent_id: targetId,
            child_id: storyId,
            link_type: 'SQ_LINK_TYPE_2',
            link_value: '',
            sort_order: 1,
            is_dependant: 0,
            is_exclusive: 0,
            dataCallback: (resp) => {
                releaseAsStory.releaseOutput(resp);
            },
        });
        return true;
    },
    releaseOutput: (r) => {
        console.log(r);
    },
};
/* ============================================================================================== */
/**
 * @name releaseAsTeaser
 * @description Releases specific story to Stanford Report as teaser
 * @author [ Squiz ]
 **/
export const releaseAsTeaser = {
    init: (storyId, contentHubAPI) => {
        // Validate input details
        if (typeof storyId === 'undefined') {
            return releaseAsTeaser.err('Story ID is undefined.');
        }
        // Check if location on where to put the story is available
        const targetLocation = contentHubAPI?.vars?.srDrafts || '';
        if (targetLocation === '') {
            return releaseAsTeaser.err('Target location is not defined.');
        }

        return releaseAsTeaser.makeTeaser(storyId, targetLocation);
    },
    err: (errMsg) => {
        console.log(errMsg);
        return `${errMsg}`;
    },
    makeTeaser: (storyId, targetLocation) => {
        // Check if JS API is available
        const jsApi = window?.jsApi || '';
        if (jsApi === '') {
            return releaseAsStory.err('JS API is not available.');
        }

        // Looks like all the information are in place, we can use the JS API now to get all the required details
        // First we need to get the data about the current story from Matrix
        jsApi.batchRequest({
            functions: {
                0: {
                    function: 'getAttributes',
                    args: {
                        asset_id: storyId,
                    },
                },
                1: {
                    function: 'getMetadata',
                    args: {
                        asset_id: storyId,
                    },
                },
            },
            dataCallback: (resp) => {
                console.log('resp: ', resp);
                releaseAsTeaser.processStoryDetails(resp, storyId, targetLocation);
            },
        });
    },
    processStoryDetails: (resp, storyId, targetLocation) => {
        // Response is two elements Array: 0 => Attributes, 1 => Metadata
        // To Create new Teaser/Link: We need title and Link Attribute
        const teaserTitle = releaseAsTeaser.getTitle(resp[0]);
        const teaserUrl = releaseAsTeaser.getTargetLink(resp[1]);
        // Check if information are defined
        if (teaserTitle === '' || teaserUrl === '') {
            return releaseAsTeaser.err('Title or Link are missing for Teaser');
        }
        // Prepare object with metadata fields
        const metaDetails = releaseAsTeaser.prepareMetadataObject(resp[1], storyId);
        // All the details are in place :: We need to create the Link asset and set metadata fields for it
        let extraAttr = 'link_url=' + teaserUrl;

        const jsApi = window?.jsApi || '';
        jsApi.createAsset({
            parent_id: targetLocation,
            type_code: 'link',
            asset_name: teaserTitle,
            link_type: 'SQ_LINK_TYPE_2',
            extra_attributes: 1,
            attributes: extraAttr,
            dataCallback: function (resp) {
                if (typeof resp.id === 'string') {
                    // Get Asset Id of the Teaser
                    const teaserId = resp.id;
                    // Move to set the metadata for the asset
                    releaseAsTeaser.setMeta(teaserId, metaDetails, storyId);
                } else {
                    releaseAsTeaser.err('Teaser asset could not be created.');
                }
            },
        });
    },
    setMeta: (teaserId, metaDetails, storyId) => {
        const debugTeaserId = '134758';

        // Set metadata fields for the teaser
        const jsApi = window?.jsApi || '';
        metaDetails[debugTeaserId] = teaserId;
        // setting metadata fields for teaser
        jsApi.setMetadataAllFields({
            asset_id: teaserId,
            field_info: metaDetails,
            dataCallback: function (r) {
                if (typeof r.success === 'undefined') {
                    releaseAsTeaser.err(`Setting up metadata for Teaser: ${teaserId} could not be set successfully.`);
                } else {
                    releaseAsTeaser.endWithSuccess(teaserId, r);
                }
            },
        });

        // set story metadata to have teaserID
        jsApi.setMetadata({
            asset_id: storyId,
            field_id: debugTeaserId,
            field_val: teaserId,
            dataCallback: function (r) {
                if (typeof r.success === 'undefined') {
                    releaseAsTeaser.err(`Setting metadata of Story with teaserID: could not be set successfully.`);
                } else {
                    console.log('Teaser ID (', +teaserId + ') saved in Story (', +storyId + ') metadata');
                }
            },
        });
    },
    endWithSuccess: (teaserId) => {
        // End of the Process :: With Success
        console.log(`New Teaser successfully created, Teaser ID: ${teaserId}.`);
    },
    getTitle: (storyAttr) => {
        return storyAttr.name || '';
    },
    getTargetLink: (metaObj) => {
        // Target Link is stored inside the canonical metadata field
        return metaObj.canonicalUrl || '';
    },
    prepareMetadataObject: (metaArray, storyId) => {
        // Map for field IDs :: List of all the fields that needs to be setup for Teaser
        // "storySource" : "127718" :: Not in use at the moment
        const bluePrintIdField = '30853';
        const debugTeaserId = '134758';
        const hubStatus = '31822';
        const fieldsArr = [
            {name: 'canonicalUrl', id: '5989'},
            {name: 'publishedDate', id: '4538'},
            {name: 'srContentType', id: '60078'},
            {name: 'srFeaturedUnit', id: '60079'},
            {name: 'featuredImage', id: '5043'},
            {name: 'teaser', id: '5047'},
            {name: 'debugBlueprintId', id: bluePrintIdField},
            {name: 'debugTeaserId', id: debugTeaserId},
            {name: 'hubStatus', id: hubStatus},
        ];
        const fieldsOutput = {};
        // Loop through all the fields and get metadata values for them
        fieldsArr.forEach((thisField) => {
            let thisFieldId = thisField.id;
            let thisFieldValue = metaArray[thisField.name];
            fieldsOutput[thisFieldId] = thisFieldValue;
        });
        // Add Blueprint ID :: As Story ID
        fieldsOutput[bluePrintIdField] = storyId;
        fieldsOutput[hubStatus] = 'sent-to-sr';
        console.log('fieldsOutput: ', fieldsOutput);
        return fieldsOutput;
    },
};
