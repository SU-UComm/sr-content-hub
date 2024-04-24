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

const contentApiResponse = {
    id: '128490',
    type: 'page_standard',
    type_name: 'Standard Page',
    version: '0.0.213',
    name: 'Joy Chen, Entrepreneur in Residence, creates a bridge between education and business',
    short_name: 'Joy Chen, Entrepreneur in Residence, creates a bridge between education and business',
    status: {id: 2, code: 'under_construction', name: 'Under Construction'},
    created: {date: '2024-01-25T09:36:45-08:00', user_id: '6004'},
    updated: {date: '2024-04-23T08:13:51-07:00', user_id: '57'},
    published: {date: null, user_id: null},
    status_changed: {date: '2024-01-25T09:36:45-08:00', user_id: '6004'},
    urls: [
        'https://report.sug-9278.saas.squiz.cloud/content/stories/content-partners/accelerator-for-learning/joy-chen-entrepreneur-in-residence-creates-a-bridge-between-education-and-business',
        'https://sug-web.matrix.squiz.cloud/content/stories/content-partners/accelerator-for-learning/joy-chen-entrepreneur-in-residence-creates-a-bridge-between-education-and-business',
    ],
    url: 'https://sug-web.matrix.squiz.cloud/content/stories/content-partners/accelerator-for-learning/joy-chen-entrepreneur-in-residence-creates-a-bridge-between-education-and-business',
    attributes: {
        short_name: 'Joy Chen, Entrepreneur in Residence, creates a bridge between education and business',
        name: 'Joy Chen, Entrepreneur in Residence, creates a bridge between education and business',
    },
    metadata: {
        hubStatus: ['sent-to-sr'],
        hubStatusDescription: [],
        hubVersionHistory: ['[{\u0022date\u0022:1706204337603,\u0022message\u0022:\u0022New version of story pushed from source\u0022}]'],
        hubReviewMsg: [],
        seoTitle: ['Joy Chen, Entrepreneur in Residence, creates a bridge between education and business'],
        canonicalUrl: ['https://acceleratelearning.stanford.edu/story/joy-chen-entrepreneur-in-residence-creates-a-bridge-between-education-and-business/'],
        seoDescription: ['With decades of experience in the pursuit of academic improvement, Chen hopes to help education scholars and industry move toward shared goals.'],
        seoKeywords: ['Students'],
        robots: [],
        publishedDate: ['2023-11-03 12:03:33'],
        modifiedDate: ['2023-11-03 14:47:15'],
        includePageTopMargin: ['yes'],
        includePageBottomMargin: ['yes'],
        includePageHero: ['yes'],
        pageTitleAlignment: ['left'],
        publishToMobile: ['false'],
        srAudience: [],
        srMessage: [],
        srContentType: [],
        srFeaturedUnit: ['28335'],
        srContentCategory: [],
        srContentMainTopic: [],
        srContentTopic: [],
        srContentSubtopic: [],
        srAllCategories: [],
        embargoFlag: [],
        embargoPublishDate: ['2024-01-01 00:00:00'],
        teaser: [
            '\u003Cp\u003EWith decades of experience in the pursuit of academic improvement, Chen hopes to help education scholars and industry move toward shared goals.\u003C/p\u003E',
        ],
        pressCenter: ['false'],
        featuredImage: ['128494'],
        mediaContacts: [],
        excludeFromIndex: ['false'],
        storyLayout: ['Basic'],
        bannerImg: [],
        featuredMediaCaption: [],
        featuredMediaCredit: [],
        featuredVideo: [],
        featuredMediaOrientation: ['vertical'],
        bannerCaption: [],
        basicStoryBannerType: ['image'],
        bannerImgType: ['normal'],
        basicStoryBannerCarousel: [],
        summary: [
            '\u003Cp\u003EWith decades of experience in the pursuit of academic improvement, Chen hopes to help education scholars and industry move toward shared goals.\u003C/p\u003E',
        ],
        storyFormat: ['standard'],
        mediaAttachments: ['128494'],
        featuredImageTwitter: [],
        featuredImageOg: [],
        hideSocialMedia: [],
        hideBottomBox: [],
        storyCaption01: [],
        storyCredit01: [],
        storyCaption02: [],
        storyCredit02: [],
        storyCaption03: [],
        storyCredit03: [],
        storyCaption04: [],
        storyCredit04: [],
        storyCaption05: [],
        storyCredit05: [],
        storyCaption06: [],
        storyCredit06: [],
        contributorsAuthors: [],
        contributorsProducers: [],
        contributorsWriters: [],
        contributorsEditors: [],
        contributorsVideographers: [],
        contributorsPhotographyDirector: [],
        contributorsMediaContacts: [],
        bylineAuthor: [],
        bylineText: [],
        bylineUrl: [],
        ogLocale: ['en_US'],
        ogType: ['article'],
        twitterCard: ['summary_large_image'],
        authorId: [],
        authorName: [],
        srcOrigin: ['acceleratelearning.stanford.edu'],
        srcOriginType: ['Wordpress'],
        srcContentSource: ['Accelerator For Learning'],
        srcTitle: ['Joy Chen, Entrepreneur in Residence, creates a bridge between education and business'],
        srcSummary: [
            '\u003Cp\u003EWith decades of experience in the pursuit of academic improvement, Chen hopes to help education scholars and industry move toward shared goals.\u003C/p\u003E',
        ],
        srcPublishedDate: ['2023-11-03 12:03:55'],
        srcFeaturedImage: [],
        slug: ['joy-chen-entrepreneur-in-residence-creates-a-bridge-between-education-and-business'],
        srcKeywords: ['Students'],
        srcPostId: ['2705'],
        srcUrl: ['https://acceleratelearning.stanford.edu/story/joy-chen-entrepreneur-in-residence-creates-a-bridge-between-education-and-business/'],
        srcStatus: ['publish'],
        debugFeedUrl: ['https://acceleratelearning.stanford.edu/wp-json/wp/v2/story/2705'],
        debugPushTs: ['1706204277313'],
        debugBlueprintId: ['128490'],
        debugTeaserId: [],
        pageType: ['teaser'],
        storyType: ['5981'],
        sections: [],
        topics: ['5692'],
        messages: [],
        feeds: [],
        contentPartners: ['28335'],
        storyAudience: [],
        debug: [],
    },
};

const taxonomyTerms = [
    {
        id: '5692',
        name: 'students',
    },
];

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
    } else if (param.paths.join('/') === 'r/api/a/content-api') {
        return {
            statusCode: 200,
            headers: param.loco.corsHeaders(corsOverwrite),
            body: await param.loco.returnJsonWithDelay(0.25, contentApiResponse),
        };
    } else if (param.paths.join('/') === 'r/api/a/taxonomy-terms') {
        return {
            statusCode: 200,
            headers: param.loco.corsHeaders(corsOverwrite),
            body: await param.loco.returnJsonWithDelay(0.25, taxonomyTerms),
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
