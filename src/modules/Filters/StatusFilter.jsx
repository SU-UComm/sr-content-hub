import React, {useState, useRef, useEffect} from 'react';

export const StatusFilter = (facets) => {
    const [selectedStatus, setSelectedStatus] = useState('');
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);
    const [statusOptions, setStatusOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Loader flag

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

        console.log('FORMATTED facetsOutput', facetsOutput);
        // setFacets(facetsOutput);

        return facetsOutput;
    };

    const handleStatusChange = (value) => {
        setSelectedStatus(value);
        handleClose();
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                handleClose();
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (facets) {
            setStatusOptions(facets.facets);
            setIsLoading(false);
            getFormattedFacet(facets.facets);
        } else {
            setIsLoading(true);
        }
    }, [facets]);

    const getLabel = (value) => {
        let label = value;
        if (value == 'sent-to-sr') {
            label = 'Publishing soon on Stanford Report';
        } else if (value == 'published') {
            label = 'Published on Stanford Report';
        } else if (value == '') {
            label = 'All';
        } else {
            label = value[0].toUpperCase() + value.substring(1);
        }
        return label;
    };

    return (
        !isLoading && (
            <div className="su-flex-[calc(100%/3)_1_1]">
                <label htmlFor="status-filter" className="su-block su-text-18 su-font-bold su-leading-[2] su-mb-10">
                    Status
                </label>
                <div className="c-select su-min-w-full">
                    <select
                        className="su-opacity-0 su-float-right su-border-0 su-w-0 su-h-0 su-p-0 su-m-0"
                        name="f.hubStatus|hubStatus"
                        id="status-filter"
                        value={selectedStatus}
                        onChange={(e) => handleStatusChange(e.target.value)}
                    >
                        {statusOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {getLabel(option.label)}
                            </option>
                        ))}
                    </select>
                    <div ref={wrapperRef} className={`c-wrapper su-relative su-group ${open ? 'open' : ''}`}>
                        <button
                            className="c-button su-transition-none group-[.open]:su-mb-1 group-[.open]:su-border-b-transparent group-[.open]:su-rounded-b-none su-leading-[3.6rem] su-pr-20 su-w-full su-text-18 su-flex su-items-center su-justify-between su-text-left su-bg-white su-font-regular hover:su-bg-white hover:su-border-gray hover:su-text-black"
                            aria-expanded="false"
                            onClick={handleOpen}
                        >
                            <span className="su-mr-10">{selectedStatus ? statusOptions.find((opt) => opt.value === selectedStatus)?.label : 'All'}</span>
                            <img className="su-inline su-ml-6" alt="" src={require('images/chevron-down.svg')} />
                        </button>
                        <div className="su-z-10 su-hidden group-[.open]:su-block su-overflow-y-auto su-absolute su-border-t-0 su-border su-border-gray su-w-full su-bg-white su-rounded-b su-top-full">
                            <ul className="su-z-10 c-list su-max-h-[209px] su-overflow-y-auto su-p-0 su-list-none">
                                {statusOptions.map((option) => (
                                    <li
                                        key={option.value}
                                        role="button"
                                        data-value={option.value}
                                        className={`su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light ${
                                            option.value === selectedStatus ? 'su-bg-gray-light' : ''
                                        }`}
                                        tabIndex="-1"
                                        onClick={() => handleStatusChange(option.value)}
                                    >
                                        {getLabel(option.label)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

// const getFormattedFacet = (facets) => {
//     // Loop through facets :: And find CP Facet
//     const statusFacetArr = facets.filter((el) => {
//         const facetName = el.name;
//         if (facetName === 'hubStatus') {
//             return true;
//         }
//         return false;
//     });

//     if (statusFacetArr.length === 0) {
//         return false;
//     }
//     const statusFacet = statusFacetArr[0];

//     // Labels map with friendly names
//     const labelsMap = contentHubGlobals.defaultValues.statuses;

//     // Get formatted version of Content Partners Facet :: without selected values
//     const facetsOutput = [];
//     for (let i in statusFacet.allValues) {
//         const thisFacet = statusFacet.allValues[i];

//         // Fix Toggle URL
//         let thisToggle = thisFacet.toggleUrl.split('&profile=')[0];
//         thisToggle = decodeURI(thisToggle);
//         thisToggle = thisToggle.split('f.hubStatus|hubStatus=')[1];
//         thisToggle = 'f.hubStatus|hubStatus=' + thisToggle;

//         if (thisToggle.indexOf('?') > -1) {
//             thisToggle = '&' + thisToggle;
//         } else {
//             thisToggle = '?' + thisToggle;
//         }

//         // Map label name
//         const thisLabel = thisFacet.label;
//         const mappedLabel = labelsMap[thisLabel] || thisLabel;

//         facetsOutput.push({
//             label: mappedLabel,
//             count: thisFacet.count,
//             toggleUrl: thisToggle,
//             selected: thisFacet.selected,
//         });
//     }

//     // Return selected items
//     return facetsOutput;
// };
