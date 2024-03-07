import {getFromStorage, setToStorage} from 'helpers/localStorageHelpers';

/**
 * Load appState data from local storage
 * @param {string} key optional: key value
 * @returns {object} appState data from local storage
 */
export const loadAppState = (key) => {
    return getFromStorage('reactStarterAppState', key);
};

/**
 * Save appState data to local storage
 * @param {string} key optional: key value to set
 * @param {any} value value to set - if not provided will set to entire appState
 * @returns {object} entire appState data object
 */
export const saveAppState = (key, value) => {
    return setToStorage('reactStarterAppState', key, value);
};

// const showAllContent = {
//     init: (respCode, respBody, cfg) => {
//         // Validate input details
//         if (respCode !== 200) {
//             return showAllContent.err('Invalid response from source.');
//         }
//         respBody = helpers.isJson(respBody);
//         if (respBody === false) {
//             return showAllContent.err('Non-JSON response from source.');
//         }
//         cfg = helpers.isJson(cfg);
//         if (cfg === false) {
//             return showAllContent.err('Non-JSON configuration object provided');
//         }

//         // If input is valid :: Start generating the output
//         return showAllContent.generateOutput(respBody, cfg);
//     },
//     err: (msg) => {
//         return `<!-- Latest Content Error: ${msg} -->`;
//     },
//     reformatJson: (respBody) => {
//         // Reformat Response JSON from FB to what we need to display

//         if (!respBody.response.resultPacket) {
//             return false;
//         }
//         // Check if response includes results
//         if (typeof respBody.response === 'undefined') {
//             return false;
//         }
//         if (typeof respBody.response.resultPacket === 'undefined') {
//             return false;
//         }
//         if (typeof respBody.response.resultPacket.results === 'undefined') {
//             return false;
//         }

//         // Define output object
//         let output = {
//             firstItem: 0,
//             lastItem: 0,
//             total: 0,
//             prevStart: 0,
//             nextStart: 0,
//             numRanks: 0,
//             items: [],
//             facets: [],
//         };

//         // Add Facets to the output:
//         output.facets = respBody.response.facets || [];

//         // Check if there are any results present
//         if (respBody.response.resultPacket.results.length === 0) {
//             return output;
//         }

//         const resultPacket = respBody.response.resultPacket;
//         // Update general information
//         output.total = resultPacket.resultsSummary.fullyMatching || 0;
//         output.firstItem = resultPacket.resultsSummary.currStart || 1;
//         output.lastItem = resultPacket.resultsSummary.currEnd || 10;
//         output.prevStart = resultPacket.resultsSummary.prevStart || null;
//         output.nextStart = resultPacket.resultsSummary.nextStart || null;
//         output.numRanks = resultPacket.resultsSummary.numRanks || 10;
//         output.dateCounts = resultPacket.dateCounts || null;

//         // Get items
//         const results = resultPacket.results || [];
//         results.forEach((thisResult) => {
//             let hItem = {
//                 id: showAllContent.getValueFromArray(thisResult.listMetadata.assetId),
//                 title: thisResult.title,
//                 url: showAllContent.getValueFromArray(thisResult.listMetadata.canonicalUrl),
//                 img: showAllContent.getValueFromArray(thisResult.listMetadata.relatedImageURL),
//                 eyebrow: showAllContent.getValueFromArray(thisResult.listMetadata.taxonomyContentPartnerText),
//                 summary: showAllContent.getValueFromArray(thisResult.listMetadata.descriptionPlain),
//                 srcPubDate: showAllContent.getValueFromArray(thisResult.listMetadata.srcPublishedDate),
//                 mtxCreated: showAllContent.getValueFromArray(thisResult.listMetadata.mtxCreated),
//                 status: showAllContent.getValueFromArray(thisResult.listMetadata.hubStatus),
//                 statusDescription: showAllContent.getValueFromArray(thisResult.listMetadata.hubStatusDescription),
//             };

//             // If related image field is empty :: Try to use source/external link if possible
//             if (hItem.img === '') {
//                 hItem.img = showAllContent.getValueFromArray(thisResult.listMetadata.srcFeaturedImageUrl);
//             }

//             // If Source Published Date is empty for some reasons :: Try to use Published date field
//             if (hItem.srcPubDate === '') {
//                 hItem.srcPubDate = showAllContent.getValueFromArray(thisResult.listMetadata.publishedDate);
//             }

//             // Reformat Published date to correct format
//             hItem.srcPubDate = showAllContent.reformatDate(hItem.srcPubDate);
//             hItem.mtxCreated = showAllContent.reformatDate(hItem.mtxCreated);

//             // Push item to output
//             output.items.push(hItem);
//         });

//         return output;
//     },
//     getValueFromArray: (el) => {
//         // Check if this is an array
//         if (el === undefined) {
//             return '';
//         }
//         if (Array.isArray(el) === false) {
//             return '';
//         }
//         // And if there are any elements in the array
//         if (el.length === 0) {
//             return '';
//         }
//         // And return first value
//         return el[0];
//     },
//     reformatDate: (ts) => {
//         // Validate date
//         if (ts === undefined) {
//             return '';
//         }

//         ts = parseInt(ts, 10);
//         if (isNaN(ts) === true) {
//             return '';
//         }

//         // Multiply date by 1000 to convert PHP vs JS date format (between seconds and miliseconds)
//         ts = ts * 1000;

//         const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//         const tsDate = new Date(ts);
//         // Format: "April 30, 2023"
//         const month = monthNames[tsDate.getMonth()];
//         const day = tsDate.getDate();
//         const year = tsDate.getFullYear();

//         // If provided year is not accurate :: means invalid date or no date was provided :: return placeholder
//         if (year === 1970) {
//             return 'N/A';
//         }

//         return `${month} ${day}, ${year}`;
//     },
//     generateOutput: (respBody, cfg) => {
//         // Start with reformatting response to the format we need to show the output
//         const processedJson = showAllContent.reformatJson(respBody);
//         // Get type of user that is accessing the page

//         // Check if after formatting there are any results present

//         if (processedJson === false) {
//             const err = 'No result object in the response.';
//             const outputHtml = showAllContent.generateNoResults(err);
//             return outputHtml;
//         }

//         // Create output object
//         let outputHtml = [];

//         // Push wrappers
//         outputHtml.push(`<section data-type="${cfg.userType}">`);
//         // Get Content Partner Filters
//         outputHtml.push(showAllContent.renderFiltersArea(processedJson, cfg));

//         // Check if there are items to show :: if not : Show no results
//         if (processedJson.items.length === 0) {
//             // Add No Results Screen
//             outputHtml.push(showAllContent.noResults());
//         } else {
//             // Get Top Results area with Sorting filters
//             outputHtml.push(showAllContent.getResultsTop(processedJson, cfg));
//             // Get Items List
//             outputHtml.push(showAllContent.getItems(processedJson, cfg));
//             // Get Pagination
//             outputHtml.push(showAllContent.getPagination(processedJson, cfg));
//         }

//         outputHtml.push(`</section>`);

//         return outputHtml.join('\n');
//     },
//     renderFiltersArea: (processedJson, cfg) => {
//         // Get User Type
//         const userType = cfg.userType;

//         let filtersOutput = [];
//         // Add top wrapper
//         filtersOutput.push(`<!-- Filters Area -->`);
//         filtersOutput.push(`<div class="su-mb-20">
//             <div class="su-flex su-flex-col lg:su-flex-row su-gap-xs">`);

//         // Add Content Partners filter
//         filtersOutput.push(showAllContent.getCpFilters(processedJson, cfg));

//         // Add Status filter :: Show only for UCOMM users
//         if (userType === 'UCOMM') {
//             filtersOutput.push(showAllContent.getStatusFilters(processedJson, cfg));
//         }

//         // Add Date Range filter
//         filtersOutput.push(showAllContent.getDateRangeFilters(processedJson, cfg));

//         filtersOutput.push(`</div> <!-- /.su-flex su-flex-col -->`);

//         // Add Selected Filters Area
//         filtersOutput.push(showAllContent.getSelectedFilters(processedJson, cfg));

//         filtersOutput.push(`</div> <!-- /.su-mb-20 -->`);

//         return filtersOutput.join('\n');
//     },
//     getCpFilters: (processedJson, cfg) => {
//         // Define wrapper class
//         const wrapperClass = cfg.userType === 'UCOMM' ? 'su-flex-[calc(100%/3)_1_1]' : 'su-w-full md:su-w-1/2';
//         // Get output for the filter
//         const cpFiltersOutput = contentHubGlobals.getCpFilter.init(processedJson.facets, cfg);

//         return `
//         <!-- CP Filters Area -->
//         <div class="${wrapperClass}">
//             <label for="cp-filter" class="su-block su-text-18 su-font-bold su-leading-[2] su-mb-10">${cfg.cpFilterLabel}</label>
//             ${cpFiltersOutput}
//         </div>`;
//     },
//     getStatusFilters: (processedJson, cfg) => {
//         const statusFilterOutput = contentHubGlobals.getStatusesFilter.init(processedJson.facets, cfg, '');
//         return `
//         <!-- Status Filter -->
//         <div class="su-flex-[calc(100%/3)_1_1]">
//             ${statusFilterOutput}
//         </div>`;
//     },
//     getDateRangeFilters: (processedJson, cfg) => {
//         const wrapperClass = cfg.userType === 'UCOMM' ? 'su-flex-[calc(100%/3)_1_1]' : 'su-w-full md:su-w-1/2';
//         const dateRangeFilterOutput = contentHubGlobals.getDateRangeFilter.init(processedJson.facets, cfg);

//         return `
//         <!-- Date Range Filter -->
//         <div class="${wrapperClass}">
//             ${dateRangeFilterOutput}
//         </div>`;
//     },
//     getSelectedFilters: (processedJson, cfg) => {
//         // Generate Selected Filters
//         const selectedContentPartners = contentHubGlobals.getSelectedFilters.init(processedJson.facets, cfg, processedJson);
//         // And return output
//         return selectedContentPartners;
//     },
//     getResultsTop: (processedJson, cfg) => {
//         // Generate SortBy filters
//         const sortByFilters = contentHubGlobals.getSortByFilter.init(cfg);

//         return `
//         <!-- Top Results Area -->
//         <div class="su-flex su-flex-col sm:su-flex-row su-gap-y-xs su-justify-between su-mb-20">
//             <p class="su-leading-[2] su-mb-0">${processedJson.firstItem}-${processedJson.lastItem} of ${processedJson.total} ${cfg.resultsSuffixText}</p>
//             <div class="su-flex su-shrink-0 su-gap-xs su-items-center">
//                 ${sortByFilters}
//             </div>
//         </div>`;
//     },
//     getItems: (processedJson, cfg) => {
//         // Get items list from the source
//         const itemsList = processedJson.items || [];
//         let itemsOutput = [];

//         itemsOutput.push(`<!-- Items Listing -->`);
//         itemsOutput.push(`<ul class="searchResults__items su-flex su-flex-col su-gap-y-xs su-list-none su-p-0 su-m-0 su-mb-60">`);

//         itemsList.forEach((thisItem) => {
//             itemsOutput.push(showAllContent.getSingleItem(thisItem, cfg));
//         });

//         itemsOutput.push(`</ul>`);

//         return itemsOutput.join('\n');
//     },
//     getSingleItem: (item, cfg) => {
//         // print(JSON.stringify(cfg.queryString))

//         // Item Image
//         item.img = item.img || '';
//         const itemImage = item.img.length > 0 ? item.img : cfg.itemDefaultImg;
//         const imageAlt = item.img.length > 0 ? `${item.title} image` : '';

//         // Generate list of actions :: Based on status and user type
//         const esiEndpoint = cfg.actionsEsi;
//         const userType = cfg.userType;
//         // Get buttons to be used
//         const buttonsList = showAllContent.generateActions(esiEndpoint, item.id, userType);

//         // Generate View Story link
//         const itemLink = `${cfg.storyViewerUrl}?id=${item.id}`;

//         return `
//         <li class="su-flex su-flex-col su-mb-0 md:su-flex-row su-rounded su-shadow-md su-bg-white su-border su-border-gray su-border-b-2 su-overflow-hidden su-min-h-[334px]" data-id="${item.id}">
//             <a href="${itemLink}" class="su-w-full md:su-min-w-[160px] md:su-max-w-[160px] lg:su-min-w-[375px] lg:su-max-w-[375px]">
//                 <img class="su-align-top su-w-full su-aspect-[3/2] md:su-aspect-[unset] md:su-h-full lg:su-aspect-[8/6] su-object-cover su-object-center" src="${itemImage}" alt="${imageAlt}" />
//             </a>
//             <div class="su-p-15 su-pb-20 sm:su-p-30 sm:su-pb-40 su-flex su-flex-col su-gap-[15px] sm:su-gap-[20px]">
//                 <p class="su-text-16 su-mb-0 su-leading-none su-text-red-darker">${item.eyebrow}</p>
//                 <h2 class="su-mb-0 su-line-clamp-2 sm:su-line-clamp-2">
//                     <a href="${itemLink}" title="View ${item.title}" class="su-block su-text-h4 su-leading-[34px] su-font-bold su-mb-0 su-line-clamp-2 sm:su-line-clamp-2 hover:su-underline">${item.title}</a>
//                 </h2>
//                 <p class="su-mb-0 su-line-clamp-5 sm:su-line-clamp-3 su-leading-[1.3em]">${item.summary}</p>
//                 <p class="su-text-16 su-text-gray-dark su-mb-0 su-leading-[1.45em]  su-mt-auto">Submitted on ${item.mtxCreated} | First published on ${item.srcPubDate}</p>
//                 <div class="su-flex su-flex-col sm:su-flex-row su-gap-[10px] su-h-[40px]">
//                     ${buttonsList}
//                 </div>
//             </div>
//         </li>`;
//     },
//     generateActions: (esiEndpoint, id, userType) => {
//         // Use ESI to generate output :: So here, just print the ESI Tag
//         // ESI is used to make sure the Action buttons are always up to date
//         // And there's no delay on Funnelback side to show it

//         // Check if we can generate the output actions and badges
//         if (typeof esiEndpoint !== 'string') {
//             return '';
//         }
//         if (esiEndpoint.length === 0) {
//             return '';
//         }
//         if (typeof id === 'undefined') {
//             return '';
//         }

//         // If user type is not provided correctly :: Default to Content Partner
//         if (typeof userType !== 'string') {
//             userType = 'CP';
//         }

//         // Return Actions for UCOMM Users only
//         if (userType !== 'UCOMM') {
//             return '';
//         }

//         // If we have all the information, return ESI Include
//         const esiUrl = `${esiEndpoint}?id=${id}&u=${userType}`;
//         const outputEsi = `<esi:include src="${esiUrl}" />`;

//         return outputEsi;
//     },
//     getPagination: (processedJson, cfg) => {
//         const url = `${cfg.url}?${cfg.queryString}`;

//         let paginationDetails = {
//             numRanks: processedJson.numRanks,
//             total: processedJson.total,
//             prevStart: processedJson.prevStart,
//             nextStart: processedJson.nextStart,
//             currentStart: processedJson.firstItem,
//             currentEnd: processedJson.lastItem,
//             url: url,
//         };

//         if (typeof contentHubGlobals === 'undefined') {
//             return '<!-- ERR: Pagination Generator is missing';
//         }
//         if (typeof contentHubGlobals.getPagination === 'undefined') {
//             return '<!-- ERR: Pagination Generator is missing';
//         }
//         if (typeof contentHubGlobals.getPagination.init === 'undefined') {
//             return '<!-- ERR: Pagination Generator is missing';
//         }

//         return contentHubGlobals.getPagination.init(paginationDetails);
//     },
//     generateNoResults: (err) => {
//         // Create output object
//         let outputHtml = [];

//         // Push wrappers
//         outputHtml.push(showAllContent.err(err));

//         outputHtml.push(`<section>`);

//         outputHtml.push(showAllContent.noResults());

//         outputHtml.push(`</section>`);

//         return outputHtml.join('\n');
//     },
//     noResults: () => {
//         // Validate if no results screen is available in global object
//         const componentDefault = `<p><em>No results found</em></p>`;
//         if (typeof contentHubGlobals === 'undefined') {
//             return componentDefault;
//         }
//         if (typeof contentHubGlobals.noResults === 'undefined') {
//             return componentDefault;
//         }

//         // Return Global No Results
//         return contentHubGlobals.noResults();
//     },
// };

// const mtxCfg = {
//     userType: 'UCOMM',
//     itemDefaultImg: './?a=33510',
//     actionsEsi: './?a=33052',
//     cpFilterLabel: 'Content partners',
//     cpFilterName: 'f.contentPartner%7CtaxonomyContentPartnerText',
//     cpFilterDefault: '-- Choose Content Partner --',
//     statusFilterLabel: 'Status',
//     statusFilterName: 'f.hubStatus|hubStatus',
//     statusFilterDefault: 'All',
//     dateFilterLabel: 'Date Range',
//     dateFilterName: 'f.date|d',
//     dateFilterDefault: 'All',
//     sortByLabel: 'Sort By',
//     resultsPerPage: 10,
//     resultsSuffixText: 'results',
//     storyViewerUrl: '%globals_site_metadata_storyView^as_asset:asset_url%',
//     url: '%frontend_asset_url%',
//     queryString: '%globals_server_query_string%',
// };
// let res,
//     status = '';
// export const fetchData = async () => {
//     try {
//         const response = await fetch(
//             `${window.globalData.urls.fb}/s/search.json?profile=search&collection=sug~sp-stanford-university-content-hub&num_ranks=10&start_rank=1&sort=dmetamtxCreated&&query=!nullquery`,
//         );
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const result = await response.json();
//         // const req0Url = response['info']['url'];
//         // const resp0Code = response['info']['http_code'];
//         console.log(result);
//         const resp0Body = response.body;
//         res = response;
//         status = response.status;

//         // print(output);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// };

// fetchData();

// showAllContent.init(status, res, mtxCfg);
