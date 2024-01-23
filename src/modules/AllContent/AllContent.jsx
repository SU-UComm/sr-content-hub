import React, {useState, useEffect} from 'react';
import {PageHeading} from '../Home/Heading.jsx';
import {StatusFilter} from '../Filters/StatusFilter.jsx';
import {DateRangeFilter} from '../Filters/DateFilter.jsx';
import {CPFilter} from '../Filters/CPFilter.jsx';

export const AllContent = () => {
    const [isLoading, setIsLoading] = useState(false); // Loader flag
    const [data, setData] = useState([]); // data from endpoint
    const [results, setResults] = useState([]); // data from endpoint
    const [statusLabel, setStatusLabels] = useState([]); // data from endpoint

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://dxp-us-stage-search.funnelback.squiz.cloud/s/search.json?profile=search&collection=sug~sp-stanford-university-content-hub&num_ranks=10&start_rank=1&sort=dmetamtxCreated&&query=!nullquery',
                );
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const res = await response.json();
                setData(res);
                setStatusLabels(res.response.facets[1].allValues);
                console.log('FACETS SET', statusLabel);
                setIsLoading(false);

                console.log('main data', res);
                setResults(res.response.resultPacket.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
        // setResults(data.response.resultPacket.results);
    }, []);

    return (
        !isLoading && (
            <div className="su-col-span-full xl:su-col-start-2 xl:su-col-span-10">
                <PageHeading headingText={window?.data?.texts?.allcontent?.headingText} subHeadingText={window?.data?.texts?.newcontent?.subHeadingText} />
                <section>
                    <div className="su-mb-20">
                        <div className="su-flex su-flex-col lg:su-flex-row su-gap-xs">
                            {/* CP Filter */}
                            <div className="su-flex-[calc(100%/3)_1_1]">
                                <label htmlFor="cp-filter" className="su-block su-text-18 su-font-bold su-leading-[2] su-mb-10">
                                    Content partners
                                </label>

                                <div className="undefined">
                                    <CPFilter />
                                </div>
                            </div>

                            <StatusFilter facets={statusLabel} />
                            <DateRangeFilter />
                        </div>
                        {/* <!-- No Selected Filters --> */}
                    </div>
                </section>
            </div>
        )
    );
};
