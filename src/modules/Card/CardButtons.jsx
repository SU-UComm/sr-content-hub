import React, {useState} from 'react';

export const CardButtons = (props) => {
    const [isSendDialogOpen, setSendDialogOpen] = useState(false);
    const [isDeclineDialogOpen, setDeclineDialogOpen] = useState(false);

    const openSendDialog = () => {
        setSendDialogOpen(true);
        document.body.style.background = 'grey';
    };

    const closeSendDialog = () => setSendDialogOpen(false);
    const openDeclineDialog = () => setDeclineDialogOpen(true);
    const closeDeclineDialog = () => setDeclineDialogOpen(false);

    const handleSendTeaser = () => {
        // Handle sending teaser
        closeSendDialog();
    };

    const handleSendFullContent = () => {
        // Handle sending full content
        closeSendDialog();
    };

    const handleDecline = () => {
        // Handle sending decline info
        closeDeclineDialog();
    };

    return (
        <div className="su-flex su-flex-col sm:su-flex-row su-gap-[10px] su-h-[40px]">
            <button className="js-action--send-to-sr button-green c-button-send" onClick={openSendDialog}>
                Send to Stanford Report
            </button>
            <button className="js-action--decline c-button-decline" onClick={openDeclineDialog}>
                Decline
            </button>

            {isSendDialogOpen && (
                <>
                    <dialog
                        data-id={props.assetId}
                        role="dialog"
                        open="true"
                        className="c-dialog-send su-fixed su-p-0 su-rounded su-border-gray su-bg-white su-w-full su-max-w-[57.4rem]"
                        aria=""
                        aria-labelledby={`dialogTitle-${props.assetId}-approve`}
                        style={{position: 'absolute'}}
                    >
                        <button
                            onClick={closeSendDialog}
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
                                <button onClick={handleSendTeaser} aria-label="Send Teaser" className="button-green js-send-teaser">
                                    Send Teaser
                                </button>
                                <button onClick={handleSendFullContent} aria-label="Send Full Content" className="button-green js-send-content">
                                    Send Full Content
                                </button>
                                <button onClick={closeSendDialog} aria-label="Cancel" className="js-decline">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </dialog>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}

            {isDeclineDialogOpen && (
                <dialog
                    role="dialog"
                    open="true"
                    data-id={props.assetId}
                    className="c-dialog-decline su-fixed su-p-0 su-rounded su-border-gray su-bg-white su-w-full su-max-w-[57.4rem]"
                    style={{position: 'absolute'}}
                >
                    <button
                        onClick={closeDeclineDialog}
                        className="su-w-[23px] su-h-[23px] su-p-0 su-absolute su-right-15 su-top-15 su-border-none su-flex su-items-center su-justify-center hover:su-bg-transparent"
                        aria-label="close"
                    >
                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none">
                            <path d="M12.0554 1.9502L1.94434 11.0502" stroke="#E50808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M1.94434 1.9502L12.0554 11.0502" stroke="#E50808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                    <div className="c-dialog-body su-p-30 sm:su-p-60">
                        <h3 id={`dialogTitle-${props.assetId}-approve`} className="su-mb-10 su-font-serif su-leading-[125%] su-text-center">
                            You are declining this story
                        </h3>
                        <p id="dialogDescription-128070-decline" className="su-mb-10 su-leading-[125%] su-text-center">
                            Add optional note (viewable by content partner)
                        </p>
                        <label className="sr-only" htmlFor="message-textarea-128070-decline">
                            Optional note
                        </label>
                        <textarea
                            className="su-resize-none su-leading-display su-mx-2 su-p-16 su-text-16 su-bg-gray-bg su-rounded su-border-gray su-w-full su-max-w-[450px] su-max-h     -[100px]"
                            name="message-128070"
                            rows="5"
                            autoComplete="off"
                            aria-label="Optional note"
                            id="message-textarea-128070-decline"
                        ></textarea>
                        <div className="su-mt-40 su-flex su-flex-col sm:su-flex-row su-gap-[15px] su-justify-center">
                            <button onClick={handleDecline} aria-label="Decline" className="button-green js-decline-true">
                                Yes, Decline
                            </button>
                            <button onClick={closeDeclineDialog} aria-label="Cancel" className="js-decline-false">
                                Cancel
                            </button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};
