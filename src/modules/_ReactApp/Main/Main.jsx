import React, {useEffect, useState} from 'react';
import {AppStateExample} from '../AppStateExample/AppStateExample.jsx';
import {DataStateExample} from '../DataStateExample/DataStateExample.jsx';
import {SearchBar} from '../SearchBar/SearchBar.jsx';
import {Filters} from '../Filters/Filters.jsx';
import {Card} from '../Card/Card.jsx';
import {DateFilter} from '../Filters/DateFilter.jsx';

export const Main = () => {
    const [data, setData] = useState(null);
    const [facets, setFacetData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${window.globalData.urls.fb}/s/search.json?profile=search&collection=sug~sp-stanford-university-content-hub&num_ranks=10&start_rank=1&sort=dmetamtxCreated&&query=!nullquery`,
                );
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                // const req0Url = response['info']['url'];
                // const resp0Code = response['info']['http_code'];
                setData(result);
                setFacetData(result.response.facets);
                // console.log('main data', result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const mtxCfg = {
        userType: 'UCOMM',
        itemDefaultImg: './?a=33510',
        actionsEsi: './?a=33052',
        cpFilterLabel: 'Content partners',
        cpFilterName: 'f.contentPartner%7CtaxonomyContentPartnerText',
        cpFilterDefault: '-- Choose Content Partner --',
        statusFilterLabel: 'Status',
        statusFilterName: 'f.hubStatus|hubStatus',
        statusFilterDefault: 'All',
        dateFilterLabel: 'Date Range',
        dateFilterName: 'f.date|d',
        dateFilterDefault: 'All',
        sortByLabel: 'Sort By',
        resultsPerPage: 10,
        resultsSuffixText: 'results',
        storyViewerUrl: '%globals_site_metadata_storyView^as_asset:asset_url%',
        url: '%frontend_asset_url%',
        queryString: '%globals_server_query_string%',
        currentRangeLabel: '',
    };

    const err = (msg) => {
        return `<!-- Latest Content Error: ${msg} -->`;
    };

    const getValueFromArray = (el) => {
        // Check if this is an array
        if (el === undefined) {
            return '';
        }
        if (Array.isArray(el) === false) {
            return '';
        }
        // And if there are any elements in the array
        if (el.length === 0) {
            return '';
        }
        // And return first value
        return el[0];
    };

    const reformatDate = (ts) => {
        // Validate date
        if (ts === undefined) {
            return '';
        }

        ts = parseInt(ts, 10);
        if (isNaN(ts) === true) {
            return '';
        }

        // Multiply date by 1000 to convert PHP vs JS date format (between seconds and miliseconds)
        ts = ts * 1000;

        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const tsDate = new Date(ts);
        // Format: "April 30, 2023"
        const month = monthNames[tsDate.getMonth()];
        const day = tsDate.getDate();
        const year = tsDate.getFullYear();

        // If provided year is not accurate :: means invalid date or no date was provided :: return placeholder
        if (year === 1970) {
            return 'N/A';
        }

        return `${month} ${day}, ${year}`;
    };

    const reformatJson = (respBody) => {
        // Reformat Response JSON from FB to what we need to display

        if (!respBody.response.resultPacket) {
            return false;
        }
        // Check if response includes results
        if (typeof respBody.response === 'undefined') {
            return false;
        }
        if (typeof respBody.response.resultPacket === 'undefined') {
            return false;
        }
        if (typeof respBody.response.resultPacket.results === 'undefined') {
            return false;
        }

        // Define output object
        let output = {
            firstItem: 0,
            lastItem: 0,
            total: 0,
            prevStart: 0,
            nextStart: 0,
            numRanks: 0,
            items: [],
            facets: [],
        };

        // Add Facets to the output:
        output.facets = respBody.response.facets || [];

        // Check if there are any results present
        if (respBody.response.resultPacket.results.length === 0) {
            return output;
        }

        const resultPacket = respBody.response.resultPacket;
        // Update general information
        output.total = resultPacket.resultsSummary.fullyMatching || 0;
        output.firstItem = resultPacket.resultsSummary.currStart || 1;
        output.lastItem = resultPacket.resultsSummary.currEnd || 10;
        output.prevStart = resultPacket.resultsSummary.prevStart || null;
        output.nextStart = resultPacket.resultsSummary.nextStart || null;
        output.numRanks = resultPacket.resultsSummary.numRanks || 10;
        output.dateCounts = resultPacket.dateCounts || null;

        // Get items
        const results = resultPacket.results || [];
        results.forEach((thisResult) => {
            let hItem = {
                id: getValueFromArray(thisResult.listMetadata.assetId),
                title: thisResult.title,
                url: getValueFromArray(thisResult.listMetadata.canonicalUrl),
                img: getValueFromArray(thisResult.listMetadata.relatedImageURL),
                eyebrow: getValueFromArray(thisResult.listMetadata.taxonomyContentPartnerText),
                summary: getValueFromArray(thisResult.listMetadata.descriptionPlain),
                srcPubDate: getValueFromArray(thisResult.listMetadata.srcPublishedDate),
                mtxCreated: getValueFromArray(thisResult.listMetadata.mtxCreated),
                status: getValueFromArray(thisResult.listMetadata.hubStatus),
                statusDescription: getValueFromArray(thisResult.listMetadata.hubStatusDescription),
            };

            // If related image field is empty :: Try to use source/external link if possible
            if (hItem.img === '') {
                hItem.img = getValueFromArray(thisResult.listMetadata.srcFeaturedImageUrl);
            }

            // If Source Published Date is empty for some reasons :: Try to use Published date field
            if (hItem.srcPubDate === '') {
                hItem.srcPubDate = getValueFromArray(thisResult.listMetadata.publishedDate);
            }

            // Reformat Published date to correct format
            hItem.srcPubDate = reformatDate(hItem.srcPubDate);
            hItem.mtxCreated = reformatDate(hItem.mtxCreated);

            // Push item to output
            output.items.push(hItem);
            // console.log('reformat', output);
        });
        return output;
    };

    const generateNoResults = (err) => {
        // Create output object
        let outputHtml = [];

        // Push wrappers
        outputHtml.push(err(err));

        outputHtml.push(`<section>`);

        outputHtml.push(noResults());

        outputHtml.push(`</section>`);

        return outputHtml.join('\n');
    };

    const renderFiltersArea = (processedJson, cfg) => {
        // Get User Type
        const userType = cfg.userType;

        let filtersOutput = [];
        // Add top wrapper
        filtersOutput.push(`<!-- Filters Area -->`);
        filtersOutput.push(`<div class="su-mb-20">
            <div class="su-flex su-flex-col lg:su-flex-row su-gap-xs">`);

        // Add Content Partners filter
        filtersOutput.push(showAllContent.getCpFilters(processedJson, cfg));

        // Add Status filter :: Show only for UCOMM users
        if (userType === 'UCOMM') {
            filtersOutput.push(showAllContent.getStatusFilters(processedJson, cfg));
        }

        // Add Date Range filter
        filtersOutput.push(showAllContent.getDateRangeFilters(processedJson, cfg));

        filtersOutput.push(`</div> <!-- /.su-flex su-flex-col -->`);

        // Add Selected Filters Area
        filtersOutput.push(showAllContent.getSelectedFilters(processedJson, cfg));

        filtersOutput.push(`</div> <!-- /.su-mb-20 -->`);

        return filtersOutput.join('\n');
    };

    const noResults = () => {
        // Validate if no results screen is available in global object
        const componentDefault = `<p><em>No results found</em></p>`;
        if (typeof contentHubGlobals === 'undefined') {
            return componentDefault;
        }
        if (typeof contentHubGlobals.noResults === 'undefined') {
            return componentDefault;
        }

        // Return Global No Results
        return ` <div class="su-mt-100 su-min-h-[35vh] su-mb-50 md:su-mt-100 md:su-mb-120 su-text-center">
        <h2 class="su-mb-12">No results found</h2>
        <p>Please search again using different keywords and filters</p>
    </div>`;
    };

    const getResultsTop = (processedJson, cfg) => {
        // Generate SortBy filters
        const sortByFilters = contentHubGlobals.getSortByFilter.init(cfg);

        return `
        <!-- Top Results Area -->
        <div class="su-flex su-flex-col sm:su-flex-row su-gap-y-xs su-justify-between su-mb-20">
            <p class="su-leading-[2] su-mb-0">${processedJson.firstItem}-${processedJson.lastItem} of ${processedJson.total} ${cfg.resultsSuffixText}</p>
            <div class="su-flex su-shrink-0 su-gap-xs su-items-center">
                ${sortByFilters}
            </div>
        </div>`;
    };

    const generateOutput = (respBody, cfg) => {
        // Start with reformatting response to the format we need to show the output
        const processedJson = reformatJson(respBody);
        // Get type of user that is accessing the page

        // Check if after formatting there are any results present

        if (processedJson === false) {
            const err = 'No result object in the response.';
            const outputHtml = generateNoResults(err);
            return outputHtml;
        }

        // Create output object
        let outputHtml = [];

        // Push wrappers
        outputHtml.push(`<section data-type="${cfg.userType}">`);
        let div = (
            <div>
                <DateFilter data={data} facets={facets} cfg={mtxCfg} />
            </div>
        );
        // console.log('div', div);
        // outputHtml.push(div);
        // // Get Content Partner Filters
        // outputHtml.push(renderFiltersArea(processedJson, cfg));
        // // --
        // // Check if there are items to show :: if not : Show no results
        // if (processedJson.items.length === 0) {
        //     // Add No Results Screen
        //     outputHtml.push(noResults());
        // } else {
        //     // Get Top Results area with Sorting filters
        //     outputHtml.push(getResultsTop(processedJson, cfg));
        //     // Get Items List
        //     outputHtml.push(showAllContent.getItems(processedJson, cfg));
        //     // Get Pagination
        //     // outputHtml.push( showAllContent.getPagination(processedJson, cfg) );
        // }

        outputHtml.push(`</section>`);
        // console.log(outputHtml.join('\n'));

        return outputHtml.join('\n');
    };

    return (
        <div className="su-col-span-full xl:su-col-start-2 xl:su-col-span-10">
            <button onClick={() => generateOutput(data, mtxCfg)}>check</button>
            <section className="su-relative su-text-center su-mt-60 su-mb-50 su-pt-60 md:su-mt-45 md:su-pt-70 md:su-mb-100">
                <div className="su-absolute su-top-0 su-left-0 lg:su-left-[-64px]">
                    <a className="su-flex su-items-center su-text-[18px] hover:su-underline" href={window.globalData.urls.contentHub}>
                        <svg className="su-mr-6" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M8.33333 15.8337L2.5 10.0003M2.5 10.0003L8.33334 4.16699M2.5 10.0003L17.5 10.0003"
                                stroke="#E50808"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                        Back to Home
                    </a>
                </div>
                <h1 className="su-font-serif su-mb-40">All Content</h1>
                <SearchBar />
            </section>
            <div id="searchResults">
                <section data-type="UCOMM">
                    {/* <!-- Filters Area --> */}
                    <Filters />
                    <Card cfg={mtxCfg} />
                </section>
            </div>
        </div>
    );
};
