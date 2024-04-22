import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {CardButtons} from './CardButtons.jsx';
import {reformatDate} from '../Helpers/dateHelpers.js';
import {decodeHTML} from '../Helpers/helperFunctions.js';

export const Card = (props) => {
    const [hubStatus, setHubStatus] = useState(props.data.listMetadata.hubStatus);
    const [hubStatusDesc, setHubStatusDesc] = useState('');
    const [hubReviewMsg, setHubReviewMsg] = useState('');

    let url = `${window.globalData.urls.contentHub}/story-view-react?storyId=`;
    let desc = props.data.listMetadata?.descriptionPlain?.[0] || '';
    desc = decodeHTML(desc);

    useEffect(() => {
        if (props.statuses) {
            for (let item of props.statuses) {
                if (item.id == props.data.listMetadata.assetId) {
                    //console.log('HERE', item.hubStatus, item.hubStatusDesc, item.hubReviewMsg);
                    setHubStatus(item.hubStatus);
                    setHubStatusDesc(item.hubStatusDesc);
                    setHubReviewMsg(item.hubReviewMsg);
                    return;
                }
            }
        }
    }, [props.statuses]);

    return (
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
                    {props.page === 'allContent' && window?.data?.user.userType === 'CP' ? null : (
                        <CardButtons
                            listMetadata={props.data.listMetadata}
                            assetId={props.data.listMetadata.assetId[0]}
                            type="card"
                            hubStatus={hubStatus}
                            hubStatusDesc={hubStatusDesc}
                            fetchData={props.fetchData}
                            page={props.page}
                        />
                    )}
                    {(window?.data?.user.userType == 'CP' && props.page == 'myContent' && props.data.listMetadata.taxonomyContentPartnerId == window?.data?.user.contentPartner) ||
                    window?.data?.user.userType == 'UCOMM' ? (
                        hubStatus === 'reviewed' && hubReviewMsg !== '' && hubReviewMsg.length > 0 ? (
                            <p className="su-rounded su-text-gray-dark su-text-16 su-mb-0">
                                <b>Review Note:</b> {hubReviewMsg.length > 70 ? `${hubReviewMsg.substring(0, 70)}...` : hubReviewMsg}
                            </p>
                        ) : null
                    ) : null}
                </div>
            </li>
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
            hubStatusDescription: PropTypes.array,
            hubStatus: PropTypes.array,
            taxonomyContentPartnerId: PropTypes.array,
        }),
    }),
    page: PropTypes.string,
    statuses: PropTypes.array,
    fetchData: PropTypes.func,
};
