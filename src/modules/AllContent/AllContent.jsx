import React, {useState, useEffect} from 'react';
import {PageHeading} from '../Home/PageHeading.jsx';
import {StatusFilter} from '../Filters/StatusFilter.jsx';
import {DateRangeFilter} from '../Filters/DateFilter.jsx';
import {CPFilter} from '../Filters/CPFilter.jsx';
import {fetchFBData} from '../Helpers/requests.js';
import {SortByFilter} from '../Filters/SortByFilter.jsx';
import {Card} from '../Card/Card.jsx';
import {Pagination} from '../_ReactApp/Pagination/Pagination.jsx';

export const AllContent = () => {
    const [isLoading, setIsLoading] = useState(false); // Loader flag
    const [data, setData] = useState([]); // data from endpoint
    const [CPLabel, setCPLabel] = useState([]);
    const [statusLabel, setStatusLabels] = useState([]);
    const [dateLabel, setDateLabels] = useState([]);
    const [resultsSummary, setResultsSummary] = useState([]);
    const [results, setResults] = useState([]); // data from endpoint

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const d = await fetchFBData(
                    'https://dxp-us-stage-search.funnelback.squiz.cloud/s/search.json?profile=search&collection=sug~sp-stanford-university-content-hub&num_ranks=10&start_rank=1&sort=dmetamtxCreated&&query=!nullquery',
                );

                const labels = d.response.facets[1].allValues;
                setStatusLabels(labels);
                setCPLabel(d.response.facets[2].allValues);
                setDateLabels(d.response.facets[0].allValues);
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
        fetchData();
    }, []);

    return (
        !isLoading && (
            <div className="su-col-span-full xl:su-col-start-2 xl:su-col-span-10">
                <PageHeading headingText={window?.data?.texts?.allcontent?.headingText} subHeadingText={window?.data?.texts?.newcontent?.subHeadingText} homeButton={true} />
                <section>
                    <div className="su-mb-20">
                        <div className="su-flex su-flex-col lg:su-flex-row su-gap-xs">
                            {/* CP Filter */}
                            <div className="su-flex-[calc(100%/3)_1_1]">
                                <label htmlFor="cp-filter" className="su-block su-text-18 su-font-bold su-leading-[2] su-mb-10">
                                    Content partners
                                </label>
                                <div className="undefined">
                                    <CPFilter facets={CPLabel} />
                                </div>
                            </div>
                            {/* CP Filter */}
                            <StatusFilter facets={statusLabel} />
                            <DateRangeFilter facets={dateLabel} />
                        </div>
                    </div>
                    {/* Total Results and Sort By Filter */}
                    <div className="su-flex su-flex-col sm:su-flex-row su-gap-y-xs su-justify-between su-mb-20">
                        <p className="su-leading-[2] su-mb-0">
                            {resultsSummary.currStart}-{resultsSummary.currEnd} of {resultsSummary.totalMatching} results
                        </p>
                        <div className="su-flex su-shrink-0 su-gap-xs su-items-center">
                            <SortByFilter />
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
                    <Pagination summary={resultsSummary} />
                </section>
            </div>
        )
    );
};
