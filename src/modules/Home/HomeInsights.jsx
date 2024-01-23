import React from 'react';
import {Link} from 'react-router-dom';
import {InsightsCard} from './InsightsCard.jsx';

export const HomeInsights = () => {
    const insightsData = [
        {title: 'Insights placeholder', value: '4,635', percentage: '80%', isPositive: true},
        {title: 'Insights placeholder', value: '3.05', percentage: '80%', isPositive: true},
        {title: 'Insights placeholder', value: '949', percentage: '9%', isPositive: false},
    ];

    return (
        <section className="su-mb-90">
            <div className="su-flex su-flex-col md:su-flex-row su-justify-between md:su-items-center su-mb-20 su-gap-xs">
                <h2 className="su-text-h4 md:su-text-h3 su-font-serif su-mb-0">Insights</h2>
                <div>
                    <Link to="insights" className="su-flex su-items-center su-text-[18px] hover:su-underline">
                        View all Insights
                        <img className="su-inline su-ml-6" alt="" src={require('images/arrow-right.svg')} />
                    </Link>
                </div>
            </div>

            <div className="su-grid su-grid-cols-1 lg:su-grid-cols-3 su-gap-xs">
                {insightsData.map((insight, index) => (
                    <InsightsCard key={index} {...insight} />
                ))}
            </div>
        </section>
    );
};
