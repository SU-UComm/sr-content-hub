import React from 'react';

export const BackToPageButton = (props) => {
    let page = props.page;
    let title = page.charAt(0).toUpperCase() + page.slice(1);
    return (
        <div className="su-absolute su-top-0 su-left-0 lg:su-left-[-64px]">
            <a href={window.globalData.pageHrefs[page]} className="su-flex su-items-center su-text-[18px] hover:su-underline">
                <svg className="su-mr-6" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M8.33333 15.8337L2.5 10.0003M2.5 10.0003L8.33334 4.16699M2.5 10.0003L17.5 10.0003"
                        stroke="#E50808"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
                Back to {title}
            </a>
        </div>
    );
};
