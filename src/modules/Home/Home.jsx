import React from 'react';
import {HomeHeading} from './HomeHeading.jsx';
import {HomeInsights} from './HomeInsights.jsx';

export const Home = () => {
    return (
        <div className="su-col-span-full xl:su-col-start-2 xl:su-col-span-10">
            <HomeHeading headingText={window?.data?.texts?.home?.headingText} subHeadingText={window?.data?.texts?.home?.subHeadingText} />
            <HomeInsights />
        </div>
    );
};
