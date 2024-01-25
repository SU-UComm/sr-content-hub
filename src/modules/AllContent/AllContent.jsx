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

export const AllContent = () => {
    const [isLoading, setIsLoading] = useState(false); // Loader flag
    const [data, setData] = useState([]); // data from endpoint
    const [userData, setUserData] = useState([]); // user data from endpoint
    const [CPLabel, setCPLabel] = useState([]);
    const [statusLabel, setStatusLabels] = useState([]);
    const [dateLabel, setDateLabels] = useState([]);
    const [resultsSummary, setResultsSummary] = useState([]);
    const [results, setResults] = useState([]); // data from endpoint
    const [searchQuery, setSearchQuery] = useState('');

    const fetchData = async () => {
        setIsLoading(true);
        // replace with getSearchData with blank query once CORS is resolved
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

    const createQuery = (name, value) => {
        let url = 'num_ranks=10&start_rank=1&sort=dmetamtxCreated&&query=!nullquery';
        let q = value ? value : '!nullquery';
        let status = 'f.hubStatus%7ChubStatus=';
        let sortBy = 'sort=';
        let date = 'date=';
        switch (name) {
            case 'status':
                status += value;
                break;
            case 'sortBy':
                sortBy += value;
                break;
            case 'date':
                date += value;
                break;
            default:
        }
    };

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let res = getSearchData('allContent', searchQuery);
        setData(res);
        console.log('Search bar data on submit:', res);
    };

    useEffect(() => {
        fetchData();
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
        console.log('ON CHANGE', value);

        createQuery(name, value);
    };

    return (
        !isLoading && (
            <div className="su-col-span-full xl:su-col-start-2 xl:su-col-span-10">
                <PageHeading headingText={window?.data?.texts?.allcontent?.headingText} subHeadingText={window?.data?.texts?.newcontent?.subHeadingText} homeButton={true} />
                <form id="all-content" className="su-flex su-justify-center su-items-center su-gap-xs su-mb-80" action="?" method="get" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="query"
                        id="search"
                        placeholder="Search Content from over 20 content partners"
                        className="su-w-full su-max-w-[540px] su-text-18 sm:su-text-22 md:su-text-25 su-bg-transparent su-leading-display su-px-20 su-pt-12 su-pb-18 su-text-gray-dark su-border-2 su-border-transparent su-border-b-2 su-border-b-gray focus:su-ring-0 focus:su-border-gray focus:su-shadow-none su-shadow-transparent focus:su-outline-none"
                        autoComplete="off"
                        value={searchQuery}
                        onChange={handleInputChange}
                        aria-label="content search"
                    />

                    <button className="su-bg-transparent su-p-0 su-border-none hover:su-bg-transparent hover:su-border-none" type="submit" aria-label="submit">
                        <span className="sr-only">Search</span>
                        <img className="su-bg-red su-p-7 su-rounded-full" src="https://sug-web.matrix.squiz.cloud/__data/assets/file/0023/31982/search.svg" alt="" />
                    </button>
                </form>
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
                            <StatusFilter facets={statusLabel} onSelectChange={onChange} />
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
