import React from 'react';
import {HomeInsights} from '../Home/HomeInsights.jsx';
import {PageHeading} from '../Home/PageHeading.jsx';

export const Insights = () => {
    return (
        <div className="su-col-span-full xl:su-col-start-2 xl:su-col-span-10">
            <PageHeading headingText={window?.data?.texts?.insights?.headingText} subHeadingText={window?.data?.texts?.insights?.subHeadingText} homeButton={true} />

            <section className="su-relative su-text-center su-mt-60 su-mb-50 su-pt-60 md:su-mt-45 md:su-pt-70 md:su-mb-100">
                <HomeInsights />
                <HomeInsights />
                <HomeInsights />
            </section>
        </div>
    );
};
