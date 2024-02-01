import React from 'react';
import * as DOMPurify from 'dompurify';
import PropTypes from 'prop-types';

export const PageHeading = ({headingText, subHeadingText, homeButton}) => {
    return (
        <section className="su-relative su-text-center su-mt-60 su-mb-50 su-pt-60 md:su-mt-45 md:su-pt-70 md:su-mb-62">
            {/* Back to home button */}
            {homeButton == true && (
                <div className="su-absolute su-top-0 su-left-0 lg:su-left-[-64px]">
                    <a href={window.globalData.pageHrefs.home} className="su-flex su-items-center su-text-[18px] hover:su-underline">
                        <svg className="su-mr-6" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M8.33333 15.8337L2.5 10.0003M2.5 10.0003L8.33334 4.16699M2.5 10.0003L17.5 10.0003"
                                stroke="#E50808"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                        Back to Home
                    </a>
                </div>
            )}

            <h1 className="su-font-serif su-mb-12">{DOMPurify.sanitize(headingText)}</h1>
            <p className="su-text-21 su-leading-display lg:su-px-[20%]">{DOMPurify.sanitize(subHeadingText)}</p>
        </section>
    );
};

PageHeading.propTypes = {
    headingText: PropTypes.string,
    subHeadingText: PropTypes.string,
};
