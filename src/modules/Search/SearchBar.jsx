import React, {useState, useRef, useEffect} from 'react';
import {getSearchData} from '../Helpers/requests';

export const SearchBar = (pageName) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([]); // data from endpoint

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('click', pageName.pageName);
        let page = pageName.pageName;
        // You can perform any additional logic here before calling onSearch

        let res = getSearchData(page, searchQuery);
        setData(res);
        console.log('Search bar data on submit:', res);
    };

    return (
        <form id="all-content" className="su-flex su-justify-center su-items-center su-gap-xs su-mb-80" action="?" method="get" onSubmit={handleSubmit}>
            <input
                type="text"
                name="query"
                id="search"
                placeholder="Search Content from over 20 content partners"
                className="su-w-full su-max-w-[540px] su-text-18 sm:su-text-22 md:su-text-25 su-bg-transparent su-leading-display su-px-20 su-pt-12 su-pb-18 su-text-gray-dark su-border-2 su-border-transparent su-border-b-2 su-border-b-gray focus:su-ring-0 focus:su-border-gray focus:su-shadow-none su-shadow-transparent focus:su-outline-none"
                autoComplete="off"
                value={searchQuery}
                onChange={handleInputChange}
                aria-label="content search"
            />

            <button className="su-bg-transparent su-p-0 su-border-none hover:su-bg-transparent hover:su-border-none" type="submit" aria-label="submit">
                <span className="sr-only">Search</span>
                <img className="su-bg-red su-p-7 su-rounded-full" src="https://sug-web.matrix.squiz.cloud/__data/assets/file/0023/31982/search.svg" alt="" />
            </button>
        </form>
    );
};
