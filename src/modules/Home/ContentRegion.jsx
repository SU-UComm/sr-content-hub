import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Card} from '../Card/Card.jsx';

export const ContentRegion = () => {
    const [isLoading, setIsLoading] = useState(false); // Loader flag
    const [data, setData] = useState([]); // data from endpoint
    const [results, setResults] = useState([]); // data from endpoint

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
                // const req0Url = response['info']['url'];
                // const resp0Code = response['info']['http_code'];
                setData(res);
                // setFacetData(result.response.facets);
                console.log('main data', res);
                setIsLoading(false);

                console.log('RESULTS', res.response.resultPacket.results);
                setResults(res.response.resultPacket.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
        // setResults(data.response.resultPacket.results);
    }, []);

    const contentData = [
        {
            imageUrl: 'https://sug-web.matrix.squiz.cloud/_media/content-hub-images/placeholder-images/fallback-image.png',
            title: 'Assistive Feeding: How AI can improve the control of robot arms',
            description: 'Algorithms developed by Stanford researchers could one day help people with disabilities intuitively control robot arms to help with everyday tasks.',
            date: 'Submitted on January 16, 2024 | First published on October 28, 2020',
        },
        {
            imageUrl: 'https://sug-web.matrix.squiz.cloud/_media/content-hub-images/placeholder-images/fallback-image.png',
            title: 'Assistive Feeding: How AI can improve the control of robot arms',
            description: 'Algorithms developed by Stanford researchers could one day help people with disabilities intuitively control robot arms to help with everyday tasks.',
            date: 'Submitted on January 16, 2024 | First published on October 28, 2020',
        },
        {
            imageUrl: 'https://sug-web.matrix.squiz.cloud/_media/content-hub-images/placeholder-images/fallback-image.png',
            title: 'Assistive Feeding: How AI can improve the control of robot arms',
            description: 'Algorithms developed by Stanford researchers could one day help people with disabilities intuitively control robot arms to help with everyday tasks.',
            date: 'Submitted on January 16, 2024 | First published on October 28, 2020',
        },
    ];

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
                    {results.map((contentItem, index) => (
                        <Card key={index} {...contentItem} />
                    ))}
                </ul>
            </section>
        )
    );
};
