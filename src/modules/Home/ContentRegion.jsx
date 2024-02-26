import React, {useState, useEffect} from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import {Card} from '../Card/Card.jsx';
import {createUrl, getLabel, getQueryStringParams} from '../Helpers/helperFunctions.js';
import {fetchFBData, getSearchData} from '../Helpers/requests.js';
import {Oval} from 'react-loader-spinner';
import {StatusFilter} from '../Filters/StatusFilter.jsx';
import {SelectedFacets} from '../Filters/SelectedFilters.jsx';

export const ContentRegion = () => {
    const [isLoading, setIsLoading] = useState(false); // Loader flag
    const [data, setData] = useState([]); // data from endpoint
    const [results, setResults] = useState([]); // data from endpoint
    const [resultsSummary, setResultsSummary] = useState([]);
    const [statusLabel, setStatusLabels] = useState([]);
    const [facets, setFacets] = useState([]);
    const [statusSelected, setStatusSelected] = useState('All');
    const [baseUrl, setUrl] = useState('https://dxp-us-stage-search.funnelback.squiz.cloud/s/search.json');
    const [dataLocation, setDataLocation] = useState('');

    const fetchData = async (url, func) => {
        setIsLoading(true);
        // replace with getSearchData from requests.js with blank query once CORS is resolved
        if (func == 'fb') {
            try {
                const d = await fetchFBData(url);
                setStatusLabels(d.response.facets[1].allValues);
                setFacets(d.response.facets);
                setData(d);
                setResults(d.response.resultPacket.results);
                setResultsSummary(d.response.resultPacket.resultsSummary);
                console.log('REQUEST FUNCTION data in home: ', d);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        } else {
            try {
                const d = await getSearchData(url);
                setStatusLabels(d.response.facets[1].allValues);
                setFacets(d.response.facets);
                setData(d);
                setResults(d.response.resultPacket.results);
                setResultsSummary(d.response.resultPacket.resultsSummary);
                console.log('REQUEST FUNCTION data in home matrix: ', d);
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
            let url = userType == 'CP' ? window.data.contentHubAPI.search.allContent : window.data.contentHubAPI.search.newContent;

            fetchData(url, 'matrix');
            setDataLocation('matrix');
        } else {
            fetchData(
                'https://dxp-us-stage-search.funnelback.squiz.cloud/s/search.json?f.hubStatus%7ChubStatus=submitted&profile=search&num_ranks=10&query=%21nullquery&collection=sug%7Esp-stanford-university-content-hub&sort=dmetamtxCreated',
                'fb',
            );
            setDataLocation('fb');
        }
    }, []);

    const onChange = (name, value, selectedVal) => {
        console.log('ON CHANGE: ', name, ' || ', value, '    ||    ', selectedVal);
        if (name == 'status') {
            let selected = getLabel(selectedVal);
            setStatusSelected(selected);
        }
        if (name == 'unselect') {
            console.log('check');
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
            {window?.data?.user?.userType === 'CP' && results.length > 1 ? (
                <div className="su-mb-60">
                    <div className="su-w-full md:su-w-1/2">
                        <StatusFilter facets={statusLabel} onChange={onChange} selectedValue={statusSelected} />
                    </div>
                    <SelectedFacets onChange={onChange} facets={facets} page={window?.data?.user.userType == 'CP' ? 'myContent' : 'newContent'} />
                </div>
            ) : null}

            <p className="su-leading-[2] su-mb-20">{window?.data?.user?.userType === 'UCOMM' ? `1-5 of ${resultsSummary.totalMatching} results waiting for review` : ''}</p>

            <ul className="su-flex su-flex-col su-gap-y-xs su-list-none su-p-0 su-m-0" id="latest-content">
                {results.slice(0, 5).map((contentItem, index) => (
                    <Card key={index} data={contentItem} />
                ))}
            </ul>
        </section>
    );
};
