import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

export const FullStory = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleFullStory = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section id="full-story" className={`su-group full-width-bg su-relative ${isOpen ? 'su-pb-120 open' : ''}  su-bg-gray-bg before:su-bg-gray-bg after:su-bg-gray-bg`}>
            <div
                id="full-story-toggle"
                onClick={toggleFullStory}
                className="su-pb-60 su-pt-80 su-flex su-justify-between su-items-center su-border-gray hover:su-cursor-pointer group-[.open]:su-border-b"
            >
                <h2 className="su-font-serif su-mb-0">Full Story</h2>
                <button className="su-w-50 su-border-none su-bg-transparent hover:su-bg-transparent">
                    <svg className={`su-inline ${isOpen ? 'su-rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 12 8" fill="none">
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

            <div className={`${isOpen ? 'su-flex' : 'su-hidden'} su-mt-45 su-flex-col su-gap-[30px]`}>
                <div>
                    <p className="small-heading">Author</p>
                    <p className="su-py-20 su-mb-0">{props.data.bylineAuthor ? props.data.bylineAuthor : 'NA'}</p>
                </div>
                <div
                    className="su-pb-45 
                                    su-border-b su-border-gray
                "
                >
                    <p className="small-heading">Story</p>

                    <div className="su-py-20 [&>p:last-child]:su-mb-0">
                        <div className="su-py-20 [&>p:last-child]:su-mb-0">
                            {/* {typeof contentHubAPI !== 'undefined' ? ( */}
                            <iframe
                                id="story-content-iframe"
                                src="https://sug-web.matrix.squiz.cloud/content/stories/content-partners/stanford-law-school/sls-relaunches-stanford-legal-podcast?SQ_DESIGN_NAME=content_only"
                                data-src="https://sug-web.matrix.squiz.cloud/content/stories/content-partners/stanford-law-school/sls-relaunches-stanford-legal-podcast"
                                style={{
                                    width: '100%',
                                    height: '750px',
                                    borderColor: 'rgb(201, 201, 201)',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                }}
                            />
                            {/* ) : null} */}
                        </div>
                    </div>
                </div>

                <div>
                    <p className="small-heading su-mb-30">Media</p>
                    <div className="su-mt-40 su-pt-30 first:su-mt-0 first:su-pt-0 su-flex su-flex-col lg:su-flex-row su-gap-xl">
                        <div className="su-flex su-items-center su-justify-center su-w-full lg:su-max-w-[610px] lg:su-max-h-[402px]">
                            <img
                                src="https://sug-web.matrix.squiz.cloud/_media/images/content-partners/stanford-law-school/sls-relaunches-stanford-legal-podcast2.jpg"
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
                                <p className="su-leading-[3.6rem] su-mb-0"></p>
                            </li>
                            <li className="mb-0">
                                <p className="su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8">Captions</p>
                                <p className="su-leading-[3.6rem] su-mb-0">
                                    <em>N/A</em>
                                </p>
                            </li>
                            <li className="mb-0">
                                <p className="su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8">Dimensions</p>
                                <p className="su-leading-[3.6rem] su-mb-0">750x500</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

FullStory.propTypes = {
    data: PropTypes.shape({
        bylineAuthor: PropTypes.string,
        name: PropTypes.string,
    }),
};
