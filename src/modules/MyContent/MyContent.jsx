import React, {useState, useEffect} from 'react';
import {PageHeading} from '../Home/PageHeading.jsx';
import {fetchFBData, getSearchData, getHubStatus} from '../Helpers/requests.js';
import {SortByFilter} from '../Filters/SortByFilter.jsx';
import {Card} from '../Card/Card.jsx';
import {Pagination} from '../Pagination/Pagination.jsx';
import {createUrl, getLabel, getQueryStringParams} from '../Helpers/helperFunctions.js';
import {Oval} from 'react-loader-spinner';
import {SelectedFacets} from '../Filters/SelectedFilters.jsx';
import {StatusFilter} from '../Filters/StatusFilter.jsx';
import {NoContent} from '../NoContent/NoContent.jsx';

export const MyContent = () => {
    const [statusLabel, setStatusLabels] = useState([]);
    const [data, setData] = useState([]); // data from endpoint
    const [isLoading, setIsLoading] = useState(false); // Loader flag
    const [resultsSummary, setResultsSummary] = useState([]);
    const [results, setResults] = useState([]); // data from endpoint
    const [queryParams, setQueryParams] = useState([]);
    const [facets, setFacets] = useState([]);
    const [baseUrl, setBaseUrl] = useState(`${window.globalData.urls.fb}/s/search.json`);
    const [sortBySelected, setSortBySelected] = useState('Newest to Oldest');
    const [statusSelected, setStatusSelected] = useState('All');
    const [dataLocation, setDataLocation] = useState('');
    const [hubStatuses, setHubStatuses] = useState([]);

    useEffect(() => {
        let url = window?.data?.contentHubAPI?.search.myContent;
        if (url) {
            fetchData(url, 'matrix');
            setBaseUrl(url);
            setDataLocation('matrix');
        } else {
            fetchData(
                `${window.globalData.urls.fb}/s/search.json?profile=search&collection=sug~sp-stanford-university-content-hub&num_ranks=10&start_rank=1&sort=dmetamtxCreated&&query=!nullquery`,
                'fb',
            );
            setDataLocation('fb');
        }
    }, []);

    /**
     * @function fetchData
     * @description - Fetches data for the page
     *
     * @param {string} url - The url to fetch data from. Must be in JSON format.
     * @param {string} func - Checks the source
     */
    const fetchData = async (url, func) => {
        setIsLoading(true);
        // backup for local environment
        if (func == 'fb') {
            try {
                const d = await fetchFBData(url);
                let sourceIdsArray = setDataValues(d, url);

                const statuses = await getHubStatus(sourceIdsArray.join(','));
                setHubStatuses(statuses);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        } else {
            try {
                const d = await getSearchData(url);
                let sourceIdsArray = setDataValues(d, url);
                const statuses = await getHubStatus(sourceIdsArray.join(','));
                setHubStatuses(statuses);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    /**
     * @function setDataValues
     * @description - Allocates values to different state objects from fetched data
     *
     * @param {Object} d - JSON data object passed in through fetchData()
     * @param {string} url - The url data is fetched from
     * returns array of source IDs to fetchData for further requests
     */
    const setDataValues = (d, url) => {
        setFacets(d.response.facets);
        d.response.facets.map((item) => {
            if (item.name == 'hubStatus') {
                setStatusLabels(item.allValues);
            }
        });
        setData(d);
        setResults(d.response.resultPacket.results);
        setResultsSummary(d.response.resultPacket.resultsSummary);
        let params = getQueryStringParams(url);
        setQueryParams(params);
        let sourceIdsArray = [];
        d.response.resultPacket.results.forEach((item) => {
            if (item.listMetadata.assetId && item.listMetadata.assetId.length > 0) {
                sourceIdsArray.push(item.listMetadata.assetId[0]);
            }
        });
        return sourceIdsArray;
    };

    /**
     * @function onChange
     * @description - Handles all filtering and searching functionality
     *
     * @param {string} name - Name of the filter being used
     * @param {string} value - Value of the changed filter field (eg: 'sent-to-sr)
     * @param {string} selectedValue - Value of the changed filter field for display on page (eg: 'Sent to Stanford Report')
     * returns array of source IDs to fetchData for further requests
     */
    const onChange = (name, value, selectedVal) => {
        // console.log('OnChange: ', name, ' || ', value);
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
            fetchData(fetchUrl, dataLocation);
        } else {
            if (name == 'status') {
                let selected = getLabel(selectedVal);
                setStatusSelected(selected);
            }
            let fetchUrl = baseUrl + value;
            fetchData(fetchUrl, dataLocation);
        }
    };

    return isLoading ? (
        <Oval visible={true} height="80" width="80" color="#B1040E" secondaryColor="gray" ariaLabel="oval-loading" />
    ) : (
        <div className="su-col-span-full xl:su-col-start-2 xl:su-col-span-10">
            <PageHeading headingText={window?.data?.texts?.mycontent?.headingText} subHeadingText={window?.data?.texts?.mycontent?.subHeadingText} homeButton={true} />
            <section>
                <div className="su-mb-20">
                    {/* Status Filter */}
                    <div className="su-w-full md:su-w-1/2">
                        <StatusFilter onChange={onChange} facets={statusLabel} selectedValue={statusSelected} />
                    </div>
                    {/* Status Filter */}
                </div>
                <SelectedFacets onChange={onChange} facets={facets} page="myContent" />

                {results && results.length > 0 ? (
                    <>
                        <div className="su-flex su-flex-col sm:su-flex-row su-gap-y-xs su-justify-between su-mb-20">
                            <p className="su-leading-[2] su-mb-0">
                                {resultsSummary.currStart}-{resultsSummary.currEnd} of {resultsSummary.totalMatching} results
                            </p>

                            <SortByFilter onChange={onChange} selectedValue={sortBySelected} />
                        </div>
                        {/* Cards */}
                        <ul className="searchResults__items su-flex su-flex-col su-gap-y-xs su-list-none su-p-0 su-m-0 su-mb-60">
                            {results.map((contentItem, index) => (
                                <Card key={index} data={contentItem} page="myContent" statuses={hubStatuses} />
                            ))}
                        </ul>
                        {/* Cards end */}
                    </>
                ) : (
                    <NoContent />
                )}
                <Pagination data={data} summary={resultsSummary} onChange={onChange} />
            </section>
        </div>
    );
};
