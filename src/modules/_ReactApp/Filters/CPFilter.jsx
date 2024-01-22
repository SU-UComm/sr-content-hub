import React, {useState} from 'react';

export const CPFilter = (props) => {
    const [facetsArr, setFacetsArr] = useState('');
    const cfg = props.cfg;
    const [cpFiltersList, setCpFiltersList] = useState('');
    const [filterPlaceholder, setFilterPlaceholder] = useState('');
    const [cpFiltersOptions, setcpFiltersOptions] = useState('');
    const [selectName, setSelectName] = useState('');
    let wrapperClass = '';

    // useEffect(() => {
    // First check if inputs were provided
    if (typeof facetsArr === 'undefined') {
        return '<!-- Filters: Facets Object not provided -->';
    }
    if (typeof cfg === 'undefined') {
        return '<!-- Filters: CFG Object not provided -->';
    }
    // }, []);

    // const cpFilter = getFormattedFacet(facetsArr);
    // if (cpFilter === false) {
    //     return showNoResults(wrapperClass, cfg);
    //     // return "<!-- Filters: No filter information available -->";
    // }

    // // Get Options view
    // const cpFiltersOptions = optionsView(cpFilter, cfg);

    // // Get List view
    // const cpFiltersList = listView(cpFilter, cfg);

    // // Other Items
    // const selectName = cfg.cpFilterName;
    // const filerPlaceholder = cfg.cpFilterDefault;

    const getFormattedFacet = (facets) => {
        // Loop through facets :: And find CP Facet
        const cpFacetArr = facets.filter((el) => {
            const facetName = el.name;
            if (facetName === 'contentPartner') {
                return true;
            }
            return false;
        });

        if (cpFacetArr.length === 0) {
            return false;
        }
        const cpFacet = cpFacetArr[0];

        // Get formatted version of Content Partners Facet :: without selected values
        const facetsOutput = [];
        for (let i in cpFacet.allValues) {
            const thisFacet = cpFacet.allValues[i];

            if (thisFacet.selected === false) {
                const thisToggle = thisFacet.toggleUrl.split('&profile=')[0];

                facetsOutput.push({
                    label: thisFacet.label,
                    count: thisFacet.count,
                    toggleUrl: thisToggle,
                });
            }
        }

        const cpFilter = facetsOutput;
        if (cpFilter === false) {
            return showNoResults(wrapperClass, cfg);
            // return "<!-- Filters: No filter information available -->";
        }

        // Get Options view
        const cpFiltersOptions = optionsView(cpFilter, cfg);
        setCpFiltersList(cpFiltersOptions);

        // Get List view
        const cpFiltersList = listView(cpFilter, cfg);
        setCpFiltersList(cpFiltersList);

        // Other Items
        const selectName = cfg.cpFilterName;
        setSelectName(selectName);
        const filterPlaceholder = cfg.cpFilterDefault;
        setFilterPlaceholder(filterPlaceholder);

        // Return selected items
        return facetsOutput;
    };

    const optionsView = (cp, cfg) => {
        const cpList = cfg.cpList;

        let optionsList = [];
        cp.forEach((el) => {
            const thisValue = el.label;
            //const thisName = cpList[thisValue].name; // Used for MTX && FB Content partners map
            const thisName = el.label;
            optionsList.push(`<option value="${thisValue}">${thisName}</option>`);
        });

        return optionsList.join('\n');
    };

    const listView = (cp, cfg) => {
        const cpList = cfg.cpList;
        let listOutput = [];
        cp.forEach((el) => {
            const thisValue = el.label;
            //const thisName = cpList[thisValue].name; // Used for MTX && FB Content partners map
            const thisName = el.label;
            listOutput.push(`
                    <li data-value="${thisValue}" role="button" class="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light">
                        ${thisName}
                    </li>`);
        });

        return listOutput.join('\n');
    };

    const showNoResults = (wrapperClass, cfg) => {
        return `
                <div class="${wrapperClass}">
                    <div class="c-select c-select--search su-min-w-full">
                        <select class="su-opacity-0 su-float-right su-border-0 su-w-0 su-h-0 su-p-0 su-m-0" name="${cfg.cpFilterName}" id="cp-filter">
                            <option value="">${cfg.cpFilterDefault}</option>
                        </select>
                        <div class="c-wrapper su-relative su-group">
                            <button class="c-button su-transition-none group-[.open]:su-mb-1 group-[.open]:su-border-b-transparent group-[.open]:su-rounded-b-none su-leading-[3.6rem] su-pr-20 su-w-full su-text-18 su-flex su-items-center su-justify-between su-text-left su-bg-white su-font-regular hover:su-bg-white hover:su-border-gray hover:su-text-black">
                                <span class="su-mr-10 su-line-clamp-1">${cfg.cpFilterDefault}</span>
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
                                <div class="su-leading-[3.6rem] su-px-8 su-pt-4 su-pb-8">
                                    <input class="su-w-full su-rounded su-border-gray su-text-18 su-py-8 focus:su-border-red focus:su-ring-red" placeholder="Search" type="text" name="cp-search" id="cp-search" />
                                </div>    
                                <ul class="su-z-10 c-list su-max-h-[209px] su-overflow-y-auto su-p-0 su-list-none">
                                    <li data-value="" role="button" class="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light">
                                        ${cfg.cpFilterDefault}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>`;
    };

    return (
        <div className="su-flex-[calc(100%/3)_1_1]">
            <button onClick={() => getFormattedFacet(props.facets)}>check</button>
            <div className="{wrapperClass}">
                <div className="c-select c-select--search su-min-w-full">
                    <select className="su-opacity-0 su-float-right su-border-0 su-w-0 su-h-0 su-p-0 su-m-0" name="{selectName}" id="cp-filter">
                        {cpFiltersOptions}
                    </select>
                    <div className="c-wrapper su-relative su-group">
                        <button className="c-button su-transition-none group-[.open]:su-mb-1 group-[.open]:su-border-b-transparent group-[.open]:su-rounded-b-none su-leading-[3.6rem] su-pr-20 su-w-full su-text-18 su-flex su-items-center su-justify-between su-text-left su-bg-white su-font-regular hover:su-bg-white hover:su-border-gray hover:su-text-black">
                            <span className="su-mr-10 su-line-clamp-1">{filterPlaceholder}</span>
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
                            <div className="su-leading-[3.6rem] su-px-8 su-pt-4 su-pb-8">
                                <input
                                    className="su-w-full su-rounded su-border-gray su-text-18 su-py-8 focus:su-border-red focus:su-ring-red"
                                    placeholder="Search"
                                    type="text"
                                    name="cp-search"
                                    id="cp-search"
                                />
                            </div>
                            <ul className="su-z-10 c-list su-max-h-[209px] su-overflow-y-auto su-p-0 su-list-none">{cpFiltersList}</ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
