import React, {useState} from 'react';

export const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');
    return (
        <form
            id="all-content"
            className="su-flex su-justify-center su-items-center su-gap-xs"
            action="?"
            method="get"
            onSubmit={(e) => {
                e.preventDefault();
                console.log('submit', searchValue);
            }}
        >
            <input
                type="text"
                name="query"
                id="search"
                placeholder="Search Content from over 20 content partners"
                className="su-w-full su-max-w-[540px] su-text-18 sm:su-text-22 md:su-text-25 su-bg-transparent su-leading-display su-px-20 su-pt-12 su-pb-18 su-text-gray-dark su-border-2 su-border-transparent su-border-b-2 su-border-b-gray focus:su-ring-0 focus:su-border-gray focus:su-shadow-none su-shadow-transparent focus:su-outline-none"
                autoComplete="off"
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value);
                }}
                aria-label="content search"
            />

            <button className="su-bg-transparent su-p-0 su-border-none hover:su-bg-transparent hover:su-border-none" type="submit" aria-label="submit">
                <span className="sr-only">Search</span>
                <img className="su-bg-red su-p-7 su-rounded-full" src="https://sug-web.matrix.squiz.cloud/__data/assets/file/0023/31982/search.svg" alt="" />
            </button>
        </form>
    );
};
