import React, {useState, useEffect} from 'react';

export const Pagination = (props) => {
    const [summaryData, setSummaryData] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Loader flag

    useEffect(() => {
        if (props.summary) {
            setSummaryData(props.summary);
            setIsLoading(false);
            console.log('SUMMARY', props.summary);
        } else {
            setIsLoading(true);
        }
    }, [props.summary]);

    const baseUrl = 'https://sug-web.matrix.squiz.cloud/content/all-content?start_rank=';

    const generateButton = (pageNumber, index) => (
        <li key={index} className={`su-border-r-0 su-mb-0 su-border su-text-16 su-font-semibold su-border-gray su-bg-white hover:su-bg-gray-light hover:su-cursor-pointer`}>
            <button
                href={`${baseUrl}${index * props.summary.numRanks + 1}`}
                data-rank={index * props.summary.numRanks + 1}
                className="pagination-button hover:su-bg-gray-light hover:su-text-black su-border-none su-flex su-items-center su-justify-center su-w-40 su-h-40 su-border-none"
            >
                {pageNumber}
            </button>
        </li>
    );

    return (
        !isLoading && (
            <nav aria-label="Pagination" className="su-flex su-justify-center">
                <ul className="su-flex su-p-0 su-m-0 su-list-none">
                    <li className="su-mb-0 su-rounded-l su-border su-border-r-0 su-border-gray su-bg-white hover:su-bg-gray-light">
                        <button
                            href="https://sug-web.matrix.squiz.cloud/_designs/paint-layouts/content-hub-related/listings/content-hub-all-content/tools/search-testing-2?site=4451&amp;start_rank=1"
                            data-rank="1"
                            className="pagination-button hover:su-bg-gray-light hover:su-text-black su-border-none su-flex su-items-center su-justify-center su-w-40 su-h-40"
                        >
                            <span className="sr-only">Previous</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" fill="none">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.5 5.58579L5.7929 10.8787C6.18342 11.2692 6.81659 11.2692 7.20711 10.8787L7.2929 10.7929C7.68342 10.4024 7.68342 9.7692 7.2929 9.37868L2 4.08579L0.5 5.58579Z"
                                    fill="#E50808"
                                ></path>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0.5 5.58579L2 7.08579L7.2929 1.79289C7.68342 1.40237 7.68342 0.769205 7.2929 0.37868L7.20711 0.292893C6.81659 -0.097631 6.18342 -0.0976305 5.7929 0.292893L0.5 5.58579Z"
                                    fill="#E50808"
                                ></path>
                            </svg>
                        </button>
                    </li>
                    {[1, 2, '...', 15, 16].map((pageNumber, index) => {
                        if (pageNumber === '...') {
                            return (
                                <li
                                    key={index}
                                    className="sep-2 sep su-mb-0 su-border su-border-r-0 su-text-16 su-font-semibold su-border-gray su-bg-white hover:su-bg-gray-light hover:su-cursor-pointer"
                                >
                                    <a href="#" className="js-inactive su-flex su-items-center su-justify-center su-w-40 su-h-40">
                                        ...
                                    </a>
                                </li>
                            );
                        }
                        return generateButton(pageNumber, index);
                    })}

                    <li className="su-mb-0 su-rounded-r su-border su-border-gray su-bg-white hover:su-bg-gray-light">
                        <button
                            href={`${baseUrl}11`}
                            data-rank="11"
                            className="pagination-button hover:su-bg-gray-light hover:su-text-black su-border-none su-flex su-items-center su-justify-center su-w-40 su-h-40"
                        >
                            <span className="sr-only">Next</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" fill="none">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.58594 5.5856L2.29304 0.292705C1.90251 -0.097819 1.26935 -0.0978181 0.878825 0.292706L0.793037 0.378493C0.402513 0.769018 0.402513 1.40218 0.793038 1.79271L6.08594 7.0856L7.58594 5.5856Z"
                                    fill="#E50808"
                                ></path>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.58594 5.5856L6.08594 4.0856L0.793038 9.37849C0.402513 9.76902 0.402513 10.4022 0.793038 10.7927L0.878826 10.8785C1.26935 11.269 1.90251 11.269 2.29304 10.8785L7.58594 5.5856Z"
                                    fill="#E50808"
                                ></path>
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        )
    );
};
