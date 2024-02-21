import React, {useState, useEffect} from 'react';
import {PageHeading} from '../Home/PageHeading.jsx';
import {CPFilter} from '../Filters/CPFilter.jsx';
import {fetchFBData, getSearchData} from '../Helpers/requests.js';
import {SortByFilter} from '../Filters/SortByFilter.jsx';
import {Card} from '../Card/Card.jsx';
import {Pagination} from '../_ReactApp/Pagination/Pagination.jsx';
import {createUrl, getQueryStringParams} from '../Helpers/helperFunctions.js';
import {Oval} from 'react-loader-spinner';
import {SelectedFacets} from '../Filters/SelectedFilters.jsx';
import {BrowserRouter} from 'react-router-dom';

export const NewContent = () => {
    const [CPLabels, setCPLabels] = useState([]);
    const [data, setData] = useState([]); // data from endpoint
    const [isLoading, setIsLoading] = useState(false); // Loader flag
    const [resultsSummary, setResultsSummary] = useState([]);
    const [results, setResults] = useState([]); // data from endpoint
    const [queryParams, setQueryParams] = useState([]);
    const [facets, setFacets] = useState([]);
    const [dataLocation, setDataLocation] = useState('');
    const [baseUrl, setUrl] = useState('https://dxp-us-stage-search.funnelback.squiz.cloud/s/search.json');
    const [sortBySelected, setSortBySelected] = useState('Newest to Oldest');

    const fetchData = async (url, func) => {
        setIsLoading(true);
        // replace with getSearchData from requests.js with blank query once CORS is resolved
        if (func == 'fb') {
            try {
                const d = await fetchFBData(url);
                setFacets(d.response.facets);
                setCPLabels(d.response.facets[2].allValues);
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
        } else {
            try {
                const d = await getSearchData(url, '');
                setFacets(d.response.facets);
                setCPLabels(d.response.facets[2].allValues);
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
        }
    };

    useEffect(() => {
        let user = window?.data?.user?.userType;
        let url = window?.data?.contentHubAPI?.search;
        if (url) {
            if (user == 'CP') {
                fetchData('myContent', 'matrix');
                // getSearchData('myContent', '');
            } else {
                fetchData('newContent', 'matrix');
                // getSearchData('newContent', '');
            }
            setDataLocation('matrix');
            setUrl(url);
        } else {
            fetchData(
                'https://dxp-us-stage-search.funnelback.squiz.cloud/s/search.json?f.hubStatus%7ChubStatus=submitted&profile=search&num_ranks=10&query=%21nullquery&collection=sug%7Esp-stanford-university-content-hub&sort=dmetamtxCreated',
                'fb',
            );
            setDataLocation('fb');
        }
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
            fetchData(fetchUrl, dataLocation);
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
            fetchData(fetchUrl, dataLocation);
        } else if (name == 'sortBy') {
            let newParams = queryParams;
            let selected = value === 'dmetamtxCreated' ? 'Newest to Oldest' : 'Oldest to Newest';
            setSortBySelected(selected);
            const sortBy = newParams.find((entry) => entry.name === 'sort');
            if (!sortBy) {
                queryParams.push({name: 'sort', value});
            } else {
                sortBy.value = value;
            }
            setQueryParams(newParams);
            let fetchUrl = baseUrl + '?' + createUrl(queryParams);
            console.log('CREATED URL sort: ', fetchUrl);
            fetchData(fetchUrl, dataLocation);
        } else {
            let fetchUrl = baseUrl + value;
            fetchData(fetchUrl, dataLocation);
        }
    };

    return isLoading ? (
        <Oval visible={true} height="80" width="80" color="#B1040E" secondaryColor="gray" ariaLabel="oval-loading" />
    ) : (
        <div className="su-col-span-full xl:su-col-start-2 xl:su-col-span-10">
            <PageHeading headingText={window?.data?.texts?.newcontent?.headingText} subHeadingText={window?.data?.texts?.newcontent?.subHeadingText} homeButton={true} />
            <section>
                <div className="su-mb-20">
                    {/* CP Filter */}
                    <label htmlFor="cp-filter" className="su-block su-text-18 su-font-bold su-leading-[2] su-mb-10">
                        Content partners
                    </label>
                    <div className="su-w-full md:su-w-1/2">
                        <CPFilter facets={CPLabels} onChange={onChange} />
                    </div>
                    {/* CP Filter */}
                </div>
                <SelectedFacets onChange={onChange} facets={facets} page="newContent" />

                <div className="su-flex su-flex-col sm:su-flex-row su-gap-y-xs su-justify-between su-mb-20">
                    <p className="su-leading-[2] su-mb-0">
                        {resultsSummary.currStart}-{resultsSummary.currEnd} of {resultsSummary.totalMatching} results
                    </p>

                    <SortByFilter onChange={onChange} selectedValue={sortBySelected} />
                </div>
                <ul className="searchResults__items su-flex su-flex-col su-gap-y-xs su-list-none su-p-0 su-m-0 su-mb-60">
                    {results.map((contentItem, index) => (
                        <BrowserRouter key={index}>
                            <Card key={index} data={contentItem} />
                        </BrowserRouter>
                    ))}
                </ul>
                <Pagination data={data} summary={resultsSummary} onChange={onChange} />
            </section>
        </div>
    );
};
