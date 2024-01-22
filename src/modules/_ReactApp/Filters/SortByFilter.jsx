import React, {useState} from 'react';

export const SortByFilter = (props) => {
    const cfg = props.cfg;
    const [currentSort, setCurrentSort] = useState('');
    const [currentSortLabel, setCurrentSortLabel] = useState('');
    const [optionsViewHtml, setOptionsView] = useState('');
    const [listViewHtml, setListView] = useState('');
    let inputValues;

    // useEffect(() => {
    if (typeof cfg === 'undefined') {
        return '<!-- SortBy: CFG is missing -->';
    }
    if (inputValues === undefined) {
        inputValues = {
            dmetamtxCreated: 'Newest to Oldest',
            metamtxCreated: 'Oldest to Newest',
        };
    }
    // }, []);

    // // Get currenlty used Sort parameter
    // const currentSort = getCurrentSort(cfg.queryString);

    // // Define default sort
    // let currentSortLabel = inputValues[currentSort] || 'Newest to Oldest';

    // // Generate options view
    // const optionsView = optionsView(inputValues, currentSort);

    // // Get list view
    // const listView = listView(inputValues, currentSort);

    const optionsView = (inputValues, currentSort) => {
        let optionsOutput = [];

        for (let key in inputValues) {
            const selected = key === currentSort ? true : false;
            if (selected === true) {
                optionsOutput.push(`<option value="${key}" selected="selected">${inputValues[key]}</option>`);
            } else {
                optionsOutput.push(`<option value="${key}">${inputValues[key]}</option>`);
            }
        }

        return optionsOutput.join('\n');
    };
    const listView = (inputValues, currentSort) => {
        let listOutput = [];

        for (let key in inputValues) {
            const selected = key === currentSort ? true : false;

            listOutput.push(`
            <li role="button" data-value="${key}" class="${
                selected ? 'su-pointer-events-none su-opacity-50' : ''
            } su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-px-15 hover:su-cursor-pointer hover:su-bg-gray-light">
                ${inputValues[key]}
            </li>
            `);
        }

        return listOutput.join('\n');
    };

    const getQueryStringParams = (query) => {
        return query
            ? (/^[?#]/.test(query) ? query.slice(1) : query).split('&').reduce((params, param) => {
                  let [key, value] = param.split('=');
                  params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
                  return params;
              }, {})
            : {};
    };

    const getCurrentSort = (query) => {
        const paramsList = getQueryStringParams(query);
        // Get sort param
        // Get currenlty used Sort parameter
        const currentSort = paramsList['sort'] || '';
        setCurrentSort(currentSort);

        // Define default sort
        let currentSortLabel = inputValues[currentSort] || 'Newest to Oldest';
        setCurrentSortLabel(currentSortLabel);

        // Generate options view
        const optionsViewHtml = optionsView(inputValues, currentSort);
        setOptionsView(optionsViewHtml);

        // Get list view
        const listViewHtml = listView(inputValues, currentSort);
        setListView(listViewHtml);
        // return paramsList['sort'] || '';
    };

    return (
        <div className="su-flex-[calc(100%/3)_1_1]">
            <button onClick={() => getCurrentSort(props.cfg.queryString)}>check</button>
            <div className="su-flex su-gap-xs su-items-center">
                <label htmlFor="sort-by-filter" className="su-text-[18px]">
                    {props.cfg.sortByLabel}
                </label>
                <div className="c-select su-min-w-[180px] su-grow su-shrink-0">
                    <select className="su-opacity-0 su-float-right su-border-0 su-w-0 su-h-0 su-p-0 su-m-0" name="sort" id="sort-by-filter">
                        {optionsViewHtml}
                    </select>
                    <div className="c-wrapper su-relative su-group">
                        <button className="c-button group-[.open]:su-mb-1 group-[.open]:su-border-b-0 group-[.open]:su-rounded-b-none su-py-0 su-leading-[3.6rem] su-pr-15 su-w-full su-text-18 su-flex su-items-center su-justify-between su-text-left su-bg-white su-font-regular hover:su-bg-white hover:su-border-gray hover:su-text-black">
                            <span className="su-mr-10 su-line-clamp-1">{currentSortLabel}</span>
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
                        <ul
                            className="su-z-10 c-list su-hidden group-[.open]:su-block su-max-h-[209px] su-overflow-y-auto su-absolute su-border-t-0 su-p-0 su-border su-border-gray su-w-full su-bg-white su-rounded-b su-top-full
                    su-list-none"
                        >
                            {listViewHtml}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
