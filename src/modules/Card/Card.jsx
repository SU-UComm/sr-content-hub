import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {CardButtons} from './CardButtons.jsx';
import {reformatDate} from '../Helpers/dateHelpers.js';

export const Card = ({title, listMetadata}) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Loader flag
    let url = 'https://sug-web.matrix.squiz.cloud/content/story?id=';
    let desc = listMetadata?.descriptionPlain?.[0] || '';
    desc = desc.trim();

    // useEffect(() => {
    //     if (listMetadata) {
    //         setData(listMetadata);
    //         setIsLoading(false);
    //         console.log(listMetadata);
    //     } else {
    //         setIsLoading(true);
    //     }
    // }, [listMetadata]);
    return (
        // !isLoading &&
        listMetadata && (
            <li
                className="su-flex su-flex-col su-mb-0 md:su-flex-row su-rounded su-shadow-md su-bg-white su-border su-border-gray su-border-b-2 su-overflow-hidden su-min-h-[334px]"
                data-id={listMetadata.assetId}
            >
                <a href={url + listMetadata.assetId} className="su-w-full md:su-min-w-[160px] md:su-max-w-[160px] lg:su-min-w-[375px] lg:su-max-w-[375px]">
                    <img
                        className="su-align-top su-w-full su-aspect-[3/2] md:su-aspect-[unset] md:su-h-full lg:su-aspect-[8/6] su-object-cover su-object-center"
                        src={listMetadata.relatedImageURL}
                        alt={title + ' image'}
                    />
                </a>
                <div className="su-p-15 su-pb-20 sm:su-p-30 sm:su-pb-40 su-flex su-flex-col su-gap-[15px] sm:su-gap-[20px]">
                    <p className="su-text-16 su-mb-0 su-leading-none su-text-red-darker">{listMetadata.taxonomyContentPartnerText}</p>
                    <h3 className="su-mb-0 su-line-clamp-2 sm:su-line-clamp-2">
                        <a
                            href={url + listMetadata.assetId}
                            title={`View ${title}`}
                            className="su-block su-text-h4 su-leading-[34px] su-font-bold su-mb-0 su-line-clamp-2 sm:su-line-clamp-2 hover:su-underline"
                        >
                            {title}
                        </a>
                    </h3>

                    <p className="su-mb-0 su-line-clamp-5 sm:su-line-clamp-3 su-leading-[1.3em]">{desc}</p>
                    <p className="su-text-16 su-text-gray-dark su-mb-0 su-leading-[1.45em] su-mt-auto">
                        Submitted on {reformatDate(listMetadata.mtxCreated)} | First published on {reformatDate(listMetadata.srcPublishedDate)}
                    </p>
                    {window?.data?.user?.userType === 'UCOMM' ? <CardButtons listMetadata={listMetadata} /> : null}
                </div>
            </li>
        )
    );
};

Card.propTypes = {
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
};
