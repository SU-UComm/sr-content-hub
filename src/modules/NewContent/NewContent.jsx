import React from 'react';
import {PageHeading} from '../Home/Heading.jsx';
import {CPFilter} from '../Filters/CPFilter.jsx';

export const NewContent = () => {
    return (
        <div className="su-col-span-full xl:su-col-start-2 xl:su-col-span-10">
            <PageHeading headingText={window?.data?.texts?.newcontent?.headingText} subHeadingText={window?.data?.texts?.newcontent?.subHeadingText} />
            <section>
                <div className="su-mb-20">
                    {/* CP Filter */}
                    <label htmlFor="cp-filter" className="su-block su-text-18 su-font-bold su-leading-[2] su-mb-10">
                        Content partners
                    </label>

                    <div className="su-w-full md:su-w-1/2">
                        <CPFilter />
                    </div>
                </div>
            </section>
        </div>
    );
};
