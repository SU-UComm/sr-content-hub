import React, {useState, useEffect} from 'react';
import {PropTypes} from 'prop-types';
import {getLabel} from '../Helpers/helperFunctions';

export const SelectedFacets = (props) => {
    // const [facets, setFacets] = useState([]);
    const [selectedFacets, setSelectedFacets] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // Loader flag

    const onClick = (facet) => {
        props.onChange('unselect', facet.toggleUrl, facet.facetName);
    };
    const getSelected = (facets) => {
        // Generate output object
        let selectedItems = [];

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
                        // const thisToggle = thisFacet.toggleUrl.split('profile=')[0];
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

        if (props.page == 'newContent') {
            selectedItems = selectedItems.filter((entry) => entry.facetName !== 'hubStatus');
        }

        if (props.page == 'myContent') {
            selectedItems = selectedItems.filter((entry) => entry.facetName !== 'contentPartner');
        }

        return selectedItems;
    };

    useEffect(() => {
        if (props.facets) {
            // setFacets(props.facets);
            setIsLoading(false);
            // console.log('facets selected Data: ', props.facets);
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
                            name={facet.name}
                            key={i}
                            onClick={() => onClick(facet)}
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
                            {getLabel(facet.displayName)} ({facet.count})
                        </button>
                    ))}
            </div>
        )
    );
};

SelectedFacets.propTypes = {
    facets: PropTypes.array,
    onChange: PropTypes.func,
    page: PropTypes.string,
};
