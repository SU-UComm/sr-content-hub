import React, {useState, useEffect} from 'react';

export const SelectedFacets = (props) => {
    const [facets, setFacets] = useState([]);
    const [selectedFacets, setSelectedFacets] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // Loader flag

    const onClick = (facet) => {
        props.onChange('undelect', facet.toggleUrl);
        console.log('CLICK FILTER UNSELECT', facet.toggleUrl);
    };
    const getSelected = (facets) => {
        // Generate output object
        const selectedItems = [];

        // Loop through all defined facets
        for (let n in facets) {
            const facetItem = facets[n];
            const facetItemName = facetItem.name;

            // Check if this facet is selected
            if (facetItem.selected === true) {
                // Loop through this specific facet
                for (let i in facetItem.selectedValues) {
                    // Get specific filter
                    const thisFacet = facetItem.selectedValues[i];

                    // Check if it is selected
                    if (thisFacet.selected === true) {
                        // XX
                        const thisToggle = thisFacet.toggleUrl.split('profile=')[0];
                        let facetDispName = thisFacet.label.charAt(0).toUpperCase() + thisFacet.label.slice(1);

                        // If selected :: push to output
                        selectedItems.push({
                            label: thisFacet.label,
                            count: thisFacet.count,
                            toggleUrl: thisFacet.toggleUrl,
                            facetName: facetItemName,
                            displayName: facetDispName,
                        });
                    }
                } // For selected
            } // If selected
        } // For facets

        // Return selected items
        console.log('SELECTED Items: ', selectedItems);
        return selectedItems;
    };

    useEffect(() => {
        if (props.facets) {
            setFacets(props.facets);
            setIsLoading(false);
            console.log('facets selected Data: ', props.facets);
            // getFormattedFacet(facets.facets);
            let selectedItems = getSelected(props.facets);
            setSelectedFacets(selectedItems);
        } else {
            setIsLoading(true);
        }
    }, [props.facets]);

    return (
        !isLoading && (
            <div className="su-flex su-flex-wrap su-gap-xs su-mt-20">
                {selectedFacets &&
                    selectedFacets.map((facet, i) => (
                        <button
                            key={i}
                            onClick={(e) => onClick(facet)}
                            href={facet.toggleUrl}
                            data-type={facet.name}
                            data-name={`f.${facet.displayName}`}
                            data-value={facet.displayName}
                            className="cpFilter-tag su-rounded su-flex su-items-center su-bg-gray-light su-border su-border-gray hover:su-border-red hover:su-bg-gray-light hover:su-text-black su-text-16 su-mb-0 su-py-8 su-px-15"
                        >
                            <span className="su-inline-block su-py-4 su-mr-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                                    <path d="M8 1.5L1 8.5" stroke="#E50808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M1 1.5L8 8.5" stroke="#E50808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </span>
                            {facet.displayName} ({facet.count})
                        </button>
                    ))}
            </div>
        )
    );
};

// contentHubGlobals.getSelectedFilters = {
//     init: (facets, cfg, resp) => {
//         // First check if inputs were provided
//         if (typeof(facets) === "undefined"){ return "<!-- Selected Filters: Facets Object not provided -->";}
//         if (typeof(cfg) === "undefined"){ return "<!-- Selected Filters: CFG Object not provided -->";}

//         // Get selected facets from the list of Content Partners
//         const selectedFacets = contentHubGlobals.getSelectedFilters.getSelected(facets);
//         if (selectedFacets === false){ return "<!-- Selected Filters: No filters selected -->"};

//         // Build output for selected facets
//         return contentHubGlobals.getSelectedFilters.generateOutput(selectedFacets, cfg, resp);
//     },
//   const  getSelected: (facets) => {
//         // Generate output object
//         const selectedItems = [];

//         // Loop through all defined facets
//         for (let n in facets){
//             const facetItem = facets[n];
//             const facetItemName = facetItem.name

//             // Check if this facet is selected
//             if (facetItem.selected === true){

//                 // Loop through this specific facet
//                 for (let i in facetItem.selectedValues){
//                     // Get specific filter
//                     const thisFacet = facetItem.selectedValues[i];

//                     // Check if it is selected
//                     if (thisFacet.selected === true){
//                         // XX
//                         const thisToggle = thisFacet.toggleUrl.split("profile=")[0];

//                         // If selected :: push to output
//                         selectedItems.push({
//                             "label" : thisFacet.label,
//                             "count" : thisFacet.count,
//                             "toggleUrl" : thisToggle,
//                             "facetName" : facetItemName
//                         });

//                     }
//                 } // For selected

//             } // If selected
//         } // For facets

//         // Return selected items
//         return selectedItems;
//     },
//     generateOutput: (cpFilters, cfg, resp) => {
//         if (cpFilters.length === 0){ return "<!-- No Selected Filters -->"; }

//         const cpList = cfg.cpList;

//         // Get query string and main URL
//         const resultsUrl = cfg.url;
//         let resultQuery = cfg.queryString;

//         const filtersOutput = [];
//         // Add Top Wrapper
//         filtersOutput.push(`<div class="su-flex su-flex-wrap su-gap-xs su-mt-20">`);

//         cpFilters.forEach(thisFilter => {

//             // Default behaviour for facets
//             let thisFilterName = thisFilter.label;
//             let thisFilterQuery = thisFilter.toggleUrl;
//             let thisUrl = contentHubGlobals.getSelectedFilters.getFacetUrl(resultsUrl, resultQuery, thisFilterQuery);
//             let filterName;

//             // If this is Content Partner Facet :: Get label based on ID
//             if (thisFilter.facetName === "contentPartner"){
//                 const thisFilterId = thisFilter.label;
//                 // Get label based on ID
//                 // thisFilterName = cpList[thisFilterId].name; // Used for MTX && FB Content Partners map
//                 thisFilterName = thisFilterId;
//                 thisFilterQuery = `${cfg.cpFilterName}=${thisFilterId}`;
//                 thisUrl = contentHubGlobals.getSelectedFilters.getCpUrl(resultsUrl, resultQuery, thisFilterQuery);

//                 filterName = cfg.cpFilterName;
//             }

//             // If this is a Status filter, we need to map the name to the correct label
//             if (thisFilter.facetName === "hubStatus"){
//                 const labelsMap = contentHubGlobals.defaultValues.statuses;
//                 thisFilterName = labelsMap[thisFilterName] || thisFilterName;

//                  filterName = cfg.statusFilterName;
//             }

//             if (thisFilter.facetName === "date") {
//                 const dateCount = resp.dateCounts[`d:${thisFilter.label}`].queryTerm;
//                 thisFilterQuery = `${cfg.dateFilterName}=${dateCount}+%3A%3A+${thisFilter.label.replace(/ /g, "+")}`
//                 filterName = cfg.dateFilterName;
//             }

//             // Get URL to remove filter
//             const thisFilterOutput = `
//             <button href="${thisUrl}" data-toggleurl="${thisFilter.toggleUrl}" data-type="${thisFilter.facetName}" data-name="${filterName}" data-value="${thisFilter.label.replace(/ /g, "%20")}" class="cpFilter-tag su-rounded su-flex su-items-center su-bg-gray-light su-border su-border-gray hover:su-border-red hover:su-bg-gray-light hover:su-text-black su-text-16 su-mb-0 su-py-8 su-px-15">
//                 <span class="su-inline-block su-py-4 su-mr-6">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
//                         <path d="M8 1.5L1 8.5" stroke="#E50808" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                         <path d="M1 1.5L8 8.5" stroke="#E50808" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
//                     </svg>
//                 </span>
//                 ${thisFilterName} (${thisFilter.count})
//             </a>`;

//             filtersOutput.push(thisFilterOutput);
//         });

//         // Add closing Wrapper
//         filtersOutput.push(`</div> <!-- Selected Filter End -->`);

//         return filtersOutput.join("\n");
//     },
//     getCpUrl: (url, queryString, thisFilterQuery) => {
//         let newQuery = queryString.replace(thisFilterQuery, "");
//         // Build output URL
//         let outputUrl = `${url}?${newQuery}`;
//         // Remove double && and ?&
//         outputUrl = outputUrl.replace("&&", "&").replace("?&", "?");
//         // Check if last char is not '&'
//         if (outputUrl.slice(-1) === "&"){
//             outputUrl = outputUrl.slice(0, -1);
//         }

//         return outputUrl;
//     },
//     getFacetUrl: (resultsUrl, fullQuery, toggleUrl) => {

//         // Get Query parameter from Query :: If it exists
//         let queryParams = contentHubGlobals.helpers.getQueryStringParams(fullQuery);
//         let searchQuery = "";
//         if (queryParams["query"] !== undefined){
//             searchQuery = `&query=${queryParams["query"]}`;
//         }
//         // Generate output based on resultUrl, toggleUrl and search query
//         let outputUrl = `${resultsUrl}${toggleUrl}${searchQuery}`;
//         // Remove double && and ?&
//         outputUrl = outputUrl.replace("&&", "&").replace("?&", "?");
//         // Check if last char is not '&'
//         if (outputUrl.slice(-1) === "&"){
//             outputUrl = outputUrl.slice(0, -1);
//         }

//         return outputUrl;
//     }
// };
