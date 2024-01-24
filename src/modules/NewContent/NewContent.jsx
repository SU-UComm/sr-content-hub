import React, {useState, useEffect} from 'react';
import {PageHeading} from '../Home/PageHeading.jsx';
import {CPFilter} from '../Filters/CPFilter.jsx';
import {fetchFBData} from '../Helpers/requests.js';
import {SortByFilter} from '../Filters/SortByFilter.jsx';
import {Card} from '../Card/Card.jsx';

export const NewContent = () => {
    const [CPLabels, setCPLabels] = useState([]);
    const [data, setData] = useState([]); // data from endpoint
    const [isLoading, setIsLoading] = useState(false); // Loader flag
    const [resultsSummary, setResultsSummary] = useState([]);
    const [results, setResults] = useState([]); // data from endpoint

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const d = await fetchFBData(
                    'https://dxp-us-stage-search.funnelback.squiz.cloud/s/search.json?profile=search&collection=sug~sp-stanford-university-content-hub&num_ranks=10&start_rank=1&sort=dmetamtxCreated&&query=!nullquery',
                );
                setData(d);
                setCPLabels(d.response.facets[2].allValues);
                setResults(d.response.resultPacket.results);
                setResultsSummary(d.response.resultPacket.resultsSummary);
                console.log('REQUEST FUNCTION data in home: ', d);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        !isLoading && (
            <div className="su-col-span-full xl:su-col-start-2 xl:su-col-span-10">
                <PageHeading headingText={window?.data?.texts?.newcontent?.headingText} subHeadingText={window?.data?.texts?.newcontent?.subHeadingText} homeButton={true} />
                <section>
                    <div className="su-mb-20">
                        {/* CP Filter */}
                        <label htmlFor="cp-filter" className="su-block su-text-18 su-font-bold su-leading-[2] su-mb-10">
                            Content partners
                        </label>
                        <div className="su-w-full md:su-w-1/2">
                            <CPFilter facets={CPLabels} />
                        </div>
                        {/* CP Filter */}
                    </div>

                    <div className="su-flex su-flex-col sm:su-flex-row su-gap-y-xs su-justify-between su-mb-20">
                        <p className="su-leading-[2] su-mb-0">
                            {resultsSummary.currStart}-{resultsSummary.currEnd} of {resultsSummary.totalMatching} results
                        </p>

                        <SortByFilter />
                    </div>
                    <ul className="searchResults__items su-flex su-flex-col su-gap-y-xs su-list-none su-p-0 su-m-0 su-mb-60">
                        {results.map((contentItem, index) => (
                            <Card key={index} {...contentItem} />
                        ))}
                    </ul>
                </section>
            </div>
        )
    );
};
