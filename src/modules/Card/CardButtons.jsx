import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const mockData = {
    name: 'Mockup name',
    short_name: 'Mockup name',
    asset_id: 'inputQuery.id',
    id: 'inputQuery.id',
    type_code: 'folder',
    type: 'Folder',
    icon_path: 'https://mockup.url/__data/asset_types/folder/icon.png',
    web_path: 'https://mockup.url/mockup_name',
    urls: ['https://mockup.url/mockup_name'],
    status: 'Under Construction',
    statusId: '2',
    created: 1637857729,
    created_userid: '65',
    created_username: 'John Doe (Squiz)',
    updated: 1637857730,
    updated_userid: '65',
    updated_username: 'John Doe (Squiz)',
    published: 'Never Published',
    published_userid: 'Never Published',
    published_username: 'Never Published',
    status_changed: 1637857729,
    status_changed_userid: '65',
    status_changed_username: 'John Doe (Squiz)',
    maximum_perm_on_asset: 'Admin Access',
    can_live_edit: true,
    effective_write: true,
    attribute_contextualised: true,
    metadata_contextualised: true,
    contextualable_screens: {details: 'attribute', metadata: 'metadata'},
};

export const CardButtons = (props) => {
    const [isSendDialogOpen, setSendDialogOpen] = useState(false);
    const [isDeclineDialogOpen, setDeclineDialogOpen] = useState(false);
    const sendDialogRef = useRef(null);
    const declineDialogRef = useRef(null);
    const [beaconSent, setBeaconSent] = useState(false);

    let jsApi = window?.jsApi ? window.jsApi : mockData;

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (sendDialogRef.current && !sendDialogRef.current.contains(event.target)) {
    //             closeSendDialog(event.target.getAttribute('data-id'));
    //         }
    //         if (declineDialogRef.current && !declineDialogRef.current.contains(event.target)) {
    //             closeDeclineDialog(event.target.getAttribute('data-id'));
    //         }
    //     };

    //     document.addEventListener('click', handleClickOutside);

    //     return () => {
    //         document.removeEventListener('click', handleClickOutside);
    //     };
    // }, []);

    const openSendDialog = (id) => {
        setSendDialogOpen(true);
        const dialog = document.getElementById(id);
        dialog.showModal();
    };

    const closeSendDialog = (id) => {
        setSendDialogOpen(false);
        const dialog = document.getElementById(id);

        dialog.close();
    };

    const openDeclineDialog = (id) => {
        setDeclineDialogOpen(true);
        const dialog = document.getElementById(id);
        dialog.showModal();
    };
    const closeDeclineDialog = (id) => {
        setDeclineDialogOpen(false);
        const dialog = document.getElementById(id);

        dialog.close();
    };

    const handleSendTeaser = (id) => {
        // Handle sending teaser
        closeSendDialog(id);
    };

    // const start = (btnEl, pageType) => {
    //     // Get ID of the Asset
    //     const dialogEl = btnEl.closest('.c-dialog-send');
    //     const storyId = dialogEl.getAttribute('data-id') || '';
    //     if (storyId === '') {
    //         return false;
    //     }

    //     // Get current metadata of the asset first
    //     jsApi.getMetadata({
    //         asset_id: storyId,
    //         dataCallback: (resp) => {
    //             // As a callback :: Prepare an update for the asset
    //           prepareUpdate(btnEl, storyId, pageType, resp);
    //         },
    //     });
    // }

    const chCfg = {
        metaFields: {
            hubStatusDescription: 31823,
            hubStatus: 31822,
            hubVersionHistory: 31825,
            hubReviewMsg: 32284,
            pageType: 4857,
        },
        hubStatuses: {
            reviewed: 'reviewed',
            approved: 'sent-to-sr',
        },
        pageTypes: {
            story: 'story',
            teaser: 'teaser',
        },
        badges: {
            reviewed: `<p class="su-rounded su-text-red-dark su-bg-red-dark/10 su-text-16 su-mb-0 su-py-8 su-px-15">Reviewed</p>`,
            approved: `<p class="su-rounded su-text-orange su-bg-orange/10 su-text-16 su-mb-0 su-py-8 su-px-15">Publishing soon on Stanford Report</p>`,
        },
        endpoints: {
            beacon: 'https://sug-web.matrix.squiz.cloud/content/r/h/ch/beacon',
            loadNext: 'https://sug-web.matrix.squiz.cloud/content/r/h/ch/next',
        },
    };

    const prepareUpdate = (storyId, pageType, currentState) => {
        // Define Metadata Fields Actions Object
        const fieldsActions = {};

        // Action #1: Status Update:
        const statusField = chCfg.metaFields.hubStatus;
        const statusFieldValue = chCfg.hubStatuses.approved;

        fieldsActions[statusField] = statusFieldValue;

        // Action #2: Clear Decline message :: In case it was there before
        const msgField = chCfg.metaFields.hubReviewMsg;
        fieldsActions[msgField] = '';

        // Action #3: Update Version History
        // const currentHistory = getHistoryState(currentState);

        // Generate date and decline message
        // const thisDate = new Date().getTime();
        // const userEl = document.querySelector('#user-status');
        // const userDetails = userEl.getAttribute('data-fullname');
        // const historyMessage = `Sent to Stanford Report by ${userDetails}, Published as: ${pageType}`;
        // const newEntry = {date: thisDate, message: historyMessage};
        // currentHistory.unshift(newEntry);

        // const currentHistoryStr = JSON.stringify(currentHistory);
        // const historyField = chCfg.metaFields.hubVersionHistory;
        // fieldsActions[historyField] = currentHistoryStr;

        // Action #4: Clear Reviewed/Hub Description field
        const descField = chCfg.metaFields.hubStatusDescription;
        fieldsActions[descField] = '';

        // Action #5: Set page type
        const pageTypeField = chCfg.metaFields.pageType;
        const pageTypeValue = pageType;
        fieldsActions[pageTypeField] = pageTypeValue;

        // Get Published Date from Metadata :: Needed for publishing on SR
        const pubDate = currentState.publishedDate || '';

        // Create Asset Details to pass to callback
        const thisStory = {
            id: storyId,
            pageType: pageType,
            pubDate: props.listMetadata.publishedDate,
        };

        console.log('this story:', thisStory);

        // return approveStory.updateUi(btnEl, "");

        // All fields in place :: Update metadata
        // jsApi.setMetadataAllFields({
        //     asset_id: storyId,
        //     field_info: fieldsActions,
        //     dataCallback: (resp) => {
        //         updateUi(btnEl, thisStory, resp);
        //     },
        // });
        updateUi(thisStory, jsApi);
    };
    const updateUi = (storyObj, resp) => {
        // Finalize publishing process with additional functions :: Depending from the page type
        storyObj.pageType = storyObj.pageType || 'story';
        if (storyObj.pageType === 'teaser') {
            sendAsTeaser(storyObj);
        } else {
            sendAsStory(storyObj);
        }

        // We need to update the Button on the front-end :: and remove actions
        // const dialogEl = btnEl.closest('.c-dialog-send');
        // const buttonsCont = dialogEl.closest('.su-flex');
        // // Add Reviwed Badge to the list
        // buttonsCont.innerHTML = chCfg.badges.approved;

        // Check if this is Home Page and Latest News
        const latestNewsEl = document.querySelector('#latest-content');
        // IF it is then we need to trigger loading one additional result instead of current item
        // if (latestNewsEl !== null) {
        //     // const currentItem = buttonsCont.closest('li');
        //     loadNextStory.init(currentItem);
        // }
        clearReviewState();
    };
    const sendAsStory = (storyObj) => {
        console.log(`Published as story: ${JSON.stringify(storyObj)}`);
    };
    const sendAsTeaser = (storyObj) => {
        console.log(`Published as teaser: ${JSON.stringify(storyObj)}`);
    };

    const clearReviewState = () => {
        // logMsg("Clear Review State!");
        if (typeof navigator.sendBeacon !== 'function') {
            return false;
        }
        // Use Beacon API to send update :: on page unload
        setBeaconSent(false);

        window.addEventListener('unload', sendBeacon(), {capture: true});
        window.addEventListener('beforeunload', sendBeacon(), {capture: true});
        window.addEventListener('pagehide', sendBeacon(), {capture: true});
    };

    const handleSendFullContent = () => {
        // Handle sending full content

        // start(btn, 'story');
        // btn.setAttribute('disabled', 'true');

        // start(btn, 'teaser');

        // jsApi.getMetadata({
        //     asset_id: storyId,
        //     dataCallback: (resp) => {
        //         // As a callback :: Prepare an update for the asset
        //         prepareUpdate(btnEl, storyId, pageType, resp);
        //     },
        // });

        prepareUpdate('', props.listMetadata.assetId, 'story', jsApi);

        closeSendDialog(`dialogTitle-${props.listMetadata.assetId}-approve`);
    };

    const sendBeacon = () => {
        console.log('Send Beacon!');
        if (beaconSent !== false) {
            return;
        }
        const beaconUrl = chCfg.endpoints.beacon;

        // Build data for beacon
        const data = {id: props.listMetadata.assetId};

        // Send beacon to update the state
        navigator.sendBeacon(beaconUrl, JSON.stringify(data));

        // Add log msg to see if this was triggered
        // logMsg("Beacon triggered....");

        // Store beacon state
        setBeaconSent(true);
    };

    const handleDecline = (id) => {
        // Handle sending decline info
        closeDeclineDialog(id);
    };

    return (
        <div className="su-flex su-flex-col sm:su-flex-row su-gap-[10px] su-h-[40px]">
            {props.listMetadata.hubStatusDescription ? (
                <p className="su-rounded su-text-blue su-bg-blue/10 su-text-16 su-mb-0 su-py-9 su-px-15">{props.listMetadata.hubStatusDescription}</p>
            ) : props.listMetadata.hubStatus == 'reviewed' ? (
                <p className="su-rounded su-text-red-dark su-bg-red-dark/10 su-text-16 su-mb-0 su-py-9 su-px-15">Reviewed</p>
            ) : props.listMetadata.hubStatus == 'sent-to-sr' ? (
                <p className="su-rounded su-text-orange su-bg-orange/10 su-text-16 su-mb-0 su-py-9 su-px-15">Publishing soon on Stanford Report</p>
            ) : (
                <>
                    <button
                        data-id={`dialogTitle-${props.listMetadata.assetId}-approve`}
                        className="js-action--send-to-sr button-green c-button-send"
                        onClick={() => openSendDialog(`dialogTitle-${props.listMetadata.assetId}-approve`)}
                    >
                        Send to Stanford Report
                    </button>
                    <button
                        data-id={`dialogTitle-${props.listMetadata.assetId}-decline`}
                        className="js-action--decline c-button-decline"
                        onClick={() => openDeclineDialog(`dialogTitle-${props.listMetadata.assetId}-decline`)}
                    >
                        Decline
                    </button>

                    <dialog
                        ref={sendDialogRef}
                        data-id={props.listMetadata.assetId}
                        id={`dialogTitle-${props.listMetadata.assetId}-approve`}
                        role="dialog"
                        open={isSendDialogOpen}
                        className="c-dialog-send su-fixed su-p-0 su-rounded su-border-gray su-bg-white su-w-full su-max-w-[57.4rem]"
                        aria-labelledby={`dialogTitle-${props.listMetadata.assetId}-approve`}
                    >
                        <button
                            onClick={() => closeSendDialog(`dialogTitle-${props.listMetadata.assetId}-approve`)}
                            className="su-w-[23px] su-h-[23px] su-p-0 su-absolute su-right-15 su-top-15 su-border-none su-flex su-items-center su-justify-center hover:su-bg-transparent"
                            aria-label="close"
                        >
                            <svg className="" xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none">
                                <path d="M12.0554 1.9502L1.94434 11.0502" stroke="#E50808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M1.94434 1.9502L12.0554 11.0502" stroke="#E50808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                        <div className="c-dialog-body su-p-30 sm:su-p-60">
                            <h3 id={`dialogTitle-${props.listMetadata.assetId}-approve`} className="su-mb-0 su-font-serif su-text-center su-tracking-normal">
                                You are accepting this story for publication on Stanford Report
                            </h3>
                            <div className="su-mt-40 su-flex su-flex-col sm:su-flex-row su-gap-[15px] su-justify-center">
                                <button
                                    onClick={() => handleSendTeaser(`dialogTitle-${props.listMetadata.assetId}-approve`)}
                                    aria-label="Send Teaser"
                                    className="button-green js-send-teaser"
                                >
                                    Send Teaser
                                </button>
                                <button onClick={() => handleSendFullContent()} aria-label="Send Full Content" className="button-green js-send-content">
                                    Send Full Content
                                </button>
                                <button onClick={() => closeSendDialog(`dialogTitle-${props.listMetadata.assetId}-approve`)} aria-label="Cancel" className="js-decline">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </dialog>

                    <dialog
                        ref={declineDialogRef}
                        role="dialog"
                        open={isDeclineDialogOpen}
                        data-id={props.listMetadata.assetId}
                        className="c-dialog-decline su-fixed su-p-0 su-rounded su-border-gray su-bg-white su-w-full su-max-w-[57.4rem]"
                        aria-labelledby={`dialogTitle-${props.listMetadata.assetId}-decline`}
                        id={`dialogTitle-${props.listMetadata.assetId}-decline`}
                    >
                        <button
                            onClick={() => closeDeclineDialog(`dialogTitle-${props.listMetadata.assetId}-decline`)}
                            className="su-w-[23px] su-h-[23px] su-p-0 su-absolute su-right-15 su-top-15 su-border-none su-flex su-items-center su-justify-center hover:su-bg-transparent"
                            aria-label="close"
                        >
                            <svg className="" xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none">
                                <path d="M12.0554 1.9502L1.94434 11.0502" stroke="#E50808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M1.94434 1.9502L12.0554 11.0502" stroke="#E50808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                        <div className="c-dialog-body su-p-30 sm:su-p-60">
                            <h3 id={`dialogTitle-${props.listMetadata.assetId}-decline`} className="su-mb-10 su-font-serif su-leading-[125%] su-text-center">
                                You are declining this story
                            </h3>
                            <p id={`dialogDescription-${props.listMetadata.assetId}-decline`} className="su-mb-10 su-leading-[125%] su-text-center">
                                Add optional note (viewable by content partner)
                            </p>
                            <label className="sr-only" htmlFor={`message-textarea-${props.listMetadata.assetId}-decline`}>
                                Optional note
                            </label>
                            <textarea
                                className="su-resize-none su-leading-display su-mx-2 su-p-16 su-text-16 su-bg-gray-bg su-rounded su-border-gray su-w-full su-max-w-[450px] su-max-h     -[100px]"
                                name={`message-${props.listMetadata.assetId}`}
                                rows="5"
                                autoComplete="off"
                                aria-label="Optional note"
                                id={`message-textarea-${props.listMetadata.assetId}-decline`}
                            ></textarea>
                            <div className="su-mt-40 su-flex su-flex-col sm:su-flex-row su-gap-[15px] su-justify-center">
                                <button
                                    onClick={() => handleDecline(`dialogTitle-${props.listMetadata.assetId}-decline`)}
                                    aria-label="Decline"
                                    className="button-green js-decline-true"
                                >
                                    Yes, Decline
                                </button>
                                <button onClick={() => closeDeclineDialog(`dialogTitle-${props.listMetadata.assetId}-decline`)} aria-label="Cancel" className="js-decline-false">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </dialog>
                </>
            )}
        </div>
    );
};

CardButtons.propTypes = {
    listMetadata: PropTypes.shape({
        hubStatusDescription: PropTypes.array,
        hubStatus: PropTypes.array,
        assetId: PropTypes.array,
    }),
};
