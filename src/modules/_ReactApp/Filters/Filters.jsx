import React, {useState, useEffect} from 'react';
import {DateFilter} from './DateFilter.jsx';
import {StatusFilter} from './StatusFilter.jsx';
import {CPFilter} from './CPFilter.jsx';
import {SortByFilter} from './SortByFilter.jsx';

export const Filters = () => {
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
        currentRangeLabel: '',
    };

    // console.log('data', data);
    return (
        <div className="su-mb-20">
            <div className="su-flex su-flex-col lg:su-flex-row su-gap-xs">
                <DateFilter data={data} facets={facets} cfg={mtxCfg} />
                <StatusFilter data={data} facets={facets} cfg={mtxCfg} />
                <CPFilter data={data} facets={facets} cfg={mtxCfg} />
                <SortByFilter data={data} facets={facets} cfg={mtxCfg} />
            </div>
        </div>
    );
};
