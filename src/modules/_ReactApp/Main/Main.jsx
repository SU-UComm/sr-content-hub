import React, {useEffect, useState} from 'react';
import {AppStateExample} from '../AppStateExample/AppStateExample.jsx';
import {DataStateExample} from '../DataStateExample/DataStateExample.jsx';
import {SearchBar} from '../SearchBar/SearchBar.jsx';
import {Filter} from '../Filters/Filter.jsx';
import {StatusFilter} from '../Filters/StatusFilter.jsx';

export const Main = () => {
    const [data, setData] = useState(null);
    const [facets, setFacetData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://dxp-us-stage-search.funnelback.squiz.cloud/s/search.json?profile=search&collection=sug~sp-stanford-university-content-hub&num_ranks=10&start_rank=1&sort=dmetamtxCreated&&query=!nullquery',
                );
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                // const req0Url = response['info']['url'];
                // const resp0Code = response['info']['http_code'];
                setData(result);
                setFacetData(result.response.facets);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const mtxCfg = {
        userType: 'UCOMM',
        itemDefaultImg: './?a=33510',
        actionsEsi: './?a=33052',
        cpFilterLabel: 'Content partners',
        cpFilterName: 'f.contentPartner%7CtaxonomyContentPartnerText',
        cpFilterDefault: '-- Choose Content Partner --',
        statusFilterLabel: 'Status',
        statusFilterName: 'f.hubStatus|hubStatus',
        statusFilterDefault: 'All',
        dateFilterLabel: 'Date Range',
        dateFilterName: 'f.date|d',
        dateFilterDefault: 'All',
        sortByLabel: 'Sort By',
        resultsPerPage: 10,
        resultsSuffixText: 'results',
        storyViewerUrl: '%globals_site_metadata_storyView^as_asset:asset_url%',
        url: '%frontend_asset_url%',
        queryString: '%globals_server_query_string%',
    };

    // console.log('data', data);

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
                    <div className="su-mb-20">
                        <div className="su-flex su-flex-col lg:su-flex-row su-gap-xs">
                            <Filter />
                            <StatusFilter data={data} facets={facets} cfg={mtxCfg} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
