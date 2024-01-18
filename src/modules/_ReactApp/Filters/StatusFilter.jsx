import React, {useEffect, useState, useContext} from 'react';
import {AppStateProvider} from 'src/modules/_ReactApp/AppState/AppState.jsx';
import {useAppState, useAppDispatch} from '../AppState/AppState.jsx';

export const StatusFilter = (props) => {
    // useEffect(() => {
    //     const statusFilter = getFormattedFacet(props.facets);
    //     const optionsList = optionsView(statusFilter, props.cfg);
    //     console.log('useEffect status', statusFilter);
    //     console.log('useEffect options', optionsList);
    // }, []);
    // const {exampleAppData} = useContext(AppStateProvider);
    // console.log('data context', exampleAppData);

    const [facets, setFacets] = useState(props.facets);
    const [listViewHtml, setlistView] = useState('');
    const [optionsListHtml, setOptionsList] = useState('');
    const [selected, setSelected] = useState('');
    const [currentLabel, setCurrentLabel] = useState('');

    const optionsView = (facet, cfg) => {
        let optionsList = [];
        facet.forEach((el) => {
            const thisName = el.label;
            const thisValue = el.toggleUrl.split('=')[1];

            if (el.selected === true) {
                optionsList.push(`<option value="${thisValue}" selected="selected">${thisName}</option>`);
            } else {
                optionsList.push(`<option value="${thisValue}">${thisName}</option>`);
            }
        });

        console.log('optionsView', props.defaultData);
        return optionsList.join('\n');
    };

    const listView = (facet, cfg) => {
        let listOutput = '';
        const currentlySelected = getCurrentStatus(facet);

        facet.forEach((el) => {
            const thisName = el.label;
            const thisValue = el.toggleUrl.split('=')[1];

            listOutput += `
            <li role="button" data-value="${thisValue}" 
            className="${el.selected ? 'su-opacity-50 su-pointer-events-none ' : ''} 
            su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light">
                ${thisName}
            </li>`;
        });

        document.querySelector('#statusFilterID').insertAdjacentHTML('beforeend', listOutput);
    };

    const getCurrentStatus = (facet) => {
        let selectedEl = {name: '', value: ''};

        facet.forEach((el) => {
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
        const statusFacetArr = facets.filter((el) => {
            const facetName = el.name;
            if (facetName === 'hubStatus') {
                return true;
            }
            return false;
        });

        if (statusFacetArr.length === 0) {
            return false;
        }
        const statusFacet = statusFacetArr[0];

        // Labels map with friendly names
        const labelsMap = {
            submitted: 'Submitted',
            'sent-to-sr': 'Publishing soon on Stanford Report',
            published: 'Published on Stanford Report',
            reviewed: 'Reviewed',
        };

        // Get formatted version of Content Partners Facet :: without selected values
        const facetsOutput = [];
        for (let i in statusFacet.allValues) {
            const thisFacet = statusFacet.allValues[i];

            // Fix Toggle URL
            let thisToggle = thisFacet.toggleUrl.split('&profile=')[0];
            thisToggle = decodeURI(thisToggle);
            thisToggle = thisToggle.split('f.hubStatus|hubStatus=')[1];
            thisToggle = 'f.hubStatus|hubStatus=' + thisToggle;

            if (thisToggle.indexOf('?') > -1) {
                thisToggle = '&' + thisToggle;
            } else {
                thisToggle = '?' + thisToggle;
            }

            // Map label name
            const thisLabel = thisFacet.label;
            const mappedLabel = labelsMap[thisLabel] || thisLabel;

            facetsOutput.push({
                label: mappedLabel,
                count: thisFacet.count,
                toggleUrl: thisToggle,
                selected: thisFacet.selected,
            });
        }

        console.log('facetsOutput', facetsOutput);
        setFacets(facetsOutput);

        let optionsList = optionsView(facetsOutput, props.cfg);
        setOptionsList(optionsList);

        let listV = listView(facetsOutput, props.cfg);
        setlistView(listV);

        // Get Currently selected date range
        let currentlySelected = getCurrentStatus(facetsOutput);
        setSelected(currentlySelected);

        // Currently selected Label
        let currentLabel = currentlySelected.name;
        if (currentLabel === '') {
            currentLabel = props.cfg.statusFilterDefault;
        }

        setCurrentLabel(currentLabel);

        // Return selected items
        if (facetsOutput === false) {
            return showNoResults(props.cfg, 'propswrapperClass');
            // return "<!-- Filters: No filter information available -->";
        }

        return facetsOutput;
    };

    const showNoResults = (cfg, wrapperClass) => {
        return `
    <label for="status-filter" className="su-block su-text-18 su-font-bold su-leading-[2] su-mb-10">${cfg.statusFilterLabel}</label>
    <div className="c-select su-min-w-full ${wrapperClass}">
        <select className="su-opacity-0 su-float-right su-border-0 su-w-0 su-h-0 su-p-0 su-m-0" name="${cfg.statusFilterName}" id="status-filter">
            <option value="">${cfg.statusFilterDefault}</option>
        </select>
        <div className="c-wrapper su-relative su-group">
            <button
                className="c-button su-transition-none group-[.open]:su-mb-1 group-[.open]:su-border-b-transparent group-[.open]:su-rounded-b-none su-leading-[3.6rem] su-pr-20 su-w-full su-text-18 su-flex su-items-center su-justify-between su-text-left su-bg-white su-font-regular hover:su-bg-white hover:su-border-gray hover:su-text-black"
            >
                <span className="su-mr-10">${cfg.statusFilterDefault}</span>
                <svg className="su-inline group-[.open]:su-rotate-180" xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 12 8" fill="none">
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
            <div className="su-z-10 su-hidden group-[.open]:su-block su-overflow-y-auto su-absolute su-border-t-0 su-border su-border-gray su-w-full su-bg-white su-rounded-b su-top-full">
                <ul className="su-z-10 c-list su-max-h-[209px] su-overflow-y-auto su-p-0 su-list-none">
                    <li role="button" data-value="" className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light">
                        ${cfg.statusFilterDefault}
                    </li>
                </ul>
            </div>
        </div>
    </div>`;
    };

    return (
        <div className="su-flex-[calc(100%/3)_1_1]">
            <hr />
            <button onClick={() => getFormattedFacet(props.facets)}>check</button>
            <label htmlFor="status-filter" className="su-block su-text-18 su-font-bold su-leading-[2] su-mb-10">
                {props.cfg.statusFilterLabel}
            </label>
            <div className="c-select su-min-w-full ${wrapperClass}">
                <select className="su-opacity-0 su-float-right su-border-0 su-w-0 su-h-0 su-p-0 su-m-0" name="${props.cfg.statusFilterName}" id="status-filter">
                    <option value="">{props.cfg.statusFilterDefault}</option>
                    {optionsListHtml}
                </select>
                <div className="c-wrapper su-relative su-group">
                    <button className="c-button su-transition-none group-[.open]:su-mb-1 group-[.open]:su-border-b-transparent group-[.open]:su-rounded-b-none su-leading-[3.6rem] su-pr-20 su-w-full su-text-18 su-flex su-items-center su-justify-between su-text-left su-bg-white su-font-regular hover:su-bg-white hover:su-border-gray hover:su-text-black">
                        <span className="su-mr-10">{currentLabel}</span>
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
                        <ul className="su-z-10 c-list su-max-h-[209px] su-overflow-y-auto su-p-0 su-list-none" id="statusFilterID">
                            <li
                                role="button"
                                data-value=""
                                className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light"
                            >
                                {props.cfg.statusFilterDefault}
                            </li>
                            {listViewHtml}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

// contentHubGlobals.getStatusesFilter = {
//     init: (facetsArr, cfg, wrapperClass) => {
//         if (typeof facetsArr === 'undefined') {
//             return '<!-- Filters: Facets Object not provided -->';
//         }
//         if (typeof cfg === 'undefined') {
//             return '<!-- StatusFilter : CFG is missing -->';
//         }
//         if (typeof wrapperClass === 'undefined') {
//             wrapperClass = '';
//         }

//         // Get Status Facet
//         const statusFilter = contentHubGlobals.getStatusesFilter.getFormattedFacet(facetsArr);
//         if (statusFilter === false) {
//             return contentHubGlobals.getStatusesFilter.showNoResults(cfg, wrapperClass);
//             // return "<!-- Filters: No filter information available -->";
//         }

//         const optionsList = contentHubGlobals.getStatusesFilter.optionsView(statusFilter, cfg);
//         const listView = contentHubGlobals.getStatusesFilter.listView(statusFilter, cfg);

//         // Get Currently selected date range
//         const currentlySelected = contentHubGlobals.getStatusesFilter.getCurrentStatus(statusFilter);

//         // Currently selected Label
//         let currentLabel = currentlySelected.name;
//         if (currentLabel === '') {
//             currentLabel = cfg.statusFilterDefault;
//         }

//         return `
//         <label for="status-filter" className="su-block su-text-18 su-font-bold su-leading-[2] su-mb-10">${cfg.statusFilterLabel}</label>
//         <div className="c-select su-min-w-full ${wrapperClass}">
//             <select className="su-opacity-0 su-float-right su-border-0 su-w-0 su-h-0 su-p-0 su-m-0" name="${cfg.statusFilterName}" id="status-filter">
//                 <option value="">${cfg.statusFilterDefault}</option>
//                 ${optionsList}
//             </select>
//             <div className="c-wrapper su-relative su-group">
//                 <button
//                     className="c-button su-transition-none group-[.open]:su-mb-1 group-[.open]:su-border-b-transparent group-[.open]:su-rounded-b-none su-leading-[3.6rem] su-pr-20 su-w-full su-text-18 su-flex su-items-center su-justify-between su-text-left su-bg-white su-font-regular hover:su-bg-white hover:su-border-gray hover:su-text-black"
//                 >
//                     <span className="su-mr-10">${currentLabel}</span>
//                     <svg className="su-inline group-[.open]:su-rotate-180" xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 12 8" fill="none">
//                         <path
//                             fill-rule="evenodd"
//                             clip-rule="evenodd"
//                             d="M6.41416 7.54297L11.7071 2.25007C12.0976 1.85954 12.0976 1.22638 11.7071 0.835856L11.6213 0.750069C11.2307 0.359544 10.5976 0.359545 10.207 0.75007L4.91416 6.04297L6.41416 7.54297Z"
//                             fill="#E50808"
//                         />
//                         <path
//                             fill-rule="evenodd"
//                             clip-rule="evenodd"
//                             d="M6.41416 7.54297L7.91416 6.04297L2.62126 0.750069C2.23074 0.359544 1.59757 0.359545 1.20705 0.75007L1.12126 0.835857C0.730738 1.22638 0.730738 1.85955 1.12126 2.25007L6.41416 7.54297Z"
//                             fill="#E50808"
//                         />
//                     </svg>
//                 </button>
//                 <div className="su-z-10 su-hidden group-[.open]:su-block su-overflow-y-auto su-absolute su-border-t-0 su-border su-border-gray su-w-full su-bg-white su-rounded-b su-top-full">
//                     <ul className="su-z-10 c-list su-max-h-[209px] su-overflow-y-auto su-p-0 su-list-none">
//                         <li role="button" data-value="" className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light">
//                             ${cfg.statusFilterDefault}
//                         </li>
//                         ${listView}
//                     </ul>
//                 </div>
//             </div>
//         </div>`;
//     },
//     getFormattedFacet: (facets) => {
//         // Loop through facets :: And find CP Facet
//         const statusFacetArr = facets.filter((el) => {
//             const facetName = el.name;
//             if (facetName === 'hubStatus') {
//                 return true;
//             }
//             return false;
//         });

//         if (statusFacetArr.length === 0) {
//             return false;
//         }
//         const statusFacet = statusFacetArr[0];

//         // Labels map with friendly names
//         const labelsMap = contentHubGlobals.defaultValues.statuses;

//         // Get formatted version of Content Partners Facet :: without selected values
//         const facetsOutput = [];
//         for (let i in statusFacet.allValues) {
//             const thisFacet = statusFacet.allValues[i];

//             // Fix Toggle URL
//             let thisToggle = thisFacet.toggleUrl.split('&profile=')[0];
//             thisToggle = decodeURI(thisToggle);
//             thisToggle = thisToggle.split('f.hubStatus|hubStatus=')[1];
//             thisToggle = 'f.hubStatus|hubStatus=' + thisToggle;

//             if (thisToggle.indexOf('?') > -1) {
//                 thisToggle = '&' + thisToggle;
//             } else {
//                 thisToggle = '?' + thisToggle;
//             }

//             // Map label name
//             const thisLabel = thisFacet.label;
//             const mappedLabel = labelsMap[thisLabel] || thisLabel;

//             facetsOutput.push({
//                 label: mappedLabel,
//                 count: thisFacet.count,
//                 toggleUrl: thisToggle,
//                 selected: thisFacet.selected,
//             });
//         }

//         // Return selected items
//         return facetsOutput;
//     },
//     optionsView: (facet, cfg) => {
//         let optionsList = [];
//         facet.forEach((el) => {
//             const thisName = el.label;
//             const thisValue = el.toggleUrl.split('=')[1];

//             if (el.selected === true) {
//                 optionsList.push(`<option value="${thisValue}" selected="selected">${thisName}</option>`);
//             } else {
//                 optionsList.push(`<option value="${thisValue}">${thisName}</option>`);
//             }
//         });

//         return optionsList.join('\n');
//     },
//     listView: (facet, cfg) => {
//         let listOutput = [];
//         const currentlySelected = contentHubGlobals.getStatusesFilter.getCurrentStatus(facet);

//         facet.forEach((el) => {
//             const thisName = el.label;
//             const thisValue = el.toggleUrl.split('=')[1];

//             listOutput.push(`
//             <li role="button" data-value="${thisValue}" className="${
//                 el.selected ? 'su-opacity-50 su-pointer-events-none ' : ''
//             }su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light">
//                 ${thisName}
//             </li>`);
//         });

//         return listOutput.join('\n');
//     },
//     getCurrentStatus: (facet) => {
//         let selectedEl = {name: '', value: ''};

//         facet.forEach((el) => {
//             const thisName = el.label;
//             const thisValue = el.toggleUrl.split('=')[1];

//             if (el.selected === true) {
//                 selectedEl = {name: thisName, value: thisValue};
//             }
//         });

//         return selectedEl;
//     },
//     showNoResults: (cfg, wrapperClass) => {
//         return `
//         <label for="status-filter" className="su-block su-text-18 su-font-bold su-leading-[2] su-mb-10">${cfg.statusFilterLabel}</label>
//         <div className="c-select su-min-w-full ${wrapperClass}">
//             <select className="su-opacity-0 su-float-right su-border-0 su-w-0 su-h-0 su-p-0 su-m-0" name="${cfg.statusFilterName}" id="status-filter">
//                 <option value="">${cfg.statusFilterDefault}</option>
//             </select>
//             <div className="c-wrapper su-relative su-group">
//                 <button
//                     className="c-button su-transition-none group-[.open]:su-mb-1 group-[.open]:su-border-b-transparent group-[.open]:su-rounded-b-none su-leading-[3.6rem] su-pr-20 su-w-full su-text-18 su-flex su-items-center su-justify-between su-text-left su-bg-white su-font-regular hover:su-bg-white hover:su-border-gray hover:su-text-black"
//                 >
//                     <span className="su-mr-10">${cfg.statusFilterDefault}</span>
//                     <svg className="su-inline group-[.open]:su-rotate-180" xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 12 8" fill="none">
//                         <path
//                             fill-rule="evenodd"
//                             clip-rule="evenodd"
//                             d="M6.41416 7.54297L11.7071 2.25007C12.0976 1.85954 12.0976 1.22638 11.7071 0.835856L11.6213 0.750069C11.2307 0.359544 10.5976 0.359545 10.207 0.75007L4.91416 6.04297L6.41416 7.54297Z"
//                             fill="#E50808"
//                         />
//                         <path
//                             fill-rule="evenodd"
//                             clip-rule="evenodd"
//                             d="M6.41416 7.54297L7.91416 6.04297L2.62126 0.750069C2.23074 0.359544 1.59757 0.359545 1.20705 0.75007L1.12126 0.835857C0.730738 1.22638 0.730738 1.85955 1.12126 2.25007L6.41416 7.54297Z"
//                             fill="#E50808"
//                         />
//                     </svg>
//                 </button>
//                 <div className="su-z-10 su-hidden group-[.open]:su-block su-overflow-y-auto su-absolute su-border-t-0 su-border su-border-gray su-w-full su-bg-white su-rounded-b su-top-full">
//                     <ul className="su-z-10 c-list su-max-h-[209px] su-overflow-y-auto su-p-0 su-list-none">
//                         <li role="button" data-value="" className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light">
//                             ${cfg.statusFilterDefault}
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>`;
//     },
// };
