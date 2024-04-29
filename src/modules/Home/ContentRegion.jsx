import React, {useState, useEffect} from 'react';
import {Card} from '../Card/Card.jsx';
import {getLabel} from '../Helpers/helperFunctions.js';
import {fetchFBData, getSearchData, getHubStatus} from '../Helpers/requests.js';
import {Oval} from 'react-loader-spinner';
import {StatusFilter} from '../Filters/StatusFilter.jsx';
import {SelectedFacets} from '../Filters/SelectedFilters.jsx';
import {NoContent} from '../NoContent/NoContent.jsx';

export const ContentRegion = () => {
    const [baseUrl, setBaseUrl] = useState(`${window.globalData.urls.fb}/s/search.json`);
    const [isLoading, setIsLoading] = useState(false); // Loader flag
    // const [data, setData] = useState([]); // data from endpoint
    const [results, setResults] = useState([]); // data from endpoint
    const [resultsSummary, setResultsSummary] = useState([]);
    const [statusLabel, setStatusLabels] = useState([]);
    const [facets, setFacets] = useState([]);
    const [statusSelected, setStatusSelected] = useState('All');
    const [dataLocation, setDataLocation] = useState('');
    const [hubStatuses, setHubStatuses] = useState([]);

    const fetchData = async (url, func) => {
        setIsLoading(true);
        // backup for local environment
        if (func == 'fb') {
            try {
                const d = await fetchFBData(url);
                d.response.facets.map((item) => {
                    if (item.name == 'hubStatus') {
                        setStatusLabels(item.allValues);
                    }
                });
                setFacets(d.response.facets);
                setResults(d.response.resultPacket.results);
                setResultsSummary(d.response.resultPacket.resultsSummary);
                let sourceIdsArray = [];
                d.response.resultPacket.results.forEach((item) => {
                    if (item.listMetadata.assetId && item.listMetadata.assetId.length > 0) {
                        sourceIdsArray.push(item.listMetadata.assetId[0]);
                    }
                });

                const statuses = await getHubStatus(sourceIdsArray.join(','));
                setHubStatuses(statuses);
                if (window?.data?.user.userType == 'UCOMM') {
                    checkStatus(statuses);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        } else {
            try {
                const d = await getSearchData(url);
                d.response.facets.map((item) => {
                    if (item.name == 'hubStatus') {
                        setStatusLabels(item.allValues);
                    }
                });
                setFacets(d.response.facets);
                setResults(d.response.resultPacket.results);
                setResultsSummary(d.response.resultPacket.resultsSummary);
                let sourceIdsArray = [];
                d.response.resultPacket.results.forEach((item) => {
                    if (item.listMetadata.assetId && item.listMetadata.assetId.length > 0) {
                        sourceIdsArray.push(item.listMetadata.assetId[0]);
                    }
                });

                const statuses = await getHubStatus(sourceIdsArray.join(','));
                setHubStatuses(statuses);
                if (window?.data?.user.userType == 'UCOMM') {
                    checkStatus(statuses, d.response.resultPacket.results);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    useEffect(() => {
        let userType = window?.data?.user.userType;
        let urlCheck = window?.data?.contentHubAPI?.search;

        if (urlCheck) {
            let url = userType == 'CP' ? window.data.contentHubAPI.search.myContent : window.data.contentHubAPI.search.newContent;
            setBaseUrl(url);
            fetchData(url, 'matrix');
            setDataLocation('matrix');
        } else {
            fetchData(
                `${window.globalData.urls.fb}/s/search.json?f.hubStatus%7ChubStatus=submitted&profile=search&num_ranks=10&query=%21nullquery&collection=sug%7Esp-stanford-university-content-hub&sort=dmetamtxCreated`,
                'fb',
            );
            setDataLocation('fb');
        }
    }, []);

    const checkStatus = (statuses, resultsArray) => {
        // console.log('1 results', resultsArray);
        setIsLoading(true);
        const filteredResults = [];
        let idx = 0;
        statuses.forEach((status) => {
            if (status.hubStatus === 'submitted') {
                filteredResults.push(resultsArray[idx]);
            }
            idx = idx + 1;
        });
        setResults(filteredResults);
        // console.log('2 results', filteredResults);
        setIsLoading(false);
    };

    const onChange = (name, value, selectedVal) => {
        // console.log('ON CHANGE: ', name, ' || ', value, '    ||    ', selectedVal);
        if (name == 'status') {
            let selected = getLabel(selectedVal);
            setStatusSelected(selected);
        }
        if (name == 'unselect') {
            if (selectedVal == 'hubStatus') {
                setStatusSelected('All');
            }
        }
        let fetchUrl = baseUrl + value;
        fetchData(fetchUrl, dataLocation);
    };

    return isLoading ? (
        <Oval visible={true} height="80" width="80" color="#B1040E" secondaryColor="gray" ariaLabel="oval-loading" />
    ) : (
        <section>
            <div className="su-flex su-flex-col md:su-flex-row su-justify-between md:su-items-center su-mb-20 su-gap-xs">
                <h2 className="su-text-h4 md:su-text-h3 su-font-serif su-mb-0">{window?.data?.user?.userType === 'UCOMM' ? 'Latest content for review' : 'My Recent Content'}</h2>
                <div>
                    <a
                        href={window?.data?.user?.userType === 'UCOMM' ? window.globalData.pageHrefs.newContent : window.globalData.pageHrefs.myContent}
                        className="su-flex su-items-center su-text-[18px] hover:su-underline"
                    >
                        View all {window?.data?.user?.userType === 'UCOMM' ? 'Latest Content' : 'My Content'}
                        <img className="su-inline su-ml-6" src={require('images/arrow-right.svg')} />
                    </a>
                </div>
            </div>
            {window?.data?.user?.userType === 'CP' && results.length > 0 ? (
                <div className="su-mb-60">
                    <div className="su-w-full md:su-w-1/2">
                        <StatusFilter facets={statusLabel} onChange={onChange} selectedValue={statusSelected} />
                    </div>
                    <SelectedFacets onChange={onChange} facets={facets} page={window?.data?.user.userType == 'CP' ? 'myContent' : 'newContent'} />
                </div>
            ) : null}

            <p className="su-leading-[2] su-mb-20">
                {window?.data?.user?.userType === 'UCOMM'
                    ? `1-${resultsSummary.totalMatching > 5 ? '5' : resultsSummary.totalMatching} of ${resultsSummary.totalMatching} results waiting for review`
                    : ''}
            </p>

            <ul className="su-flex su-flex-col su-gap-y-xs su-list-none su-p-0 su-m-0" id="latest-content">
                {results.length > 0 ? (
                    results.slice(0, 5).map((contentItem, index) => <Card key={index} data={contentItem} statuses={hubStatuses} fetchData={fetchData} page="home" />)
                ) : (
                    <NoContent />
                )}
            </ul>
        </section>
    );
};
