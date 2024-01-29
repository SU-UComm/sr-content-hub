import React, {useState, useEffect} from 'react';

export const Pagination = (props) => {
    const [summaryData, setSummaryData] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Loader flag

    useEffect(() => {
        if (props.summary) {
            setSummaryData(props.summary);
            setIsLoading(false);
            console.log('DATA @ PAGINATION:', props.data);
            console.log('SUMMARY', props.summary);
        } else {
            setIsLoading(true);
        }

        // Calculate basic information
        //         const perPage = json.numRanks;
        //         const currentPage = Math.floor(json.currentStart / perPage) + 1;

        //         // Get number of pages
        //         let numberOfPages = Math.floor(json.total / perPage);

        //         // Check if there are some additional results to print
        //         if (json.total % perPage > 0) {
        //             numberOfPages = numberOfPages + 1;
        //         }
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

    return props.summary.numRanks > props.summary.total
        ? null
        : !isLoading && (
              <nav aria-label="Pagination" className="su-flex su-justify-center">
                  <ul className="su-flex su-p-0 su-m-0 su-list-none">
                      {props.summary.prevStart && (
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
                      )}
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
                      {props.summary.nextStart && (
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
                      )}
                  </ul>
              </nav>
          );
};

//         // Check if pagination is required
//         if (json.numRanks > json.total) {
//             return '';
//         }

//         // Get URL that should be used for pagination (with other query parameters)
//         const cfgUrl = json.url || '';
//         let paginationUrl = contentHubGlobals.getPagination.getMainUrl(cfgUrl);

//         // Check if currentURL includes ?
//         if (paginationUrl.indexOf('?') > -1) {
//             paginationUrl = paginationUrl + '&';
//         } else {
//             paginationUrl = paginationUrl + '?';
//         }

//         // Open pagination wrappers
//         paginationOutput.push(`
//         <!-- Pagination -->
//         <nav aria-label="Pagination" class="su-flex su-justify-center">
//             <ul class="su-flex su-p-0 su-m-0 su-list-none">`);

//         // Get Prev Link
//         paginationOutput.push(contentHubGlobals.getPagination.getPrev(paginationUrl, json.prevStart));

//         // Get pages
//         paginationOutput.push(contentHubGlobals.getPagination.getPages(paginationUrl, json));

//         // Get Next link
//         paginationOutput.push(contentHubGlobals.getPagination.getNext(paginationUrl, json.nextStart));

//         //  Close pagination wrappers
//         paginationOutput.push(`
//             </ul>
//         </nav>
//         <!-- Pagination End -->`);

//         return paginationOutput.join('\n');
//     },
//     getPrev: (mainUrl, prevStart) => {
//         if (prevStart === null) {
//             return '';
//         }
//         return `
//         <li class="su-mb-0 su-rounded-l su-border su-border-r-0 su-border-gray su-bg-white hover:su-bg-gray-light">
//             <button href="${mainUrl}start_rank=${prevStart}" data-rank=${prevStart} class="pagination-button hover:su-bg-gray-light hover:su-text-black su-border-none su-flex su-items-center su-justify-center su-w-40 su-h-40">
//                 <span class="sr-only">Previous</span>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" fill="none">
//                     <path
//                         fill-rule="evenodd"
//                         clip-rule="evenodd"
//                         d="M0.5 5.58579L5.7929 10.8787C6.18342 11.2692 6.81659 11.2692 7.20711 10.8787L7.2929 10.7929C7.68342 10.4024 7.68342 9.7692 7.2929 9.37868L2 4.08579L0.5 5.58579Z"
//                         fill="#E50808"
//                     />
//                     <path
//                         fill-rule="evenodd"
//                         clip-rule="evenodd"
//                         d="M0.5 5.58579L2 7.08579L7.2929 1.79289C7.68342 1.40237 7.68342 0.769205 7.2929 0.37868L7.20711 0.292893C6.81659 -0.097631 6.18342 -0.0976305 5.7929 0.292893L0.5 5.58579Z"
//                         fill="#E50808"
//                     />
//                 </svg>
//             </button>
//         </li>`;
//     },
//     getNext: (mainUrl, nextStart) => {
//         if (nextStart === null) {
//             return '';
//         }
//         return `
//         <li class="su-mb-0 su-rounded-r su-border su-border-gray su-bg-white hover:su-bg-gray-light">
//             <button href="${mainUrl}start_rank=${nextStart}" data-rank=${nextStart} class="pagination-button hover:su-bg-gray-light hover:su-text-black su-border-none su-flex su-items-center su-justify-center su-w-40 su-h-40">
//                 <span class="sr-only">Next</span>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" fill="none">
//                     <path
//                         fill-rule="evenodd"
//                         clip-rule="evenodd"
//                         d="M7.58594 5.5856L2.29304 0.292705C1.90251 -0.097819 1.26935 -0.0978181 0.878825 0.292706L0.793037 0.378493C0.402513 0.769018 0.402513 1.40218 0.793038 1.79271L6.08594 7.0856L7.58594 5.5856Z"
//                         fill="#E50808"
//                     />
//                     <path
//                         fill-rule="evenodd"
//                         clip-rule="evenodd"
//                         d="M7.58594 5.5856L6.08594 4.0856L0.793038 9.37849C0.402513 9.76902 0.402513 10.4022 0.793038 10.7927L0.878826 10.8785C1.26935 11.269 1.90251 11.269 2.29304 10.8785L7.58594 5.5856Z"
//                         fill="#E50808"
//                     />
//                 </svg>
//             </button>
//         </li>`;
//     },
//     getPages: (paginationUrl, json) => {
//         const pagesOutput = [];
//         const pUrl = paginationUrl;

//         // Calculate basic information
//         const perPage = json.numRanks;
//         const currentPage = Math.floor(json.currentStart / perPage) + 1;

//         // Get number of pages
//         let numberOfPages = Math.floor(json.total / perPage);

//         // Check if there are some additional results to print
//         if (json.total % perPage > 0) {
//             numberOfPages = numberOfPages + 1;
//         }

//         // Define variable for which whole pagination will be generated
//         const printAllFor = 6;
//         // ========= And print pagination for it =========
//         if (numberOfPages <= printAllFor) {
//             let pageToPrint = 1;
//             while (pageToPrint <= numberOfPages) {
//                 const thisPageStart = (pageToPrint - 1) * perPage + 1;
//                 const isLast = pageToPrint === numberOfPages ? true : false;
//                 if (pageToPrint === currentPage) {
//                     pagesOutput.push(contentHubGlobals.getPagination.getSingleItem(pUrl, thisPageStart, pageToPrint, 'pagination-active', isLast));
//                 } else {
//                     pagesOutput.push(contentHubGlobals.getPagination.getSingleItem(pUrl, thisPageStart, pageToPrint, ''));
//                 }
//                 pageToPrint = pageToPrint + 1;
//             }
//             return pagesOutput.join('\n');
//         }

//         // ========= If there's more pages :: Generate more complex pagination =========
//         // For Page 3: Show 1st page as well
//         if (currentPage > 1 && currentPage < 3) {
//             pagesOutput.push(contentHubGlobals.getPagination.getSingleItem(pUrl, '1', '1', ''));
//         }

//         // For 4+ pages show 1+2
//         if (currentPage > 2) {
//             pagesOutput.push(contentHubGlobals.getPagination.getSingleItem(pUrl, '1', '1', ''));
//             pagesOutput.push(contentHubGlobals.getPagination.getSingleItem(pUrl, perPage + 1, '2', ''));
//             if (currentPage > 3) {
//                 pagesOutput.push(contentHubGlobals.getPagination.getSeparator('sep-1'));
//             }
//         }

//         // If we're on N Page :: we need to print previous page
//         if (currentPage === numberOfPages) {
//             pageToPrint = numberOfPages - 1;
//             pageToPrintStart = (pageToPrint - 1) * perPage + 1;
//             pagesOutput.push(contentHubGlobals.getPagination.getSingleItem(pUrl, pageToPrintStart, pageToPrint, ''));
//         }

//         // Add Current Page
//         let currentPageIsLast = currentPage === numberOfPages ? true : false;
//         pagesOutput.push(contentHubGlobals.getPagination.getSingleItem(pUrl, json.currentStart, currentPage, 'pagination-active', currentPageIsLast));

//         // Add Next Page :: if it exists
//         if (currentPage + 1 < numberOfPages - 1) {
//             pagesOutput.push(contentHubGlobals.getPagination.getSingleItem(pUrl, json.nextStart, currentPage + 1, ''));
//         }

//         // Add Last two pages :: If they are not printed yet
//         if (currentPage <= numberOfPages - 2) {
//             if (currentPage <= numberOfPages - 4) {
//                 pagesOutput.push(contentHubGlobals.getPagination.getSeparator('sep-2'));
//             }
//             let pageToPrint = numberOfPages - 1;
//             let pageToPrintStart = (pageToPrint - 1) * perPage + 1;
//             pagesOutput.push(contentHubGlobals.getPagination.getSingleItem(pUrl, pageToPrintStart, pageToPrint, ''));
//             pageToPrint = numberOfPages;
//             pageToPrintStart = (pageToPrint - 1) * perPage + 1;
//             pagesOutput.push(contentHubGlobals.getPagination.getSingleItem(pUrl, pageToPrintStart, pageToPrint, ''));
//         }

//         // If we're on the N-1 :: Show N Page
//         if (currentPage === numberOfPages - 1) {
//             let pageToPrint = numberOfPages;
//             pageToPrintStart = (pageToPrint - 1) * perPage + 1;
//             pagesOutput.push(contentHubGlobals.getPagination.getSingleItem(pUrl, pageToPrintStart, pageToPrint, '', false));
//         }

//         // Return output
//         return pagesOutput.join('\n');
//     },
//     getSingleItem: (mainUrl, itemRank, label, className, isLast) => {
//         className = className ? className : '';
//         isLast = isLast ? isLast : false;
//         if (isLast === false) {
//             className += ' su-border-r-0';
//         }

//         return `
//         <li class="${className} su-mb-0 su-border su-text-16 su-font-semibold su-border-gray su-bg-white hover:su-bg-gray-light hover:su-cursor-pointer">
//             <button href="${mainUrl}start_rank=${itemRank}" data-rank=${itemRank} class="pagination-button hover:su-bg-gray-light hover:su-text-black su-border-none su-flex su-items-center su-justify-center su-w-40 su-h-40 su-border-none">
//                 ${label}
//             </button>
//         </li>
//         `;
//     },
//     getSeparator: (sepEl) => {
//         return `
//         <li class="${sepEl} sep su-mb-0 su-border su-border-r-0 su-text-16 su-font-semibold su-border-gray su-bg-white hover:su-bg-gray-light hover:su-cursor-pointer">
//             <a href="#" class="js-inactive su-flex su-items-center su-justify-center su-w-40 su-h-40">
//                 ...
//             </a>
//         </li>`;
//     },
//     getQueryStringParams: (query) => {
//         query = query.replace('?', '');

//         queryArr = query.split('&');
//         const queryParams = [];

//         queryArr.forEach((thisParam) => {
//             let thisParamArr = thisParam.split('=');
//             if (thisParamArr.length === 2) {
//                 queryParams.push({name: thisParamArr[0], value: thisParamArr[1]});
//             }
//         });

//         return queryParams;
//     },
//     getMainUrl: (url) => {
//         // Get URL without start_rank
//         const urlArr = url.split('?');
//         const mainUrl = urlArr[0];
//         const queryString = urlArr[1] || '';

//         const queryParams = contentHubGlobals.getPagination.getQueryStringParams(queryString);

//         const newQueryArr = [];
//         // Loop through query parameters to remove start_rank
//         for (let i in queryParams) {
//             if (queryParams[i].name === 'start_rank') {
//                 continue;
//             }
//             newQueryArr.push(`${queryParams[i].name}=${queryParams[i].value}`);
//         }
//         const newQuery = newQueryArr.join('&');

//         if (newQuery.length === 0) {
//             return mainUrl;
//         }

//         let outputUrl = `${mainUrl}?${newQuery}`;
//         return outputUrl;
//     },
// };
