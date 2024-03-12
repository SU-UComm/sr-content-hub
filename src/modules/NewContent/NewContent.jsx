import React, {useState, useEffect} from 'react';
import {PageHeading} from '../Home/PageHeading.jsx';
import {CPFilter} from '../Filters/CPFilter.jsx';
import {fetchFBData, getSearchData, getHubStatus} from '../Helpers/requests.js';
import {SortByFilter} from '../Filters/SortByFilter.jsx';
import {Card} from '../Card/Card.jsx';
import {Pagination} from '../Pagination/Pagination.jsx';
import {createUrl, getQueryStringParams} from '../Helpers/helperFunctions.js';
import {Oval} from 'react-loader-spinner';
import {SelectedFacets} from '../Filters/SelectedFilters.jsx';
import {DateRangeFilter} from '../Filters/DateFilter.jsx';

export const NewContent = () => {
    const [CPLabels, setCPLabels] = useState([]);
    const [data, setData] = useState([]); // data from endpoint
    const [isLoading, setIsLoading] = useState(false); // Loader flag
    const [resultsSummary, setResultsSummary] = useState([]);
    const [results, setResults] = useState([]); // data from endpoint
    const [queryParams, setQueryParams] = useState([]);
    const [facets, setFacets] = useState([]);
    const [dataLocation, setDataLocation] = useState('');
    const [baseUrl, setUrl] = useState(`${window.globalData.urls.fb}/s/search.json`);
    const [sortBySelected, setSortBySelected] = useState('Newest to Oldest');
    const [hubStatuses, setHubStatuses] = useState([]);
    const [dateSelected, setDateSelected] = useState('All');
    const [dateLabel, setDateLabels] = useState([]);

    const fetchData = async (url, func) => {
        setIsLoading(true);
        if (func == 'fb') {
            try {
                const d = await fetchFBData(url);
                d.response.facets.map((item) => {
                    if (item.name == 'contentPartner') {
                        setCPLabels(item.allValues);
                    } else if (item.name == 'date') {
                        setDateLabels(item.allValues);
                    }
                });
                setFacets(d.response.facets);
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

                const statuses = await getHubStatus(sourceIdsArray.join(','));
                console.log('Statuses:', statuses);
                setHubStatuses(statuses);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        } else {
            try {
                const d = await getSearchData(url);
                setFacets(d.response.facets);
                d.response.facets.map((item) => {
                    if (item.name == 'contentPartner') {
                        setCPLabels(item.allValues);
                    } else if (item.name == 'date') {
                        setDateLabels(item.allValues);
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

                const statuses = await getHubStatus(sourceIdsArray.join(','));
                console.log('Statuses:', statuses);
                setHubStatuses(statuses);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        let url = window?.data?.contentHubAPI?.search.newContent;
        if (url) {
            fetchData(url, 'matrix');
            setDataLocation('matrix');
            setUrl(url);
        } else {
            fetchData(
                `${window.globalData.urls.fb}/s/search.json?f.hubStatus%7ChubStatus=submitted&profile=search&num_ranks=10&query=%21nullquery&collection=sug%7Esp-stanford-university-content-hub&sort=dmetamtxCreated`,
                'fb',
            );
            setDataLocation('fb');
        }
    }, []);

    const onChange = (name, value, selectedVal) => {
        // console.log('ON CHANGE: ', name, ' || ', value, '    ||    ', selectedVal);
        let fetchUrl;
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
            fetchUrl = baseUrl + '?' + createUrl(queryParams);
        } else if (name == 'pagination') {
            let newParams = queryParams;
            const hasStartRank = newParams.find((entry) => entry.name === 'start_rank');
            if (!hasStartRank) {
                queryParams.push({name: 'start_rank', value});
            } else {
                hasStartRank.value = value;
            }
            setQueryParams(newParams);
            fetchUrl = baseUrl + '?' + createUrl(queryParams);
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
            fetchUrl = baseUrl + '?' + createUrl(queryParams);
        } else {
            if (name == 'date') {
                setDateSelected(selectedVal);
            }
            if (name == 'unselect') {
                if (selectedVal == 'date') {
                    setDateSelected('All');
                }
            }
            fetchUrl = baseUrl + value;
        }
        fetchData(fetchUrl, dataLocation);
    };

    return isLoading ? (
        <Oval visible={true} height="80" width="80" color="#B1040E" secondaryColor="gray" ariaLabel="oval-loading" />
    ) : (
        <div className="su-col-span-full xl:su-col-start-2 xl:su-col-span-10">
            <PageHeading headingText={window?.data?.texts?.newcontent?.headingText} subHeadingText={window?.data?.texts?.newcontent?.subHeadingText} homeButton={true} />
            <section>
                <div className="su-mb-20 ">
                    <div className="su-flex su-flex-col lg:su-flex-row su-gap-xs">
                        {/* CP Filter */}

                        <div className="su-flex-[calc(100%/3)_1_1]">
                            <label htmlFor="cp-filter" className="su-block su-text-18 su-font-bold su-leading-[2] su-mb-10">
                                Content partners
                            </label>
                            <CPFilter facets={CPLabels} onChange={onChange} />
                        </div>
                        {/* CP Filter */}

                        {/* Date Filter */}

                        <div className="su-flex-[calc(100%/3)_1_1]">
                            <DateRangeFilter facets={dateLabel} onChange={onChange} selectedValue={dateSelected} />
                        </div>
                    </div>
                    {/* Date Filter */}
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
                        <Card key={index} data={contentItem} statuses={hubStatuses} />
                    ))}
                </ul>
                <Pagination data={data} summary={resultsSummary} onChange={onChange} />
            </section>
        </div>
    );
};
