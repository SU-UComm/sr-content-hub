import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Card} from '../Card/Card.jsx';
import {fetchFBData} from '../Helpers/requests.js';
import {Oval} from 'react-loader-spinner';
import {StatusFilter} from '../Filters/StatusFilter.jsx';

export const ContentRegion = () => {
    const [isLoading, setIsLoading] = useState(false); // Loader flag
    const [data, setData] = useState([]); // data from endpoint
    const [results, setResults] = useState([]); // data from endpoint
    const [resultsSummary, setResultsSummary] = useState([]);
    const [statusLabel, setStatusLabels] = useState([]);
    const [facets, setFacets] = useState([]);

    const fetchData = async (url) => {
        setIsLoading(true);
        // replace with getSearchData from requests.js with blank query once CORS is resolved
        try {
            const d = await fetchFBData(url);
            setStatusLabels(d.response.facets[1].allValues);
            setFacets(d.response.facets);
            setData(d);
            setResults(d.response.resultPacket.results);
            setResultsSummary(d.response.resultPacket.resultsSummary);
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

    const onChange = (name, value) => {
        console.log('ON CHANGE: ', name, ' || ', value);

        let fetchUrl = baseUrl + value;
        fetchData(fetchUrl);
    };

    return isLoading ? (
        <Oval visible={true} height="80" width="80" color="#B1040E" secondaryColor="gray" ariaLabel="oval-loading" />
    ) : (
        <section>
            <div className="su-flex su-flex-col md:su-flex-row su-justify-between md:su-items-center su-mb-20 su-gap-xs">
                <h2 className="su-text-h4 md:su-text-h3 su-font-serif su-mb-0">{window?.data?.user?.userType === 'UCOMM' ? 'Latest content for review' : 'My Recent Content'}</h2>
                <div>
                    <a href={window.globalData.pageHrefs.newContent} className="su-flex su-items-center su-text-[18px] hover:su-underline">
                        View all {window?.data?.user?.userType === 'UCOMM' ? 'Latest Content' : 'My Content'}
                        <img className="su-inline su-ml-6" src={require('images/arrow-right.svg')} />
                    </a>
                </div>
            </div>
            <div className="su-mb-60">
                <div className="su-w-full md:su-w-1/2">
                    <StatusFilter facets={statusLabel} onChange={onChange} />{' '}
                </div>
            </div>

            <p className="su-leading-[2] su-mb-20">1-5 of {resultsSummary.totalMatching} results waiting for review</p>

            <ul className="su-flex su-flex-col su-gap-y-xs su-list-none su-p-0 su-m-0" id="latest-content">
                {results.slice(0, 5).map((contentItem, index) => (
                    <Card key={index} {...contentItem} />
                ))}
            </ul>
        </section>
    );
};
