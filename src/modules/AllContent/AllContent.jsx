import React from 'react';
import {HomeHeading} from '../Home/HomeHeading.jsx';
import {StatusFilter} from '../Filters/StatusFilter.jsx';
import {DateRangeFilter} from '../Filters/DateFilter.jsx';
import {CPFilter} from '../Filters/CPFilter.jsx';

export const AllContent = () => {
    return (
        <div className="su-col-span-full xl:su-col-start-2 xl:su-col-span-10">
            <HomeHeading headingText={window?.data?.texts?.allcontent?.headingText} subHeadingText={window?.data?.texts?.newcontent?.subHeadingText} />
            <section>
                <div className="su-mb-20">
                    <div className="su-flex su-flex-col lg:su-flex-row su-gap-xs">
                        <CPFilter />
                        <StatusFilter />
                        <DateRangeFilter />
                    </div>
                    {/* <!-- No Selected Filters --> */}
                </div>
            </section>
        </div>
    );
};
