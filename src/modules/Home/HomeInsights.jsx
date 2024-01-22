import React from 'react';
import {Link} from 'react-router-dom';

export const HomeInsights = () => {
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
                <div className="su-rounded su-border su-border-gray su-bg-white su-shadow-sm su-p-30 su-pb-40 lg:su-max-h-[182px]">
                    <div className="su-flex su-items-center su-justify-between su-mb-30">
                        <p className="su-text-16 su-mb-0">Insights placeholder</p>
                        <div className="su-text-green su-text-14 su-font-semibold su-bg-green/10 su-flex su-items-center su-px-10 su-py-8 su-rounded">
                            <img className="su-inline su-mt-1 su-mr-5" src={require('images/chevron-up.svg')} alt="" />
                            <span>80%</span>
                        </div>
                    </div>
                    <p className="su-text-m5 su-leading-[0.7] su-mb-0 su-font-bold">4,635</p>
                </div>

                <div className="su-rounded su-border su-border-gray su-bg-white su-shadow-sm su-p-30 su-pb-40 lg:su-max-h-[182px]">
                    <div className="su-flex su-items-center su-justify-between su-mb-30">
                        <p className="su-text-16 su-mb-0">Insights placeholder</p>
                        <div className="su-text-green su-text-14 su-font-semibold su-bg-green/10 su-flex su-items-center su-px-10 su-py-8 su-rounded">
                            <img className="su-inline su-mt-1 su-mr-5" src={require('images/chevron-up.svg')} alt="" />
                            <span>80%</span>
                        </div>
                    </div>
                    <p className="su-text-m5 su-leading-[0.7] su-mb-0 su-font-bold">3.05</p>
                </div>

                <div className="su-rounded su-border su-border-gray su-bg-white su-shadow-sm su-p-30 su-pb-40">
                    <div className="su-flex su-items-center su-justify-between su-mb-30">
                        <p className="su-text-16 su-mb-0">Insights placeholder</p>
                        <div className="su-text-red-dark su-text-14 su-font-semibold su-bg-red-dark/10 su-flex su-items-center su-px-10 su-py-8 su-rounded">
                            <img className="su-inline su-mt-1 su-mr-5" src={require('images/chevron-down.svg')} alt="" />
                            <span>9%</span>
                        </div>
                    </div>
                    <p className="su-text-m5 su-leading-[0.7] su-mb-0 su-font-bold">949</p>
                </div>
            </div>
        </section>
    );
};
