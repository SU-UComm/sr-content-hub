import React from 'react';
import {PageHeading} from '../Home/Heading.jsx';
import {StatusFilter} from '../Filters/StatusFilter.jsx';
import {DateRangeFilter} from '../Filters/DateFilter.jsx';
import {CPFilter} from '../Filters/CPFilter.jsx';

export const AllContent = () => {
    return (
        <div className="su-col-span-full xl:su-col-start-2 xl:su-col-span-10">
            <PageHeading headingText={window?.data?.texts?.allcontent?.headingText} subHeadingText={window?.data?.texts?.newcontent?.subHeadingText} />
            <section>
                <div className="su-mb-20">
                    <div className="su-flex su-flex-col lg:su-flex-row su-gap-xs">
                        {/* CP Filter */}
                        <div className="su-flex-[calc(100%/3)_1_1]">
                            <label htmlFor="cp-filter" className="su-block su-text-18 su-font-bold su-leading-[2] su-mb-10">
                                Content partners
                            </label>

                            <div className="undefined">
                                <CPFilter />
                            </div>
                        </div>

                        <StatusFilter />
                        <DateRangeFilter />
                    </div>
                    {/* <!-- No Selected Filters --> */}
                </div>
            </section>
        </div>
    );
};
