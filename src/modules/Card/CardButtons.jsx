import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {releaseAsStory, releaseAsTeaser} from '../Helpers/srStoryHelpers';
import {contentHubAPI} from '../Helpers/requests';
import {Oval} from 'react-loader-spinner';

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
        beacon: `${window.globalData.urls.contentHub}/r/h/ch/beacon`,
        loadNext: `${window.globalData.urls.contentHub}/r/h/ch/next`,
    },
};

export const CardButtons = (props) => {
    const [isSendDialogOpen, setSendDialogOpen] = useState(false);
    const [isDeclineDialogOpen, setDeclineDialogOpen] = useState(false);
    const sendDialogRef = useRef(null);
    const declineDialogRef = useRef(null);
    const [beaconSent, setBeaconSent] = useState(false);
    const [textArea, setTextAreaValue] = useState('');
    const [userMatch, setUserMatch] = useState(false);
    const [hubStatus, setHubStatus] = useState('');
    const [fixedHubStatus, setFixedHubStatus] = useState(null);
    const [hubStatusDesc, setHubStatusDesc] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Loader flag
    let jsApi = window.jsApi ?? {};

    // Update status when hubStatus change
    useEffect(() => {
        let userDetails = window?.data?.user.firstName + ' ' + window.data + window?.data?.user.lastName;
        const userEl = document.querySelector('#user-status');
        let pageUserDetails = userEl.getAttribute('data-fullname');
        if (userDetails === pageUserDetails) {
            setUserMatch(true);
        }
        !fixedHubStatus && setHubStatus(props.hubStatus); // don't update when there is a temp status
        setHubStatusDesc(props.hubStatusDesc);
    }, [hubStatus]);

    // Set temp status when action "Send to Stanford Report" action is fired
    // This will get updated by real status on page refresh
    useEffect(() => {
        setHubStatus(fixedHubStatus);
    }, [fixedHubStatus]);

    const onTextAreaValueChange = (val) => {
        setTextAreaValue(val);
    };

    /**
     * @function isJson
     * @description - Function that checks if a given string is JSON
     *
     * @param {String} str - string object to check
     */
    const isJson = (str) => {
        // Check if we need to parse it
        if (typeof str === 'object') {
            return str;
        }

        // Check if obj is json and return object if succesful
        try {
            var data = JSON.parse(str);
        } catch (e) {
            return false;
        }

        return data;
    };

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

    const handleSendFullContent = () => {
        setIsLoading(true);
        jsApi.getMetadata({
            asset_id: props.assetId,
            dataCallback: (resp) => {
                // As a callback :: Prepare an update for the asset
                prepareApproveUpdate(props.assetId, 'Story', resp);
            },
        });

        releaseAsStory.init(props.assetId, contentHubAPI);

        closeSendDialog(`dialogTitle-${props.assetId}-approve`);
    };

    const handleSendTeaser = () => {
        setIsLoading(true);
        jsApi.getMetadata({
            asset_id: props.assetId,
            dataCallback: (resp) => {
                // As a callback :: Prepare an update for the asset
                prepareApproveUpdate(props.assetId, 'Teaser', resp);
            },
        });

        releaseAsTeaser.init(props.assetId, contentHubAPI);

        closeSendDialog(`dialogTitle-${props.assetId}-approve`);
    };

    const handleDecline = (id) => {
        setIsLoading(true);
        // Handle sending decline info
        jsApi.getMetadata({
            asset_id: props.assetId,
            dataCallback: (resp) => {
                // As a callback :: Prepare an update for the asset
                prepareDeclineUpdate(props.assetId, resp);
            },
        });

        closeDeclineDialog(id);
    };

    // Helper Function to get state
    const getHistoryState = (currentState) => {
        // Get current history state
        let currentHistory = [];

        // Check if current state is JSON
        currentState = isJson(currentState);
        if (currentState !== false) {
            // If it is: Get current version history
            const currentVersionMeta = isJson(currentState['hubVersionHistory']);
            if (currentVersionMeta !== false) {
                currentHistory = currentVersionMeta;
            }
        }
        return currentHistory;
    };

    /**
     * @function prepareDeclineUpdate
     * @description - Prepares all information required to submit 'Declined' status for story/teaser to Matrix
     * JS API used here is Matrix's JS API. On local dev environment, there is a mock file that handles this.
     *
     * @param {Number} id - story or teaser ID
     * @param {Object} currentState - current state object
     */
    const prepareDeclineUpdate = (id, currentState) => {
        // Define Metadata Fields Actions Object
        const fieldsActions = {};

        // Action #1: Status Update:
        const statusField = chCfg.metaFields.hubStatus;
        const statusFieldValue = chCfg.hubStatuses.reviewed;
        fieldsActions[statusField] = statusFieldValue;

        // Action #2: Decline Message Update
        let msgTxt = textArea;
        const msgField = chCfg.metaFields.hubReviewMsg;

        fieldsActions[msgField] = msgTxt;

        // Action #3: Update Version History
        const currentHistory = getHistoryState(currentState);

        // Generate date and decline message
        const thisDate = new Date().getTime();
        const userEl = document.querySelector('#user-status');
        const userDetails = userEl.getAttribute('data-fullname');

        if (msgTxt.length === 0) {
            msgTxt = 'No message';
        }

        const historyMessage = `Reviewed by ${userDetails}, Message: ${msgTxt}`;
        // Update status on front end
        setHubStatusDesc(historyMessage);
        setHubStatus('reviewed');
        setFixedHubStatus('reviewed');
        setIsLoading(false);

        const newEntry = {date: thisDate, message: historyMessage};
        currentHistory.unshift(newEntry);

        const currentHistoryStr = JSON.stringify(currentHistory);
        const historyField = chCfg.metaFields.hubVersionHistory;
        fieldsActions[historyField] = currentHistoryStr;

        // Action #4: Clear Reviewed/Hub Description field
        const descField = chCfg.metaFields.hubStatusDescription;
        fieldsActions[descField] = '';

        // All fields in place :: Update metadata
        jsApi.setMetadataAllFields({
            asset_id: id,
            field_info: fieldsActions,
            dataCallback: (resp) => {
                // console.log('Decline resp: ', resp);
            },
        });

        if (props.page == 'home') {
            props.fetchData(window?.data?.contentHubAPI?.search.newContent);
        }
    };

    /**
     * @function prepareApproveUpdate
     * @description - Prepares all information required to submit 'Declined' status for story/teaser to Matrix
     * JS API used here is Matrix's JS API. On local dev environment, there is a mock file that handles this.
     *
     * @param {Number} storyId - story or teaser ID
     * @param {String} pageType - story or teaser ID
     * @param {Object} currentState - current state object
     */
    const prepareApproveUpdate = (storyId, pageType, currentState) => {
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
        const currentHistory = getHistoryState(currentState);

        // Generate date and accept message
        const thisDate = new Date().getTime();
        const userEl = document.querySelector('#user-status');
        const userDetails = userEl.getAttribute('data-fullname');
        const historyMessage = `Sent to Stanford Report by ${userDetails}, Published as: ${pageType}`;
        const newEntry = {date: thisDate, message: historyMessage};
        currentHistory.unshift(newEntry);

        const currentHistoryStr = JSON.stringify(currentHistory);
        const historyField = chCfg.metaFields.hubVersionHistory;
        fieldsActions[historyField] = currentHistoryStr;

        props.listMetadata.hubStatusDescription = historyMessage;

        // Action #4: Clear Reviewed/Hub Description field
        const descField = chCfg.metaFields.hubStatusDescription;
        fieldsActions[descField] = '';

        // Action #5: Set page type
        const pageTypeField = chCfg.metaFields.pageType;
        const pageTypeValue = pageType.toLowerCase();
        fieldsActions[pageTypeField] = pageTypeValue;

        // All fields in place :: Update metadata
        jsApi.setMetadataAllFields({
            asset_id: storyId,
            field_info: fieldsActions,
            dataCallback: () => {
                updateUi(historyMessage);
            },
        });
    };

    // Update front end with correct status
    const updateUi = (historyMsg) => {
        setHubStatusDesc(historyMsg);
        setHubStatus('sent-to-sr');
        setFixedHubStatus('sent-to-sr');
        setIsLoading(false);
        clearReviewState();

        if (props.page == 'home') {
            props.fetchData(window?.data?.contentHubAPI?.search.newContent);
        }
    };

    const clearReviewState = () => {
        if (typeof navigator.sendBeacon !== 'function') {
            return false;
        }
        // Use Beacon API to send update :: on page unload
        setBeaconSent(false);

        window.addEventListener(
            'unload',
            function () {
                sendBeacon();
            },
            {capture: true},
        );

        window.addEventListener(
            'beforeunload',
            function () {
                sendBeacon();
            },
            {capture: true},
        );

        window.addEventListener(
            'pagehide',
            function () {
                sendBeacon();
            },
            {capture: true},
        );
    };

    const sendBeacon = () => {
        if (beaconSent !== false) {
            return;
        }
        const beaconUrl = contentHubAPI?.modules?.beaconEndpoint ? contentHubAPI?.modules.beaconEndpoint : chCfg.endpoints.beacon;

        // Build data for beacon
        const data = {id: props.assetId};

        // Send beacon to update the state
        navigator.sendBeacon(beaconUrl, JSON.stringify(data));

        // Store beacon state
        setBeaconSent(true);
    };

    return isLoading ? (
        <Oval visible={true} height="50" width="50" color="#B1040E" secondaryColor="gray" ariaLabel="oval-loading" />
    ) : (
        <div className="su-flex su-flex-col sm:su-flex-row su-gap-[10px]">
            {hubStatus == 'reviewed' ? (
                <>
                    <p className="su-rounded su-text-red-dark su-bg-red-dark/10 su-text-16 su-mb-0 su-py-9 su-px-15">Reviewed</p>
                    {window?.data?.user?.userType === 'UCOMM' && props.type == 'story' ? (
                        <button
                            data-id={`dialogTitle-${props.assetId}-approve`}
                            className="js-action--send-to-sr button-green c-button-send"
                            onClick={() => openSendDialog(`dialogTitle-${props.assetId}-approve`)}
                        >
                            Send to Stanford Report
                        </button>
                    ) : null}
                </>
            ) : hubStatus == 'sent-to-sr' ? (
                <p className="su-rounded su-text-orange su-bg-orange/10 su-text-16 su-mb-0 su-py-9 su-px-15">Publishing soon on Stanford Report</p>
            ) : hubStatus == 'published' ? (
                <p className="su-rounded su-text-green su-bg-green/10 su-text-16 su-mb-0 su-py-9 su-px-15">Published on Stanford Report</p>
            ) : hubStatusDesc && hubStatusDesc.length > 0 && !userMatch && props.type !== 'story' && window?.data?.user?.userType === 'UCOMM' ? (
                <p className="su-rounded su-text-blue su-bg-blue/10 su-text-16 su-mb-0 su-py-9 su-px-15">
                    {props.hubStatusDesc ? props.hubStatusDesc : props.listMetadata.hubStatusDescription}
                </p>
            ) : window?.data?.user?.userType === 'UCOMM' ? (
                <>
                    <button
                        data-id={`dialogTitle-${props.assetId}-approve`}
                        className="js-action--send-to-sr button-green c-button-send"
                        onClick={() => openSendDialog(`dialogTitle-${props.assetId}-approve`)}
                    >
                        Send to Stanford Report
                    </button>
                    <button
                        data-id={`dialogTitle-${props.assetId}-decline`}
                        className="js-action--decline c-button-decline"
                        onClick={() => openDeclineDialog(`dialogTitle-${props.assetId}-decline`)}
                    >
                        Decline
                    </button>
                </>
            ) : null}
            <dialog
                ref={sendDialogRef}
                data-id={props.assetId}
                id={`dialogTitle-${props.assetId}-approve`}
                role="dialog"
                open={isSendDialogOpen}
                className="c-dialog-send su-fixed su-p-0 su-rounded su-border-gray su-bg-white su-w-full su-max-w-[57.4rem]"
                aria-labelledby={`dialogTitle-${props.assetId}-approve`}
            >
                <button
                    onClick={() => closeSendDialog(`dialogTitle-${props.assetId}-approve`)}
                    className="su-w-[23px] su-h-[23px] su-p-0 su-absolute su-right-15 su-top-15 su-border-none su-flex su-items-center su-justify-center hover:su-bg-transparent"
                    aria-label="close"
                >
                    <svg className="" xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none">
                        <path d="M12.0554 1.9502L1.94434 11.0502" stroke="#E50808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M1.94434 1.9502L12.0554 11.0502" stroke="#E50808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
                <div className="c-dialog-body su-p-30 sm:su-p-60">
                    <h3 id={`dialogTitle-${props.assetId}-approve`} className="su-mb-0 su-font-serif su-text-center su-tracking-normal">
                        You are accepting this story for publication on Stanford Report
                    </h3>
                    <div className="su-mt-40 su-flex su-flex-col sm:su-flex-row su-gap-[15px] su-justify-center">
                        <button onClick={() => handleSendTeaser()} aria-label="Send Teaser" className="button-green js-send-teaser">
                            Send Teaser
                        </button>
                        <button onClick={() => handleSendFullContent()} aria-label="Send Full Content" className="button-green js-send-content">
                            Send Full Content
                        </button>
                        <button onClick={() => closeSendDialog(`dialogTitle-${props.assetId}-approve`)} aria-label="Cancel" className="js-decline">
                            Cancel
                        </button>
                    </div>
                </div>
            </dialog>

            <dialog
                ref={declineDialogRef}
                role="dialog"
                open={isDeclineDialogOpen}
                data-id={props.assetId}
                className="c-dialog-decline su-fixed su-p-0 su-rounded su-border-gray su-bg-white su-w-full su-max-w-[57.4rem]"
                aria-labelledby={`dialogTitle-${props.assetId}-decline`}
                id={`dialogTitle-${props.assetId}-decline`}
            >
                <button
                    onClick={() => closeDeclineDialog(`dialogTitle-${props.assetId}-decline`)}
                    className="su-w-[23px] su-h-[23px] su-p-0 su-absolute su-right-15 su-top-15 su-border-none su-flex su-items-center su-justify-center hover:su-bg-transparent"
                    aria-label="close"
                >
                    <svg className="" xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none">
                        <path d="M12.0554 1.9502L1.94434 11.0502" stroke="#E50808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M1.94434 1.9502L12.0554 11.0502" stroke="#E50808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
                <div className="c-dialog-body su-p-30 sm:su-p-60">
                    <h3 id={`dialogTitle-${props.assetId}-decline`} className="su-mb-10 su-font-serif su-leading-[125%] su-text-center">
                        You are declining this story
                    </h3>
                    <p id={`dialogDescription-${props.assetId}-decline`} className="su-mb-10 su-leading-[125%] su-text-center">
                        Add optional note (viewable by content partner)
                    </p>
                    <label className="sr-only" htmlFor={`message-textarea-${props.assetId}-decline`}>
                        Optional note
                    </label>
                    <textarea
                        className="su-resize-none su-leading-display su-mx-2 su-p-16 su-text-16 su-bg-gray-bg su-rounded su-border-gray su-w-full su-max-w-[450px] su-max-h     -[100px]"
                        name={`message-${props.assetId}`}
                        rows="5"
                        autoComplete="off"
                        aria-label="Optional note"
                        value={textArea}
                        id={`message-textarea-${props.assetId}-decline`}
                        onChange={(e) => onTextAreaValueChange(e.target.value)}
                    ></textarea>
                    <div className="su-mt-40 su-flex su-flex-col sm:su-flex-row su-gap-[15px] su-justify-center">
                        <button onClick={() => handleDecline(`dialogTitle-${props.assetId}-decline`)} aria-label="Decline" className="button-green js-decline-true">
                            Yes, Decline
                        </button>
                        <button onClick={() => closeDeclineDialog(`dialogTitle-${props.assetId}-decline`)} aria-label="Cancel" className="js-decline-false">
                            Cancel
                        </button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

CardButtons.propTypes = {
    listMetadata: PropTypes.shape({
        hubStatusDescription: PropTypes.array,
        hubStatus: PropTypes.array,
        assetId: PropTypes.array,
        publishedDate: PropTypes.array,
        hubReviewMsg: PropTypes.array,
    }),
    assetId: PropTypes.string,
    type: PropTypes.string,
    page: PropTypes.string,
    hubStatusDesc: PropTypes.string,
    hubStatus: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    fetchData: PropTypes.func,
};
