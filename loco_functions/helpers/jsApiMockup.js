const mockErrorId = 997;
const mockedErrorResponse = {
    error: `Assetid "${mockErrorId}" provided is invalid or doesn't exist on system`,
    errorCode: 'assetNotFound',
};

/**
 * Return mocked jsApi response
 * @param {string} queryString jsApi POST request query string
 * @returns {JSON|error} JSON response or Error() if unhandled type
 */
const mockRespone = (queryString) => {
    //const inputQuery = JSON.parse(queryString);
    return pickRequestType(queryString);
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
        case 'getMetadata':
            return getMetadata(inputQuery);
        case 'batchRequest':
            return batchRequest(inputQuery);
        case 'createAsset':
            return createAsset(inputQuery);
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
            clonedAssets: [
                {
                    id: parseInt(Math.random() * (10000 - 1000) + 1000, 10),
                    link_id: parseInt(Math.random() * (10000 - 1000) + 1000, 10),
                    name: inputQuery.clone_name,
                },
            ],
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
            contextualable_screens: {
                details: 'attribute',
                metadata: 'metadata',
            },
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
        return {
            success: responseArray,
        };
    }
};

const getMetadata = (inputQuery) => {
    if (inputQuery.id === mockErrorId) {
        return mockedErrorResponse;
    } else {
        return {
            hubStatus: 'submitted',
            hubStatusDescription: '',
            hubVersionHistory:
                '[{"date":1709914737651,"message":"New version of story pushed from source"},{"date":1709672777949,"message":"New version of story pushed from source"}]',
            hubReviewMsg: '',
            seoTitle: 'Getting to the Heart of Criminal Defense',
            canonicalUrl: 'https://law.stanford.edu/stanford-lawyer/articles/getting-to-the-heart-of-criminal-defense/',
            seoDescription: '',
            seoKeywords: 'Online Features',
            robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
            publishedDate: '2024-03-05 04:11:43',
            modifiedDate: '2024-03-08 00:17:23',
            includePageTopMargin: 'yes',
            includePageBottomMargin: 'yes',
            includePageHero: 'yes',
            pageTitleAlignment: 'left',
            srAudience: '[]',
            srMessage: '[]',
            srContentType: '28192',
            srFeaturedUnit: '28355',
            srContentCategory: '',
            srContentMainTopic: '',
            srContentTopic: '[]',
            srContentSubtopic: '[]',
            srAllCategories: '[]',
            embargoFlag: '',
            embargoPublishDate: '2024-01-01 00:00:00',
            pageType: 'story',
            teaser: '<p>A Bay Area man hopped in a friend\u2019s car after work. The next thing he knew, he was flat on the ground, handcuffed, and surrounded by police officers with guns [&hellip;]</p>\n',
            featuredImage: '130985',
            featuredVideo: '',
            featuredMediaCaption: '',
            featuredMediaCredit: '',
            mediaContacts: '',
            storyLayout: 'Basic',
            bannerImg: '',
            featuredMediaOrientation: 'vertical',
            bannerCaption: 'Stanford Law School\u2019s Criminal Defense Clinic Marks a Decade of Compassionate Representation and Mindful Reflection',
            basicStoryBannerType: 'image',
            bannerImgType: 'normal',
            summary:
                '<p>A Bay Area man hopped in a friend\u2019s car after work. The next thing he knew, he was flat on the ground, handcuffed, and surrounded by police officers with guns [&hellip;]</p>\n',
            storyFormat: 'standard',
            mediaAttachments: '["130985","130986","130987"]',
            featuredImageTwitter: '',
            featuredImageOg: '',
            hideSocialMedia: '',
            hideBottomBox: '',
            basicStoryBannerCarousel: '[]',
            contributorsAuthors: '[]',
            contributorsProducers: '[]',
            contributorsWriters: '[]',
            contributorsEditors: '[]',
            contributorsVideographers: '[]',
            contributorsPhotographyDirector: '',
            contributorsMediaContacts: '[]',
            bylineAuthor: 'Monica Schreiber',
            bylineText: '',
            bylineUrl: '',
            ogLocale: 'en_US',
            ogType: 'article',
            twitterCard: 'summary_large_image',
            authorId: '',
            authorName: '',
            srcOrigin: 'law.stanford.edu',
            srcOriginType: 'Wordpress',
            srcContentSource: 'Stanford Law School',
            srcTitle: 'Getting to the Heart of Criminal Defense',
            srcSummary:
                '<p>Stanford Law School&rsquo;s Criminal Defense Clinic Marks a Decade of Compassionate Representation and Mindful Reflection A Bay Area man hopped in a friend&rsquo;s car after work. The next thing he [&hellip;]</p>',
            srcPublishedDate: '2024-03-05 04:11:43',
            srcFeaturedImage: '',
            slug: 'getting-to-the-heart-of-criminal-defense',
            srcKeywords: 'Online Features',
            srcPostId: '463824',
            srcUrl: 'https://law.stanford.edu/stanford-lawyer/articles/getting-to-the-heart-of-criminal-defense/',
            srcStatus: 'publish',
            debugFeedUrl: 'https://law.stanford.edu/wp-json/wp/v2/lawyer-article/463824',
            debugPushTs: '1709914653644',
            debugBlueprintId: '130887',
            storyType: '28192',
            sections: '[]',
            topics: '[]',
            messages: '[]',
            feeds: '[]',
            contentPartners: '["28355"]',
            storyAudience: '[]',
            debug: '',
        };
    }
};

const batchRequest = (inputQuery) => {
    if (inputQuery.id === mockErrorId) {
        return mockedErrorResponse;
    } else {
        return [
            {
                short_name: 'Getting to the Heart of Criminal Defense',
                conditions: [],
                available_conditions: [],
                name: 'Getting to the Heart of Criminal Defense',
            },
            {
                hubStatus: 'submitted',
                hubStatusDescription: '',
                hubVersionHistory:
                    '[{"date":1709914737651,"message":"New version of story pushed from source"},{"date":1709672777949,"message":"New version of story pushed from source"}]',
                hubReviewMsg: '',
                seoTitle: 'Getting to the Heart of Criminal Defense',
                canonicalUrl: 'https://law.stanford.edu/stanford-lawyer/articles/getting-to-the-heart-of-criminal-defense/',
                seoDescription: '',
                seoKeywords: 'Online Features',
                robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
                publishedDate: '2024-03-05 04:11:43',
                modifiedDate: '2024-03-08 00:17:23',
                includePageTopMargin: 'yes',
                includePageBottomMargin: 'yes',
                includePageHero: 'yes',
                pageTitleAlignment: 'left',
                srAudience: '[]',
                srMessage: '[]',
                srContentType: '28192',
                srFeaturedUnit: '28355',
                srContentCategory: '',
                srContentMainTopic: '',
                srContentTopic: '[]',
                srContentSubtopic: '[]',
                srAllCategories: '[]',
                embargoFlag: '',
                embargoPublishDate: '2024-01-01 00:00:00',
                pageType: 'story',
                teaser: '<p>A Bay Area man hopped in a friend\u2019s car after work. The next thing he knew, he was flat on the ground, handcuffed, and surrounded by police officers with guns [&hellip;]</p>\n',
                featuredImage: '130985',
                featuredVideo: '',
                featuredMediaCaption: '',
                featuredMediaCredit: '',
                mediaContacts: '',
                storyLayout: 'Basic',
                bannerImg: '',
                featuredMediaOrientation: 'vertical',
                bannerCaption: 'Stanford Law School\u2019s Criminal Defense Clinic Marks a Decade of Compassionate Representation and Mindful Reflection',
                basicStoryBannerType: 'image',
                bannerImgType: 'normal',
                summary:
                    '<p>A Bay Area man hopped in a friend\u2019s car after work. The next thing he knew, he was flat on the ground, handcuffed, and surrounded by police officers with guns [&hellip;]</p>\n',
                storyFormat: 'standard',
                mediaAttachments: '["130985","130986","130987"]',
                featuredImageTwitter: '',
                featuredImageOg: '',
                hideSocialMedia: '',
                hideBottomBox: '',
                basicStoryBannerCarousel: '[]',
                contributorsAuthors: '[]',
                contributorsProducers: '[]',
                contributorsWriters: '[]',
                contributorsEditors: '[]',
                contributorsVideographers: '[]',
                contributorsPhotographyDirector: '',
                contributorsMediaContacts: '[]',
                bylineAuthor: 'Monica Schreiber',
                bylineText: '',
                bylineUrl: '',
                ogLocale: 'en_US',
                ogType: 'article',
                twitterCard: 'summary_large_image',
                authorId: '',
                authorName: '',
                srcOrigin: 'law.stanford.edu',
                srcOriginType: 'Wordpress',
                srcContentSource: 'Stanford Law School',
                srcTitle: 'Getting to the Heart of Criminal Defense',
                srcSummary:
                    '<p>Stanford Law School&rsquo;s Criminal Defense Clinic Marks a Decade of Compassionate Representation and Mindful Reflection A Bay Area man hopped in a friend&rsquo;s car after work. The next thing he [&hellip;]</p>',
                srcPublishedDate: '2024-03-05 04:11:43',
                srcFeaturedImage: '',
                slug: 'getting-to-the-heart-of-criminal-defense',
                srcKeywords: 'Online Features',
                srcPostId: '463824',
                srcUrl: 'https://law.stanford.edu/stanford-lawyer/articles/getting-to-the-heart-of-criminal-defense/',
                srcStatus: 'publish',
                debugFeedUrl: 'https://law.stanford.edu/wp-json/wp/v2/lawyer-article/463824',
                debugPushTs: '1709914653644',
                debugBlueprintId: '130887',
                storyType: '28192',
                sections: '[]',
                topics: '[]',
                messages: '[]',
                feeds: '[]',
                contentPartners: '["28355"]',
                storyAudience: '[]',
                debug: '',
            },
        ];
    }
};

const createAsset = (inputQuery) => {
    if (inputQuery.id === mockErrorId) {
        return mockedErrorResponse;
    } else {
        return {name: 'Getting to the Heart of Criminal Defense', id: '131055', link_id: 159435};
    }
};

module.exports = {
    mockRespone,
};
