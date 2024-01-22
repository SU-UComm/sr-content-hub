import React, {useEffect, useState} from 'react';
import {AppStateExample} from '../AppStateExample/AppStateExample.jsx';
import {DataStateExample} from '../DataStateExample/DataStateExample.jsx';
import {SearchBar} from '../SearchBar/SearchBar.jsx';
import {Filters} from '../Filters/Filters.jsx';

export const Main = () => {
    return (
        <div className="su-col-span-full xl:su-col-start-2 xl:su-col-span-10">
            <section className="su-relative su-text-center su-mt-60 su-mb-50 su-pt-60 md:su-mt-45 md:su-pt-70 md:su-mb-100">
                <div className="su-absolute su-top-0 su-left-0 lg:su-left-[-64px]">
                    <a className="su-flex su-items-center su-text-[18px] hover:su-underline" href="https://sug-web.matrix.squiz.cloud/content">
                        <svg className="su-mr-6" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M8.33333 15.8337L2.5 10.0003M2.5 10.0003L8.33334 4.16699M2.5 10.0003L17.5 10.0003"
                                stroke="#E50808"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                        Back to Home
                    </a>
                </div>
                <h1 className="su-font-serif su-mb-40">All Content</h1>
                <SearchBar />
            </section>
            <div id="searchResults">
                <section data-type="UCOMM">
                    {/* <!-- Filters Area --> */}
                    <Filters />
                </section>
            </div>
        </div>
    );
};
