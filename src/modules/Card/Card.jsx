import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {CardButtons} from './CardButtons.jsx';

export const Card = ({title, listMetadata}) => {
    const reformatDate = (ts) => {
        // Validate date
        if (ts === undefined) {
            return '';
        }

        ts = parseInt(ts, 10);
        if (isNaN(ts) === true) {
            return '';
        }

        // Multiply date by 1000 to convert PHP vs JS date format (between seconds and miliseconds)
        ts = ts * 1000;

        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const tsDate = new Date(ts);
        // Format: "April 30, 2023"
        const month = monthNames[tsDate.getMonth()];
        const day = tsDate.getDate();
        const year = tsDate.getFullYear();

        // If provided year is not accurate :: means invalid date or no date was provided :: return placeholder
        if (year === 1970) {
            return 'N/A';
        }

        return `${month} ${day}, ${year}`;
    };

    return (
        listMetadata && (
            <li className="su-flex su-flex-col su-mb-0 md:su-flex-row su-rounded su-shadow-md su-bg-white su-border su-border-gray su-border-b-2 su-overflow-hidden su-min-h-[334px]">
                <a href={listMetadata.canonicalUrl} className="su-w-full md:su-min-w-[160px] md:su-max-w-[160px] lg:su-min-w-[375px] lg:su-max-w-[375px]">
                    <img
                        className="su-align-top su-w-full su-aspect-[3/2] md:su-aspect-[unset] md:su-h-full lg:su-aspect-[8/6] su-object-cover su-object-center"
                        src={listMetadata.relatedImageURL}
                        alt={title}
                    />
                </a>
                <div className="su-p-15 su-pb-20 sm:su-p-30 sm:su-pb-40 su-flex su-flex-col su-gap-[15px] sm:su-gap-[20px]">
                    <p className="su-text-16 su-mb-0 su-leading-none su-text-red-darker">{listMetadata.taxonomyContentPartnerText}</p>
                    <h3 className="su-mb-0 su-line-clamp-2 sm:su-line-clamp-2">
                        <a
                            href={listMetadata.canonicalUrl}
                            title={`View ${title}`}
                            className="su-block su-text-h4 su-leading-[34px] su-font-bold su-mb-0 su-line-clamp-2 sm:su-line-clamp-2 hover:su-underline"
                        >
                            {title}
                        </a>
                    </h3>

                    <p className="su-mb-0 su-line-clamp-5 sm:su-line-clamp-3 su-leading-[1.3em]">{listMetadata.descriptionPlain}</p>
                    <p className="su-text-16 su-text-gray-dark su-mb-0 su-leading-[1.45em] su-mt-auto">
                        Submitted on {reformatDate(listMetadata.mtxCreated)} | First published on {reformatDate(listMetadata.srcPublishedDate)}
                    </p>
                    <CardButtons />
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
    }),
};
