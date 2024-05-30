import React, {useState, useRef, useEffect} from 'react';
import {PropTypes} from 'prop-types';

export const SortByFilter = (props) => {
    const [selectedRange, setSelectedRange] = useState(props.selectedValue);
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    const handleChange = (value, e) => {
        setSelectedRange(value);
        handleClose();
        let type = e.target.value == 1 ? 'dmetamtxCreated' : 'metamtxCreated';
        props.onChange('sortBy', type);
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

    return (
        <div className="su-flex su-gap-xs su-items-center">
            <label htmlFor="sort-by-filter" className="su-text-[18px]">
                Sort By
            </label>
            <div className="c-select su-min-w-[180px] su-grow su-shrink-0">
                <select
                    className="su-opacity-0 su-float-right su-border-0 su-w-0 su-h-0 su-p-0 su-m-0"
                    name="sort"
                    id="sort-by-filter"
                    value={selectedRange}
                    onChange={(e) => handleChange(e.target.value, e)}
                >
                    <option value="dmetamtxCreated">Newest to Oldest</option>
                    <option value="metamtxCreated">Oldest to Newest</option>
                </select>
                <div className="c-wrapper su-relative su-group" ref={wrapperRef}>
                    <button
                        className="c-button group-[.open]:su-mb-1 group-[.open]:su-border-b-0 group-[.open]:su-rounded-b-none su-py-0 su-leading-[3.6rem] su-pr-15 su-w-full su-text-18 su-flex su-items-center su-justify-between su-text-left su-bg-white su-font-regular hover:su-bg-white hover:su-border-gray hover:su-text-black"
                        aria-expanded={open}
                        onClick={handleOpen}
                    >
                        <span className="su-mr-10 su-line-clamp-1">{selectedRange}</span>
                        <img className="su-inline su-ml-6" alt="" src={require('images/chevron-down.svg')} />
                    </button>
                    <ul
                        className={`su-z-10 c-list ${
                            open ? 'su-block' : 'su-hidden'
                        } su-max-h-[209px] su-overflow-y-auto su-absolute su-border-t-0 su-p-0 su-border su-border-gray su-w-full su-bg-white su-rounded-b su-top-full su-list-none`}
                    >
                        <li
                            role="button"
                            value={1}
                            data-value="dmetamtxCreated"
                            className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-px-15 hover:su-cursor-pointer hover:su-bg-gray-light"
                            onClick={(e) => handleChange('Newest to Oldest', e)}
                        >
                            Newest to Oldest
                        </li>

                        <li
                            role="button"
                            value={2}
                            data-value="metamtxCreated"
                            className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-px-15 hover:su-cursor-pointer hover:su-bg-gray-light"
                            onClick={(e) => handleChange('Oldest to Newest', e)}
                        >
                            Oldest to Newest
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

SortByFilter.propTypes = {
    onChange: PropTypes.func,
    selectedValue: PropTypes.func,
};
