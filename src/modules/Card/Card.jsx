import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {CardButtons} from './CardButtons.jsx';
import {reformatDate} from '../Helpers/dateHelpers.js';
import * as DOMPurify from 'dompurify';
import {Link, useNavigate} from 'react-router-dom';
import {decodeHTML} from '../Helpers/helperFunctions.js';

export const Card = (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Loader flag
    let url = 'https://sug-web.matrix.squiz.cloud/content/story-view-react?storyId=';
    let desc = props.data.listMetadata?.descriptionPlain?.[0] || '';
    desc = decodeHTML(desc);

    // const routeChange = () => {
    //     let path;
    //     if (contentHubAPI) {
    //         path = url + props.data.listMetadata.assetId;
    //     } else {
    //         path = `/story.html?storyId=${props.data.listMetadata.assetId}`;
    //     }
    //     window.location.href = path;
    // };

    // useEffect(() => {
    //     if (props) {
    //         setData(props.listMetadata);
    //         setIsLoading(false);
    //         console.log(props);
    //     } else {
    //         setIsLoading(true);
    //     }
    // }, [props]);
    return (
        // !isLoading && href={url + listMetadata.assetId} || href={window.globalData.pageHrefs.story}
        props.data.listMetadata && (
            <li
                className="su-flex su-flex-col su-mb-0 md:su-flex-row su-rounded su-shadow-md su-bg-white su-border su-border-gray su-border-b-2 su-overflow-hidden su-min-h-[334px]"
                data-id={props.data.listMetadata.assetId}
            >
                <a href={url + props.data.listMetadata.assetId} className="su-w-full md:su-min-w-[160px] md:su-max-w-[160px] lg:su-min-w-[375px] lg:su-max-w-[375px]">
                    <img
                        className="su-align-top su-w-full su-aspect-[3/2] md:su-aspect-[unset] md:su-h-full lg:su-aspect-[8/6] su-object-cover su-object-center"
                        src={
                            props.data.listMetadata.relatedImageURL
                                ? props.data.listMetadata.relatedImageURL
                                : 'https://sug-web.matrix.squiz.cloud/_media/content-hub-images/placeholder-images/fallback-image.png'
                        }
                        alt={props.data.title + ' image'}
                    />
                </a>
                <div className="su-p-15 su-pb-20 sm:su-p-30 sm:su-pb-40 su-flex su-flex-col su-gap-[15px] sm:su-gap-[20px]">
                    <p className="su-text-16 su-mb-0 su-leading-none su-text-red-darker">{props.data.listMetadata.taxonomyContentPartnerText}</p>
                    <h3 className="su-mb-0 su-line-clamp-2 sm:su-line-clamp-2">
                        <a
                            href={url + props.data.listMetadata.assetId}
                            title={`View ${props.data.title}`}
                            className="su-block su-text-h4 su-leading-[34px] su-font-bold su-mb-0 su-line-clamp-2 sm:su-line-clamp-2 hover:su-underline"
                        >
                            {props.data.title}
                        </a>
                    </h3>

                    <p className="su-mb-0 su-line-clamp-5 sm:su-line-clamp-3 su-leading-[1.3em]">{desc}</p>
                    <p className="su-text-16 su-text-gray-dark su-mb-0 su-leading-[1.45em] su-mt-auto">
                        Submitted on {reformatDate(props.data.listMetadata.mtxCreated)} | First published on {reformatDate(props.data.listMetadata.srcPublishedDate)}
                    </p>
                    {window?.data?.user?.userType === 'UCOMM' ? (
                        <CardButtons listMetadata={props.data.listMetadata} assetId={props.data.listMetadata.assetId[0]} page="card" />
                    ) : null}
                </div>
            </li>
            // </Link>
        )
    );
};

Card.propTypes = {
    data: PropTypes.shape({
        imageUrl: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        date: PropTypes.number,
        listMetadata: PropTypes.shape({
            canonicalUrl: PropTypes.array,
            relatedImageURL: PropTypes.array,
            srcFeaturedImageUrl: PropTypes.string,
            taxonomyContentPartnerText: PropTypes.array,
            descriptionPlain: PropTypes.array,
            mtxCreated: PropTypes.array,
            srcPublishedDate: PropTypes.array,
            assetId: PropTypes.array,
        }),
    }),
};
