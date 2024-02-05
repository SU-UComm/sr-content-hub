import React, {useState, useEffect} from 'react';
import {getAPIData} from '../Helpers/requests';
import {BackToPageButton} from '../Home/BackToPageButton.jsx';

export const StoryView = (id) => {
    const [data, setData] = useState([]); // data from endpoint
    const [isLoading, setIsLoading] = useState(false); // Loader flag

    let dataObj = {
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

    const fetchData = async (id) => {
        setIsLoading(true);
        // replace with getSearchData from requests.js with blank query once CORS is resolved
        try {
            const d = await getAPIData(id);
            console.log('Story data: ', d);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        let url = window?.data?.contentHubAPI?.module;
        if (url) {
            fetchData(id);
        } else {
            setData(dataObj);
        }
    }, []);

    return (
        <div className="su-col-span-full xl:su-col-start-2 xl:su-col-span-10" id="view-story" data-id="128004">
            <section className="su-relative su-border-b su-border-gray su-mt-60 su-mb-50 su-pb-[5.5rem] su-pt-60 md:su-mt-45 md:su-pt-70">
                <BackToPageButton page="home" />

                <div className="su-flex su-flex-col lg:su-flex-row su-gap-xs su-justify-between su-items-center">
                    <h2 className="su-font-serif su-mb-0">View Story</h2>

                    <div className="su-flex su-flex-col sm:su-flex-row su-items-center su-gap-[10px]">
                        <button className="button-green js-action--send-to-sr c-button-send">Send to Stanford Report</button>{' '}
                        <button className="c-button-decline js-action--decline">Decline</button>
                        <dialog data-id="128004" className="c-dialog-send su-fixed su-p-0 su-rounded su-border-gray su-bg-white su-w-full su-max-w-[57.4rem]">
                            <button
                                aria-label="close"
                                className="su-w-[23px] su-h-[23px] su-p-0 su-absolute su-right-15 su-top-15 su-border-none su-flex su-items-center su-justify-center hover:su-bg-transparent"
                            >
                                <svg className="" xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none">
                                    <path d="M12.0554 1.9502L1.94434 11.0502" stroke="#E50808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M1.94434 1.9502L12.0554 11.0502" stroke="#E50808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>
                            <div className="c-dialog-body su-p-30 sm:su-p-60">
                                <h3 className="su-mb-0 su-font-serif su-text-center su-tracking-normal">You are accepting this story for publication on Stanford Report</h3>

                                <div className="su-mt-40 su-flex su-flex-col sm:su-flex-row su-gap-[15px] su-justify-center">
                                    <button aria-label="Send teaser" className="button-green js-send-teaser">
                                        Send Teaser
                                    </button>
                                    <button aria-label="Send full content" className="button-green js-send-content">
                                        Send Full Content
                                    </button>
                                    <button aria-label="cancel" className="js-decline">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </dialog>
                        <dialog data-id="128004" className="c-dialog-decline su-fixed su-p-0 su-rounded su-border-gray su-bg-white su-w-full su-max-w-[57.4rem]">
                            <button
                                aria-label="close"
                                className="su-w-[23px] su-h-[23px] su-p-0 su-absolute su-right-15 su-top-15 su-border-none su-flex su-items-center su-justify-center hover:su-bg-transparent"
                            >
                                <svg className="" xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none">
                                    <path d="M12.0554 1.9502L1.94434 11.0502" stroke="#E50808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M1.94434 1.9502L12.0554 11.0502" stroke="#E50808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </button>

                            <div className="c-dialog-body su-p-30 sm:su-p-60">
                                <h3 className="su-mb-10 su-font-serif su-leading-[125%] su-text-center">You are declining this story</h3>
                                <p className="su-mb-10 su-leading-[125%] su-text-center">Add optional note (viewable by content partner)</p>
                                <textarea
                                    className="su-resize-none su-leading-display su-mx-2 su-p-16 su-text-16 su-bg-gray-bg su-rounded su-border-gray su-w-full su-max-w-[450px] su-max-h-[100px]"
                                    name="message-128004"
                                    id=""
                                    rows="5"
                                    autoComplete="off"
                                    aria-label="Optional note (viewable by content partner)"
                                ></textarea>
                                <div className="su-mt-40 su-flex su-flex-col sm:su-flex-row su-gap-[15px] su-justify-center">
                                    <button aria-label="confirm decline" className="button-green js-decline-true">
                                        Yes, Decline
                                    </button>
                                    <button aria-label="cancel" className="js-decline-false">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </dialog>{' '}
                        <span id="js-story-reviewing" data-value="true"></span>
                    </div>
                </div>
            </section>

            <section className="su-flex su-flex-col su-gap-[30px] su-mb-80">
                <div>
                    <p className="small-heading">Headline</p>
                    <h2 className="su-py-20 su-mb-0">A team of scientists invent a method to modify the behavior of cells</h2>
                </div>
                <div>
                    <p className="small-heading">Summary</p>
                    <p className="su-mb-0 su-py-20 su-leading-normal">
                        To demonstrate the new technique, researchers genetically reprogrammed neurons to cover themselves with an artificial mesh that changed their
                        electrochemical functions.
                    </p>
                </div>

                <div>
                    <ul className="su-m-0 su-p-0 su-list-none su-gap-y-[12px] sm:su-gap-y-[24px] su-gap-x-[24px] md:su-gap-x-2xl su-grid su-grid-cols-1 sm:su-grid-cols-2">
                        <li className="mb-0">
                            <p className="su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8">Main Category</p>
                            <p className="su-leading-[3.6rem] su-mb-0">
                                <em>N/A</em>
                            </p>
                        </li>
                        <li className="mb-0">
                            <p className="su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8">Submitted by</p>
                            <p className="su-leading-[3.6rem] su-mb-0">School of Engineering</p>
                        </li>
                        <li className="mb-0">
                            <p className="su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8">Byline</p>
                            <p className="su-leading-[3.6rem] su-mb-0">Tom Abate</p>
                        </li>
                        <li className="mb-0">
                            <p className="su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8">Submitted on</p>
                            <p className="su-leading-[3.6rem] su-mb-0">January 15, 2024</p>
                        </li>
                        <li className="mb-0">
                            <p className="su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8">Other Topics</p>
                            <p className="su-leading-[3.6rem] su-mb-0">
                                <em>N/A</em>
                            </p>
                        </li>
                        <li className="mb-0">
                            <p className="su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8">First Published</p>
                            <p className="su-leading-[3.6rem] su-mb-0">March 24, 2020</p>
                        </li>
                        <li className="mb-0">
                            <p className="su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8">Other keywords</p>
                            <p className="su-leading-[3.6rem] su-mb-0">
                                <em>N/A</em>
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

            <section id="full-story" className="su-group full-width-bg su-relative [&amp;[class~='open']]:su-pb-120 su-bg-gray-bg before:su-bg-gray-bg after:su-bg-gray-bg">
                <div
                    id="full-story-toggle"
                    className="su-pb-60 su-pt-80 su-flex su-justify-between su-items-center su-border-gray hover:su-cursor-pointer group-[.open]:su-border-b"
                >
                    <h2 className="su-font-serif su-mb-0">Full Story</h2>
                    <button className="su-w-50 su-border-none su-bg-transparent hover:su-bg-transparent">
                        <svg className="su-inline group-[.open]:su-rotate-180" xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 12 8" fill="none">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.41416 7.54297L11.7071 2.25007C12.0976 1.85954 12.0976 1.22638 11.7071 0.835856L11.6213 0.750069C11.2307 0.359544 10.5976 0.359545 10.207 0.75007L4.91416 6.04297L6.41416 7.54297Z"
                                fill="#E50808"
                            ></path>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.41416 7.54297L7.91416 6.04297L2.62126 0.750069C2.23074 0.359544 1.59757 0.359545 1.20705 0.75007L1.12126 0.835857C0.730738 1.22638 0.730738 1.85955 1.12126 2.25007L6.41416 7.54297Z"
                                fill="#E50808"
                            ></path>
                        </svg>
                    </button>
                </div>

                <div className="su-hidden group-[.open]:su-flex su-mt-45 su-flex-col su-gap-[30px]">
                    <div>
                        <p className="small-heading">Author</p>
                        <p className="su-py-20 su-mb-0">Tom Abate</p>
                    </div>
                    <div
                        className="su-pb-45 
                                    su-border-b su-border-gray
                "
                    >
                        <p className="small-heading">Story</p>

                        <div className="su-py-20 [&amp;>p:last-child]:su-mb-0">
                            <div className="su-py-20 [&amp;>p:last-child]:su-mb-0">
                                {/* <iframe
                                    id="story-content-iframe"
                                    src="https://sug-web.matrix.squiz.cloud/content/stories/content-partners/stanford-engineering/a-team-of-scientists-invent-a-method-to-modify-the-behavior-of-cells?SQ_DESIGN_NAME=content_only"
                                    data-src="https://sug-web.matrix.squiz.cloud/content/stories/content-partners/stanford-engineering/a-team-of-scientists-invent-a-method-to-modify-the-behavior-of-cells"
                                    style="width: 100%; height: 750px; border-color: rgb(201, 201, 201); border-width: 1px; border-style: solid;"
                                ></iframe> */}
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="small-heading su-mb-30">Media</p>
                        <div className="su-mt-40 su-pt-30 first:su-mt-0 first:su-pt-0 su-flex su-flex-col lg:su-flex-row su-gap-xl">
                            <div className="su-flex su-items-center su-justify-center su-w-full lg:su-max-w-[610px] lg:su-max-h-[402px]">
                                <img
                                    src="https://sug-web.matrix.squiz.cloud/_media/images/content-partners/stanford-engineering/worker-cells.jpg"
                                    alt=""
                                    className="su-aspect-[3/2] su-object-cover"
                                />
                            </div>

                            <ul className="su-m-0 su-p-0 su-list-none su-gap-[15px] su-grid su-grid-cols-1 sm:su-grid-cols-2 lg:su-grid-cols-1">
                                <li className="mb-0">
                                    <p className="su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8">Credit</p>
                                    <p className="su-leading-[3.6rem] su-mb-0">
                                        <em>N/A</em>
                                    </p>
                                </li>
                                <li className="mb-0">
                                    <p className="su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8">Alternative Text</p>
                                    <p className="su-leading-[3.6rem] su-mb-0">
                                        The synthetic mesh (in gold) can change the behavior of neurons shown here.&nbsp;| Ella Maru Studio and Yoon Seok Kim/Jia Liu,
                                        Deisseroth/Bao Labs)
                                    </p>
                                </li>
                                <li className="mb-0">
                                    <p className="su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8">Captions</p>
                                    <p className="su-leading-[3.6rem] su-mb-0">
                                        <em>N/A</em>
                                    </p>
                                </li>
                                <li className="mb-0">
                                    <p className="su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8">Dimensions</p>
                                    <p className="su-leading-[3.6rem] su-mb-0">2012x946</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};