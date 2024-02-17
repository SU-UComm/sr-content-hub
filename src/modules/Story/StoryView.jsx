import React, {useState, useEffect} from 'react';
import {getAPIData} from '../Helpers/requests';
import {BackToPageButton} from '../Home/BackToPageButton.jsx';
import {Oval} from 'react-loader-spinner';
import {CardButtons} from '../Card/CardButtons.jsx';
import {reformatDate} from '../Helpers/dateHelpers';
import {FullStory} from './FullStory.jsx';
import {decodeHTML} from '../Helpers/helperFunctions.js';

const dataObj = {
    id: '128334',
    type: 'page_standard',
    type_name: 'Standard Page',
    version: '0.0.7',
    name: 'SLS Relaunches ‘Stanford Legal’ Podcast',
    short_name: 'SLS Relaunches ‘Stanford Legal’ Podcast',
    status: {
        id: 2,
        code: 'under_construction',
        name: 'Under Construction',
    },
    created: {
        date: '2024-01-23T13:56:10-08:00',
        user_id: '6004',
    },
    updated: {
        date: '2024-01-25T02:46:43-08:00',
        user_id: '57',
    },
    published: {
        date: null,
        user_id: null,
    },
    status_changed: {
        date: '2024-01-23T13:56:10-08:00',
        user_id: '6004',
    },
    attributes: {
        short_name: 'SLS Relaunches ‘Stanford Legal’ Podcast',
        name: 'SLS Relaunches ‘Stanford Legal’ Podcast',
    },
    metadata: {
        hubStatus: ['submitted'],
        hubStatusDescription: [],
        hubVersionHistory: ['[{"date":1706054817693,"message":"New version of story pushed from source"}]'],
        hubReviewMsg: [],
        seoTitle: ['SLS Relaunches ‘Stanford Legal’ Podcast'],
        canonicalUrl: ['https://law.stanford.edu/press/sls-relaunches-stanford-legal-podcast/'],
        seoDescription: [],
        seoKeywords: ['Stanford Legal, SLS News and Announcements, Yes, Public'],
        robots: ['index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'],
        publishedDate: ['2023-12-18 01:42:35'],
        modifiedDate: ['2023-12-18 01:48:01'],
        srAudience: [],
        srMessage: [],
        srContentType: [],
        srFeaturedUnit: [],
        srContentCategory: [],
        srContentMainTopic: [],
        srContentTopic: [],
        srContentSubtopic: [],
        embargoFlag: [],
        embargoPublishDate: ['2024-01-01 00:00:00'],
        pageType: ['story'],
        teaser: [
            '<p>STANFORD, CA, December 18, 2023&mdash;Stanford Law School (SLS) announced today the relaunch of Stanford Legal, a bi-weekly podcast that delves into the cases, questions, conflicts, and legal issues that are [&hellip;]</p>',
        ],
        featuredImage: ['128338'],
        featuredVideo: [],
        mediaContacts: [],
        featuredMediaOrientation: ['vertical'],
        storyLayout: ['Basic'],
        bannerImg: [],
        bannerCaption: [],
        bannerImgType: ['normal'],
        summary: [
            '<p>STANFORD, CA, December 18, 2023&mdash;Stanford Law School (SLS) announced today the relaunch of Stanford Legal, a bi-weekly podcast that delves into the cases, questions, conflicts, and legal issues that are [&hellip;]</p>',
        ],
        storyFormat: ['standard'],
        mediaAttachments: ['128338'],
        featuredImageTwitter: [],
        featuredImageOg: [],
        hideSocialMedia: [],
        hideBottomBox: [],
        contributorsAuthors: [],
        contributorsProducers: [],
        contributorsWriters: [],
        contributorsEditors: [],
        contributorsVideographers: [],
        contributorsPhotographyDirector: [],
        contributorsMediaContacts: [],
        bylineAuthor: ['Monica Schreiber'],
        bylineText: [],
        bylineUrl: [],
        ogLocale: ['en_US'],
        ogType: ['article'],
        twitterCard: ['summary_large_image'],
        authorId: [],
        authorName: [],
        srcOrigin: ['law.stanford.edu'],
        srcOriginType: ['Wordpress'],
        srcContentSource: ['Stanford Law School'],
        srcTitle: ['SLS Relaunches ‘Stanford Legal’ Podcast'],
        srcSummary: [
            '<p>STANFORD, CA, December 18, 2023&mdash;Stanford Law School (SLS) announced today the relaunch of Stanford Legal, a bi-weekly podcast that delves into the cases, questions, conflicts, and legal issues that are [&hellip;]</p>',
        ],
        srcPublishedDate: ['2023-12-18 01:42:35'],
        srcFeaturedImage: [],
        slug: ['sls-relaunches-stanford-legal-podcast'],
        srcKeywords: ['Stanford Legal, SLS News and Announcements, Yes, Public'],
        srcPostId: ['458351'],
        srcUrl: ['https://law.stanford.edu/press/sls-relaunches-stanford-legal-podcast/'],
        srcStatus: ['publish'],
        debugFeedUrl: ['https://law.stanford.edu/wp-json/wp/v2/news/458351'],
        debugPushTs: ['1706054760164'],
        debugBlueprintId: ['128334'],
        storyType: ['5981'],
        sections: [],
        topics: [],
        messages: [],
        feeds: [],
        contentPartners: ['5859'],
        storyAudience: [],
        debug: [],
    },
};

export const StoryView = () => {
    const [data, setData] = useState([]); // data from endpoint
    const [isLoading, setIsLoading] = useState(false); // Loader flag
    // const location = useLocation();
    const [cardData, setCardData] = useState([]); // data from endpoint
    const [summary, setSummary] = useState('');

    const fetchData = async (id) => {
        setIsLoading(true);
        // replace with getSearchData from requests.js with blank query once CORS is resolved
        try {
            const d = await getAPIData(id);
            console.log('Story data: ', d);
            setData(d);
            let summary = decodeHTML(d.metadata.srcSummary[0]);
            setSummary(summary);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        let id = window.location.search;
        let match = id.match(/=(\d+)/);
        if (match && match[1]) {
            id = parseInt(match[1], 10);
        }

        if (id) {
            fetchData(id);
        } else {
            setData(dataObj);
            let summary = decodeHTML(data.metadata.srcSummary[0]);
            setSummary(summary);
        }
        setIsLoading(false);
    }, []);

    return isLoading ? (
        <Oval visible={true} height="80" width="80" color="#B1040E" secondaryColor="gray" ariaLabel="oval-loading" />
    ) : (
        <div className="su-col-span-full xl:su-col-start-2 xl:su-col-span-10" id="view-story" data-id={data.id}>
            <section className="su-relative su-border-b su-border-gray su-mt-60 su-mb-50 su-pb-[5.5rem] su-pt-60 md:su-mt-45 md:su-pt-70">
                <BackToPageButton page="home" />

                <div className="su-flex su-flex-col lg:su-flex-row su-gap-xs su-justify-between su-items-center">
                    <h2 className="su-font-serif su-mb-0">View Story</h2>

                    <div className="su-flex su-flex-col sm:su-flex-row su-items-center su-gap-[10px]">
                        <CardButtons listMetadata={data.metadata} assetId={data.id} />
                    </div>
                </div>
            </section>

            <FullStory data={data} />
        </div>
    );
};
