import React, {useState, useEffect} from 'react';
import {PageHeading} from '../Home/PageHeading.jsx';
import {StatusFilter} from '../Filters/StatusFilter.jsx';
import {DateRangeFilter} from '../Filters/DateFilter.jsx';
import {CPFilter} from '../Filters/CPFilter.jsx';
import {fetchFBData} from '../Helpers/requests.js';
import {SortByFilter} from '../Filters/SortByFilter.jsx';
import {Card} from '../Card/Card.jsx';
import {Pagination} from '../_ReactApp/Pagination/Pagination.jsx';
import {SearchBar} from '../Search/SearchBar.jsx';
import {getSearchData} from '../Helpers/requests.js';
import {SelectedFacets} from '../Filters/SelectedFilters.jsx';
import {createUrl, getQueryStringParams} from '../Helpers/helperFunctions.js';
import {Oval} from 'react-loader-spinner';

export const AllContent = () => {
    const [isLoading, setIsLoading] = useState(false); // Loader flag
    const [data, setData] = useState([]); // data from endpoint
    const [userData, setUserData] = useState([]); // user data from endpoint
    const [CPLabels, setCPLabels] = useState([]);
    const [facets, setFacets] = useState([]);
    const [statusLabel, setStatusLabels] = useState([]);
    const [dateLabel, setDateLabels] = useState([]);
    const [resultsSummary, setResultsSummary] = useState([]);
    const [results, setResults] = useState([]); // data from endpoint
    const [queryParams, setQueryParams] = useState([]);
    const [baseUrl, setUrl] = useState('https://dxp-us-stage-search.funnelback.squiz.cloud/s/search.json');

    const fetchData = async (url) => {
        setIsLoading(true);
        // replace with getSearchData from requests.js with blank query once CORS is resolved
        try {
            const d = await fetchFBData(url);
            const labels = d.response.facets[1].allValues;
            setStatusLabels(labels);
            setCPLabels(d.response.facets[2].allValues);
            setDateLabels(d.response.facets[0].allValues);
            setFacets(d.response.facets);
            setData(d);
            setResults(d.response.resultPacket.results);
            setResultsSummary(d.response.resultPacket.resultsSummary);
            let params = getQueryStringParams(url);
            setQueryParams(params);
            console.log('REQUEST FUNCTION data in all content: ', d);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData(
            'https://dxp-us-stage-search.funnelback.squiz.cloud/s/search.json?profile=search&collection=sug~sp-stanford-university-content-hub&num_ranks=10&start_rank=1&sort=dmetamtxCreated&&query=!nullquery',
        );
    }, []);

    useEffect(() => {
        const fetchUserData = async () => {
            setIsLoading(true);
            try {
                const user = await fetchUserData();

                console.log('USER DATA: ', user);
                setUserData(user);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchUserData();
    }, []);

    const onChange = (name, value) => {
        console.log('ON CHANGE: ', name, ' || ', value);
        if (name == 'search') {
            let newParams = queryParams;
            const queryParam = newParams.find((param) => param.name === 'query');
            if (queryParam) {
                if (value == '' || value.length < 1) {
                    queryParam.value = '!nullquery';
                } else {
                    queryParam.value = value;
                }
            } else {
                newParams.push({name: 'query', value: value});
            }
            setQueryParams(newParams);
            let fetchUrl = baseUrl + '?' + createUrl(queryParams);
            console.log('CREATED URL: ', fetchUrl);
            fetchData(fetchUrl);
        } else if (name == 'pagination') {
            let newParams = queryParams;
            const hasStartRank = newParams.find((entry) => entry.name === 'start_rank');
            if (!hasStartRank) {
                queryParams.push({name: 'start_rank', value});
            } else {
                hasStartRank.value = value;
            }
            setQueryParams(newParams);
            let fetchUrl = baseUrl + '?' + createUrl(queryParams);
            console.log('CREATED URL: ', fetchUrl);
            fetchData(fetchUrl);
        } else {
            let fetchUrl = baseUrl + value;
            fetchData(fetchUrl);
        }
    };

    return isLoading ? (
        <Oval visible={true} height="80" width="80" color="#B1040E" secondaryColor="gray" ariaLabel="oval-loading" />
    ) : (
        <div className="su-col-span-full xl:su-col-start-2 xl:su-col-span-10">
            <PageHeading headingText={window?.data?.texts?.allcontent?.headingText} subHeadingText={window?.data?.texts?.newcontent?.subHeadingText} homeButton={true} />
            <SearchBar onChange={onChange} />
            <section>
                <div className="su-mb-20">
                    <div className="su-flex su-flex-col lg:su-flex-row su-gap-xs">
                        {/* CP Filter */}
                        <div className="su-flex-[calc(100%/3)_1_1]">
                            <label htmlFor="cp-filter" className="su-block su-text-18 su-font-bold su-leading-[2] su-mb-10">
                                Content partners
                            </label>
                            <div className="undefined">
                                <CPFilter facets={CPLabels} onChange={onChange} />
                            </div>
                        </div>
                        {/* CP Filter */}
                        <StatusFilter facets={statusLabel} onChange={onChange} />
                        <DateRangeFilter facets={dateLabel} onChange={onChange} />
                    </div>
                    <SelectedFacets onChange={onChange} facets={facets} />
                </div>
                {/* Total Results and Sort By Filter */}
                <div className="su-flex su-flex-col sm:su-flex-row su-gap-y-xs su-justify-between su-mb-20">
                    <p className="su-leading-[2] su-mb-0">
                        {resultsSummary.currStart}-{resultsSummary.currEnd} of {resultsSummary.totalMatching} results
                    </p>
                    <div className="su-flex su-shrink-0 su-gap-xs su-items-center">
                        <SortByFilter onChange={onChange} />
                    </div>
                </div>
                {/* Cards */}
                <ul className="searchResults__items su-flex su-flex-col su-gap-y-xs su-list-none su-p-0 su-m-0 su-mb-60">
                    {results.map((contentItem, index) => (
                        <Card key={index} {...contentItem} />
                    ))}
                </ul>
                {/* Cards end */}
                {/* Pagination */}
                <Pagination data={data} summary={resultsSummary} onChange={onChange} />
            </section>
        </div>
    );
};
