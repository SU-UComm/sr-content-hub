import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Card} from '../Card/Card.jsx';
import {fetchFBData} from '../Helpers/requests.js';

export const ContentRegion = () => {
    const [isLoading, setIsLoading] = useState(false); // Loader flag
    const [data, setData] = useState([]); // data from endpoint
    const [results, setResults] = useState([]); // data from endpoint

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const d = await fetchFBData(
                    'https://dxp-us-stage-search.funnelback.squiz.cloud/s/search.json?profile=search&collection=sug~sp-stanford-university-content-hub&num_ranks=10&start_rank=1&sort=dmetamtxCreated&&query=!nullquery',
                );
                setData(d);
                setResults(d.response.resultPacket.results);
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
            <section>
                <div className="su-flex su-flex-col md:su-flex-row su-justify-between md:su-items-center su-mb-20 su-gap-xs">
                    <h2 className="su-text-h4 md:su-text-h3 su-font-serif su-mb-0">Latest content for review</h2>
                    <div>
                        <Link to="newcontent" className="su-flex su-items-center su-text-[18px] hover:su-underline">
                            View all New Content
                            <img className="su-inline su-ml-6" src={require('images/arrow-right.svg')} />
                        </Link>
                    </div>
                </div>

                <p className="su-leading-[2] su-mb-20">1-5 of 126 results waiting for review</p>

                <ul className="su-flex su-flex-col su-gap-y-xs su-list-none su-p-0 su-m-0" id="latest-content">
                    {results.slice(0, 5).map((contentItem, index) => (
                        <Card key={index} {...contentItem} />
                    ))}
                </ul>
            </section>
        )
    );
};
