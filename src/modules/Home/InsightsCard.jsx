import React from 'react';
import {PropTypes} from 'prop-types';

export const InsightsCard = ({title, value, percentage, isPositive}) => {
    const colorClass = isPositive ? 'su-text-green' : 'su-text-red-dark';
    const arrowImage = isPositive ? 'chevron-up.svg' : 'chevron-down.svg';

    return (
        <div className="su-rounded su-border su-border-gray su-bg-white su-shadow-sm su-p-30 su-pb-40 lg:su-max-h-[182px]">
            <div className="su-flex su-items-center su-justify-between su-mb-30">
                <p className="su-text-16 su-mb-0">{title}</p>
                <div
                    className={`${colorClass} su-text-14 su-font-semibold ${
                        isPositive ? 'su-bg-green/10' : 'su-bg-red-dark/10'
                    } su-flex su-items-center su-px-10 su-py-8 su-rounded`}
                >
                    <img className="su-inline su-mt-1 su-mr-5" src={require(`images/${arrowImage}`)} alt="" />
                    <span>{percentage}</span>
                </div>
            </div>
            <p className="su-text-m5 su-leading-[0.7] su-mb-0 su-font-bold">{value}</p>
        </div>
    );
};

InsightsCard.propTypes = {
    title: PropTypes.array,
    value: PropTypes.array,
    percentage: PropTypes.string,
    isPositive: PropTypes.array,
};
