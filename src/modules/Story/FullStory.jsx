import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Oval} from 'react-loader-spinner';
import {contentHubAPI, getMedia} from '../Helpers/requests';

export const FullStory = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState(false); // data from endpoint
    const [isLoading, setIsLoading] = useState(false); // Loader flag

    /**
     * @function fetchData
     * @description - Fetches data for the story page
     *
     * @param {string} id - Story ID
     */
    const fetchData = async (id) => {
        setIsLoading(true);
        try {
            const d = await getMedia(id);
            setData(d);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        let url = window?.data?.contentHubAPI;
        if (url) {
            fetchData(props.data.id);
        } else {
            console.log('unable to load story information from Matrix on dev environment');
        }
    }, []);

    const toggleFullStory = () => {
        setIsOpen(!isOpen);
    };

    return isLoading || !data ? (
        <Oval visible={true} height="80" width="80" color="#B1040E" secondaryColor="gray" ariaLabel="oval-loading" />
    ) : (
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
                    <p className="su-py-20 su-mb-0">
                        {props.data.metadata.bylineAuthor && props.data.metadata.bylineAuthor.length > 1 ? props.data.metadata.bylineAuthor : <em>N/A</em>}
                    </p>
                </div>
                <div
                    className="su-pb-45
                                    su-border-b su-border-gray
                "
                >
                    <p className="small-heading">Story</p>

                    <div className="su-py-20 [&>p:last-child]:su-mb-0">
                        <div className="su-py-20 [&>p:last-child]:su-mb-0">
                            <iframe
                                id="story-content-iframe"
                                src={props.frameUrl + '?SQ_DESIGN_NAME=content_only'}
                                data-src={props.frameUrl}
                                style={{
                                    width: '100%',
                                    height: '750px',
                                    borderColor: 'rgb(201 201 201)',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <p className="small-heading su-mb-30">Media</p>
                    {data &&
                        data.map((item, index) => (
                            <div key={index} className="su-mt-40 su-pt-30 first:su-mt-0 first:su-pt-0 su-flex su-flex-col lg:su-flex-row su-gap-xl">
                                <div className="su-flex su-items-center su-justify-center su-w-full lg:su-max-w-[610px] lg:su-max-h-[402px]">
                                    <img src={item.url ? item.url : contentHubAPI.vars.placeholderImg} alt={item.title} className="su-aspect-[3/2] su-object-cover" />
                                </div>

                                <ul className="su-m-0 su-p-0 su-list-none su-gap-[15px] su-grid su-grid-cols-1 lg:su-grid-cols-1 sm:su-grid-cols-2">
                                    <li className="mb-0">
                                        <p className="su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8">Credit</p>
                                        <p className="su-leading-[3.6rem] su-mb-0">{item.mediaCredit ? item.mediaCredit : <em>N/A</em>}</p>
                                    </li>
                                    <li className="mb-0">
                                        <p className="su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8">Alternative Text</p>
                                        <p className="su-leading-[3.6rem] su-mb-0">{item.alt ? item.alt : <em>N/A</em>}</p>
                                    </li>
                                    <li className="mb-0">
                                        <p className="su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8">Captions</p>
                                        <p className="su-leading-[3.6rem] su-mb-0">{item.caption ? item.caption : <em>N/A</em>}</p>
                                    </li>
                                    <li className="mb-0">
                                        <p className="su-leading-[3.6rem] su-font-semibold su-text-16 su-mb-8">Dimensions</p>
                                        <p className="su-leading-[3.6rem] su-mb-0">
                                            {item.width} x {item.height}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

FullStory.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string,
        metadata: PropTypes.shape({
            bylineAuthor: PropTypes.array,
        }),
    }),
    frameUrl: PropTypes.string,
};
