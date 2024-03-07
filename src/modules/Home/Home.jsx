import React from 'react';
import {PageHeading} from './PageHeading.jsx';
import {HomeInsights} from './HomeInsights.jsx';
import {ContentRegion} from './ContentRegion.jsx';

export const Home = () => {
    return (
        <div className="su-col-span-full xl:su-col-start-2 xl:su-col-span-10">
            <PageHeading headingText={window?.data?.texts?.home?.headingText} subHeadingText={window?.data?.texts?.home?.subHeadingText} />
            <HomeInsights />
            <ContentRegion />
        </div>
    );
};
