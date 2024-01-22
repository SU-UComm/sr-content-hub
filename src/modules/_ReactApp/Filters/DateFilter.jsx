import React, {useState} from 'react';

export const DateFilter = (props) => {
    const [facetsArr, setFacetsArr] = useState('');
    const cfg = props.cfg;
    const [dateFiltersOptions, setDateFiltersOptions] = useState('');
    const [dateFiltersList, setDateFiltersList] = useState('');
    const [currentRangeLabel, setCurrentRangeLabel] = useState('');

    // useEffect(() => {
    if (typeof facetsArr === 'undefined') {
        return '<!-- Filters: Facets Object not provided -->';
    }
    if (typeof cfg === 'undefined') {
        return '<!-- Filters: CFG Object not provided -->';
    }
    // }, []);

    // Get Date Facet
    // const dateFilter = getFormattedFacet(facetsArr);
    // if (dateFilter === false) {
    //     return showNoResults(cfg);
    //     // return "<!-- Filters: No filter information available -->";
    // }

    // // Get Options view
    // const dateFiltersOptions = optionsView(dateFilter, cfg);

    // // Get List view
    // const dateFiltersList = listView(dateFilter, cfg);

    // // Get Currently selected date range
    // const currentlySelected = getCurrentRange(dateFilter);

    // // Currently selected Label
    // let currentRangeLabel = currentlySelected.name;
    // if (currentRangeLabel === '') {
    //     currentRangeLabel = cfg.dateFilterDefault;
    // }

    const optionsView = (dateF, cfg) => {
        let optionsList = [];
        dateF.forEach((el) => {
            const thisName = el.label;
            const thisValue = el.toggleUrl.split('=')[1];
            if (el.selected === true) {
                optionsList.push(`<option value="${thisValue}" selected="selected">${thisName}</option>`);
            } else {
                optionsList.push(`<option value="${thisValue}">${thisName}</option>`);
            }
        });

        return optionsList.join('\n');
    };

    const listView = (dataF, cfg) => {
        let listOutput = '';
        dataF.forEach((el) => {
            const thisName = el.label;
            const thisValue = el.toggleUrl.split('=')[1];

            listOutput += `
                <li role="button" data-value="${thisValue}" class="${
                el.selected ? 'su-pointer-events-none su-opacity-50 ' : ''
            }su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light">
                    ${thisName}
                </li>`;
        });

        // return listOutput.join('\n');
        document.querySelector('#dateFilterID').insertAdjacentHTML('beforeend', listOutput);
    };

    const getCurrentRange = (dateF) => {
        let selectedEl = {name: '', value: ''};

        dateF.forEach((el) => {
            const thisName = el.label;
            const thisValue = el.toggleUrl.split('=')[1];
            if (el.selected === true) {
                selectedEl = {name: thisName, value: thisValue};
            }
        });

        return selectedEl;
    };

    const getFormattedFacet = (facets) => {
        // Loop through facets :: And find CP Facet
        const dateFacetArr = facets.filter((el) => {
            const facetName = el.name;
            if (facetName === 'date') {
                return true;
            }
            return false;
        });

        if (dateFacetArr.length === 0) {
            return false;
        }
        const dateFacet = dateFacetArr[0];

        // Get formatted version of Content Partners Facet :: without selected values
        const facetsOutput = [];
        for (let i in dateFacet.allValues) {
            const thisFacet = dateFacet.allValues[i];

            let thisToggle = thisFacet.toggleUrl.split('&profile=')[0];
            thisToggle = decodeURI(thisToggle);
            thisToggle = thisToggle.split('f.date|d=')[1];
            thisToggle = 'f.date|d=' + thisToggle;

            if (thisToggle.indexOf('?') > -1) {
                thisToggle = '&' + thisToggle;
            } else {
                thisToggle = '?' + thisToggle;
            }

            facetsOutput.push({
                label: thisFacet.label,
                count: thisFacet.count,
                toggleUrl: thisToggle,
                selected: thisFacet.selected,
            });
        }

        const dateFilter = facetsOutput;
        if (dateFilter === false) {
            return showNoResults(cfg);
            // return "<!-- Filters: No filter information available -->";
        }

        // Get Options view
        const dateFiltersOptions = optionsView(dateFilter, cfg);
        setDateFiltersOptions(dateFiltersOptions);

        // Get List view
        const dateFiltersList = listView(dateFilter, cfg);
        setDateFiltersList(dateFiltersList);

        // Get Currently selected date range
        const currentlySelected = getCurrentRange(dateFilter);

        // Currently selected Label
        let currentRangeLabel = currentlySelected.name;
        if (currentRangeLabel === '') {
            currentRangeLabel = cfg.dateFilterDefault;
        }

        setCurrentRangeLabel(currentRangeLabel);

        // Return selected items
        return facetsOutput;
    };

    const showNoResults = (cfg) => {
        return `
            <label for="date-filter" class="su-block su-text-18 su-font-bold su-leading-[2] su-mb-10">${cfg.dateFilterLabel}</label>
            <div class="c-select su-min-w-full">
                <select class="su-opacity-0 su-float-right su-border-0 su-w-0 su-h-0 su-p-0 su-m-0" name="${cfg.dateFilterName}" id="date-filter">
                    <option value="">${cfg.dateFilterDefault}</option>
                </select>
                <div class="c-wrapper su-relative su-group">
                    <button
                        class="c-button su-transition-none group-[.open]:su-mb-1 group-[.open]:su-border-b-transparent group-[.open]:su-rounded-b-none su-leading-[3.6rem] su-pr-20 su-w-full su-text-18 su-flex su-items-center su-justify-between su-text-left su-bg-white su-font-regular hover:su-bg-white hover:su-border-gray hover:su-text-black"
                    >
                        <span class="su-mr-10">${cfg.dateFilterDefault}</span>
                        <svg class="su-inline group-[.open]:su-rotate-180" xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 12 8" fill="none">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M6.41416 7.54297L11.7071 2.25007C12.0976 1.85954 12.0976 1.22638 11.7071 0.835856L11.6213 0.750069C11.2307 0.359544 10.5976 0.359545 10.207 0.75007L4.91416 6.04297L6.41416 7.54297Z"
                                fill="#E50808"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M6.41416 7.54297L7.91416 6.04297L2.62126 0.750069C2.23074 0.359544 1.59757 0.359545 1.20705 0.75007L1.12126 0.835857C0.730738 1.22638 0.730738 1.85955 1.12126 2.25007L6.41416 7.54297Z"
                                fill="#E50808"
                            />
                        </svg>
                    </button>
                    <div class="su-z-10 su-hidden group-[.open]:su-block su-overflow-y-auto su-absolute su-border-t-0 su-border su-border-gray su-w-full su-bg-white su-rounded-b su-top-full">
                        <ul class="su-z-10 c-list su-max-h-[209px] su-overflow-y-auto su-p-0 su-list-none">
                            <li role="button" data-value="" class="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light">    
                            ${cfg.dateFilterDefault}
                            </li>  
                        </ul>
                    </div>
                </div>
            </div>`;
    };

    return (
        <div className="su-flex-[calc(100%/3)_1_1]">
            <button onClick={() => getFormattedFacet(props.facets)}>check</button>
            <label htmlFor="date-filter" className="su-block su-text-18 su-font-bold su-leading-[2] su-mb-10">
                {props.cfg.dateFilterLabel}
            </label>

            <div className="c-select su-min-w-full">
                <select className="su-opacity-0 su-float-right su-border-0 su-w-0 su-h-0 su-p-0 su-m-0" name="${props.cfg.dateFilterName}" id="date-filter">
                    <option value="">{props.cfg.dateFilterDefault}</option>
                    {dateFiltersOptions}
                </select>
                <div className="c-wrapper su-relative su-group">
                    <button className="c-button su-transition-none group-[.open]:su-mb-1 group-[.open]:su-border-b-transparent group-[.open]:su-rounded-b-none su-leading-[3.6rem] su-pr-20 su-w-full su-text-18 su-flex su-items-center su-justify-between su-text-left su-bg-white su-font-regular hover:su-bg-white hover:su-border-gray hover:su-text-black">
                        <span className="su-mr-10">{currentRangeLabel}</span>
                        <svg className="su-inline group-[.open]:su-rotate-180" xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 12 8" fill="none">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.41416 7.54297L11.7071 2.25007C12.0976 1.85954 12.0976 1.22638 11.7071 0.835856L11.6213 0.750069C11.2307 0.359544 10.5976 0.359545 10.207 0.75007L4.91416 6.04297L6.41416 7.54297Z"
                                fill="#E50808"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.41416 7.54297L7.91416 6.04297L2.62126 0.750069C2.23074 0.359544 1.59757 0.359545 1.20705 0.75007L1.12126 0.835857C0.730738 1.22638 0.730738 1.85955 1.12126 2.25007L6.41416 7.54297Z"
                                fill="#E50808"
                            />
                        </svg>
                    </button>
                    <div className="su-z-10 su-hidden group-[.open]:su-block su-overflow-y-auto su-absolute su-border-t-0 su-border su-border-gray su-w-full su-bg-white su-rounded-b su-top-full">
                        <ul className="su-z-10 c-list su-max-h-[209px] su-overflow-y-auto su-p-0 su-list-none" id="dateFilterID">
                            <li
                                role="button"
                                data-value=""
                                className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light"
                            >
                                {props.cfg.dateFilterDefault}
                            </li>
                            {dateFiltersList}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
