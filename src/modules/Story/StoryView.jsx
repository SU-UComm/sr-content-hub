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
    const [data, setData] = useState(dataObj); // data from endpoint
    const [isLoading, setIsLoading] = useState(false); // Loader flag
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
        // setIsLoading(true);
        let id = window.location.search;
        let match = id.match(/=(\d+)/);
        if (match && match[1]) {
            id = parseInt(match[1], 10);
        }

        if (id) {
            fetchData(id);
            console.log('fetch');
        } else {
            setData(dataObj);
            console.log('assign');
            let summary = decodeHTML(data.metadata.srcSummary[0]);
            setSummary(summary);
        }
        // setIsLoading(false);
    }, []);

    return isLoading ? (
        <Oval visible={true} height="80" width="80" color="#B1040E" secondaryColor="gray" ariaLabel="oval-loading" />
    ) : (
        <div className="su-col-span-full xl:su-col-start-2 xl:su-col-span-10" id="view-story" data-id={data.id}>
            <section className="su-relative su-border-b su-border-gray su-mt-60 su-mb-50 su-pb-[5.5rem] su-pt-60 md:su-mt-45 md:su-pt-70">
                <BackToPageButton page="home" />

                <div className="su-flex su-flex-col lg:su-flex-row su-gap-xs su-justify-between su-items-center">
                    <h2 className="su-font-serif su-mb-0">View Story</h2>

                    <div className="su-flex su-flex-col sm:su-flex-row su-items-center su-gap-[10px]">{/* <CardButtons listMetadata={data.metadata} assetId={data.id} /> */}</div>
                </div>
            </section>

            <section className="su-flex su-flex-col su-gap-[30px] su-mb-80">
                <div>
                    <p className="small-heading">Headline</p>
                    <h2 className="su-py-20 su-mb-0">{data.name}</h2>
                </div>
                <div>
                    <p className="small-heading">Summary</p>
                    <p className="su-mb-0 su-py-20 su-leading-normal">{summary}</p>
                </div>

                <div>
                    <ul className="su-m-0 su-p-0 su-list-none su-gap-y-[12px] sm:su-gap-y-[24px] su-gap-x-[24px] md:su-gap-x-2xl su-grid su-grid-cols-1 sm:su-grid-cols-2">
                        <li className="mb-0">
                            <p className="su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8">Main Category</p>
                            <p className="su-leading-[3.6rem] su-mb-0">
                                <em>{data.metadata.srContentMainTopic && data.metadata.srContentMainTopic.length > 0 ? data.metadata.srContentMainTopic : 'NA'}</em>
                            </p>
                        </li>
                        <li className="mb-0">
                            <p className="su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8">Submitted by</p>
                            <p className="su-leading-[3.6rem] su-mb-0">{data.metadata.srcContentSource}</p>
                        </li>
                        <li className="mb-0">
                            <p className="su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8">Byline</p>
                            <p className="su-leading-[3.6rem] su-mb-0">{data.metadata.bylineAuthor}</p>
                        </li>
                        <li className="mb-0">
                            <p className="su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8">Submitted on</p>
                            <p className="su-leading-[3.6rem] su-mb-0">{data.created.date}</p>
                        </li>
                        <li className="mb-0">
                            <p className="su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8">Other Topics</p>
                            <p className="su-leading-[3.6rem] su-mb-0">{data.metadata.topics.length > 0 ? data.metadata.topics : 'NA'}</p>
                        </li>
                        <li className="mb-0">
                            <p className="su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8">First Published</p>
                            <p className="su-leading-[3.6rem] su-mb-0">{data.metadata.publishedDate}</p>
                        </li>
                        <li className="mb-0">
                            <p className="su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8">Other keywords</p>
                            <p className="su-leading-[3.6rem] su-mb-0">
                                <em>{data.metadata.srcKeywords.length > 0 ? data.metadata.srcKeywords : 'NA'}</em>
                            </p>
                        </li>
                    </ul>
                </div>

                <div className="su-mb-15 su-pb-45 su su-border-b su-flex su-flex-col su-gap-[10px] su-border-gray">
                    <p className="small-heading su-m-0 su-p-0">Original URL</p>
                    <p className="su-mb-10 su-py-20">
                        <a
                            id="story-link"
                            href="https://engineering.stanford.edu/magazine/article/team-scientists-invent-method-modify-behavior-cells"
                            className="su-underline hover:su-cursor-pointer su-break-words"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://engineering.stanford.edu/magazine/article/team-scientists-invent-method-modify-behavior-cells
                        </a>
                    </p>
                    <div className="su-flex su-flex-col sm:su-flex-row su-gap-[10px]">
                        <a
                            id="story-mtx-link"
                            className="button su-group su-flex -su-tracking-[0.176px] su-items-center su-justify-center sm:su-justify-start"
                            href="https://sug-web.matrix.squiz.cloud/content/stories/content-partners/stanford-engineering/a-team-of-scientists-invent-a-method-to-modify-the-behavior-of-cells"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View full story
                            <svg
                                className="su-ml-5 su-transition-colors su-text-red group-hover:su-text-white"
                                width="18"
                                height="18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#a)">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.918 4.546a.9.9 0 0 1 .9-.9h7.637a.9.9 0 0 1 .9.9v7.636a.9.9 0 0 1-1.8 0V6.718l-7.373 7.373a.9.9 0 1 1-1.273-1.272l7.373-7.373H5.818a.9.9 0 0 1-.9-.9Z"
                                        fill="currentColor"
                                    ></path>
                                </g>
                                <defs>
                                    <clipPath id="a">
                                        <path fill="#fff" d="M0 0h18v18H0z"></path>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>

                        <button className="js-copy-link su-group su-flex su-items-center -su-tracking-[0.176px] su-justify-center sm:su-justify-start">
                            Copy Link
                            <svg
                                className="su-ml-5 su-transition-colors su-text-red group-hover:su-text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.6201 6.87995L14.6591 7.841C14.3036 8.19649 13.7608 8.22842 13.4448 7.91243C13.1288 7.59643 13.1608 7.05366 13.5163 6.69817L14.4394 5.77504C15.0244 5.19006 14.9875 4.20179 14.3572 3.57152C13.727 2.94125 12.7387 2.90439 12.1537 3.48938L8.48886 7.15423C7.90451 7.73857 7.94137 8.72684 8.57164 9.35711C8.88764 9.6731 8.85571 10.2159 8.50021 10.5714C8.14472 10.9269 7.60195 10.9588 7.28596 10.6428C6.02541 9.38225 6.05262 7.3048 7.34603 6.0114L11.0488 2.30862C11.0642 2.29319 11.0802 2.27833 11.0962 2.26469C12.3938 1.05272 14.4098 1.05272 15.6429 2.28583C16.876 3.51895 16.876 5.53491 15.6641 6.8326C15.6504 6.84852 15.6356 6.86452 15.6201 6.87995Z"
                                    fill="currentColor"
                                ></path>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.654 11.9889L7.9512 15.6917C7.93577 15.7071 7.91977 15.722 7.90384 15.7356C6.60616 16.9476 4.5902 16.9476 3.35708 15.7145C2.12397 14.4814 2.12397 12.4654 3.33594 11.1677C3.34958 11.1518 3.36444 11.1358 3.37987 11.1204L4.34092 10.1593C4.69641 9.80384 5.23918 9.77192 5.55518 10.0879C5.87117 10.4039 5.83924 10.9467 5.48375 11.3022L4.56063 12.2253C3.97628 12.8096 4.0125 13.7985 4.64277 14.4288C5.27304 15.0591 6.26195 15.0953 6.84629 14.511L10.5111 10.8461C11.0955 10.2618 11.0586 9.2735 10.4284 8.64323C10.1124 8.32723 10.1449 7.78382 10.4998 7.42897C10.8553 7.07347 11.3981 7.04155 11.714 7.35754C12.9746 8.61808 12.948 10.6949 11.654 11.9889Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="su-flex su-flex-col su-gap-[10px]"></div>
            </section>

            <FullStory data={data} />
        </div>
    );
};
