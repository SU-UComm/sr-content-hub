import React, {useState, useEffect} from 'react';
import {Oval} from 'react-loader-spinner';
import {PropTypes} from 'prop-types';

export const Pagination = (props) => {
    const [isLoading, setIsLoading] = useState(false); // Loader flag
    const [pagesData, setPagesData] = useState([]);

    useEffect(() => {
        if (props.summary) {
            setIsLoading(false);
            getPages(props.summary);
        } else {
            setIsLoading(true);
        }
    }, [props.summary]);

    /**
     * @function onButtonClick
     * @description - Function to handle onClick for pagination
     *
     * @param {Object} e - event object from onClick event
     */
    const onButtonClick = (e) => {
        props.onChange('pagination', e.target.value);
    };

    /**
     * @function addPage
     * @description - Function to push to the output array for pagination
     */
    const addPage = (pagesOutput, itemRank, label, isActive, isLast) => {
        return pagesOutput.push({itemRank, label, isActive, isLast});
    };

    /**
     * @function getPages
     * @description - Function to push to the output array for pagination
     *
     * @param {Object} summary - Results summary object from data fetched earlier
     */
    const getPages = (summary) => {
        let pagesOutput = [];

        // Calculate basic information
        const perPage = summary.numRanks;
        const currentPage = Math.floor(summary.currStart / perPage) + 1;

        // Get number of pages
        let numberOfPages = Math.floor(summary.totalMatching / perPage);

        // Check if there are some additional results to print
        if (summary.totalMatching % perPage > 0) {
            numberOfPages = numberOfPages + 1;
        }

        // Define variable for which whole pagination will be generated
        const printAllFor = 6;
        // ========= And print pagination for it =========
        if (numberOfPages < printAllFor) {
            let pageToPrint = 1;
            while (pageToPrint <= numberOfPages) {
                const thisPageStart = (pageToPrint - 1) * perPage + 1;
                const isLast = pageToPrint === numberOfPages ? true : false;
                addPage(pagesOutput, thisPageStart, pageToPrint, currentPage === pageToPrint, isLast);
                pageToPrint = pageToPrint + 1;
            }
            setPagesData(pagesOutput);
            return;
        }

        // ========= If there's more pages :: Generate more complex pagination =========
        // For Page 3: Show 1st page as well
        if (currentPage > 1 && currentPage < 3) {
            addPage(pagesOutput, '1', '1', false, false);
        }

        // For 4+ pages show 1+2
        if (currentPage > 2) {
            addPage(pagesOutput, '1', '1', false, false);
            addPage(pagesOutput, perPage + 1, '2', false, false);

            if (currentPage > 3) {
                addPage(pagesOutput, '', '...', false, false);
            }
        }
        // If we're on N Page :: we need to print previous page
        if (currentPage === numberOfPages) {
            let pageToPrint = numberOfPages - 1;
            let pageToPrintStart = (pageToPrint - 1) * perPage + 1;

            addPage(pagesOutput, pageToPrintStart, pageToPrint, false, false);
        }

        // Add Current Page
        let currentPageIsLast = currentPage === numberOfPages ? true : false;

        addPage(pagesOutput, summary.currStart, currentPage, true, currentPageIsLast);

        // Add Next Page :: if it exists
        if (currentPage + 1 < numberOfPages - 1) {
            addPage(pagesOutput, summary.nextStart, currentPage + 1, false, false);
        }

        // Add Last two pages :: If they are not printed yet
        if (currentPage <= numberOfPages - 2) {
            if (currentPage <= numberOfPages - 4) {
                addPage(pagesOutput, '', '...', false, false);
            }
            let pageToPrint = numberOfPages - 1;
            let pageToPrintStart = (pageToPrint - 1) * perPage + 1;

            addPage(pagesOutput, pageToPrintStart, pageToPrint, false, false);

            pageToPrint = numberOfPages;
            pageToPrintStart = (pageToPrint - 1) * perPage + 1;

            addPage(pagesOutput, pageToPrintStart, pageToPrint, false, false);
        }

        // If we're on the N-1 :: Show N Page
        if (currentPage === numberOfPages - 1) {
            let pageToPrint = numberOfPages;
            let pageToPrintStart = (pageToPrint - 1) * perPage + 1;

            addPage(pagesOutput, pageToPrintStart, pageToPrint, false, false);
        }

        // Return output
        setPagesData(pagesOutput);
    };

    return props.summary.numRanks > props.summary.totalMatching ? null : isLoading ? (
        <Oval visible={true} height="80" width="80" color="#B1040E" secondaryColor="gray" ariaLabel="oval-loading" />
    ) : (
        <nav aria-label="Pagination" className="su-flex su-justify-center">
            <ul className="su-flex su-p-0 su-m-0 su-list-none">
                {props.summary.prevStart !== null && (
                    <li className="su-mb-0 su-rounded-l su-border su-border-r-0 su-border-gray su-bg-white hover:su-bg-gray-light">
                        {/* Prev button */}
                        <button
                            onClick={(e) => onButtonClick(e)}
                            data-rank={props.summary.prevStart}
                            value={props.summary.prevStart}
                            aria-label="Previous"
                            className="pagination-button hover:su-bg-gray-light hover:su-text-black su-border-none su-flex su-items-center su-justify-center su-w-40 su-h-40"
                        >
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
                )}
                {/* Page numbers for pagination */}
                {pagesData &&
                    pagesData.map((item, index) => {
                        if (item.label === '...') {
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
                        } else {
                            return (
                                <li
                                    key={index}
                                    className={`${
                                        item.isActive ? 'pagination-active' : ''
                                    } su-mb-0 su-border su-text-16 su-font-semibold su-border-gray su-bg-white hover:su-bg-gray-light hover:su-cursor-pointer`}
                                >
                                    <button
                                        value={item.itemRank}
                                        onClick={(e) => onButtonClick(e)}
                                        data-rank={item.itemRank}
                                        className="pagination-button hover:su-bg-gray-light hover:su-text-black su-flex su-items-center su-justify-center su-w-40 su-h-40 su-border-none"
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            );
                        }
                    })}

                {props.summary.nextStart !== null && (
                    <li className="su-mb-0 su-rounded-r su-border su-border-gray su-bg-white hover:su-bg-gray-light">
                        {/* Next button */}
                        <button
                            onClick={(e) => onButtonClick(e)}
                            data-rank={props.summary.nextStart}
                            value={props.summary.nextStart}
                            aria-label="Next"
                            className="pagination-button hover:su-bg-gray-light hover:su-text-black su-border-none su-flex su-items-center su-justify-center su-w-40 su-h-40"
                        >
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
                )}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    data: PropTypes.array,
    summary: PropTypes.array,
    onChange: PropTypes.func,
};
