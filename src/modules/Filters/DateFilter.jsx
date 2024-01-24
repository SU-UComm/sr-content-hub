import React, {useState, useRef, useEffect} from 'react';

export const DateRangeFilter = (facets) => {
    const [selectedRange, setSelectedRange] = useState('');
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);
    const [statusOptions, setStatusOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Loader flag

    const handleRangeChange = (value) => {
        setSelectedRange(value);
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
            console.log('DATE OPTIONS', facets.facets);
        } else {
            setIsLoading(true);
        }
    }, [facets]);

    return (
        !isLoading && (
            <div className="su-flex-[calc(100%/3)_1_1]">
                <label htmlFor="date-filter" className="su-block su-text-18 su-font-bold su-leading-[2] su-mb-10">
                    Date Range
                </label>
                <div className="c-select su-min-w-full">
                    <select
                        className="su-opacity-0 su-float-right su-border-0 su-w-0 su-h-0 su-p-0 su-m-0"
                        name="f.date|d"
                        id="date-filter"
                        value={selectedRange}
                        onChange={(e) => handleRangeChange(e.target.value)}
                    >
                        {statusOptions.map((option) => (
                            <option key={option.label} value={option.label}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <div className={`c-wrapper su-relative su-group ${open ? 'open' : ''}`} ref={wrapperRef}>
                        <button
                            className="c-button su-transition-none group-[.open]:su-mb-1 group-[.open]:su-border-b-transparent group-[.open]:su-rounded-b-none su-leading-[3.6rem] su-pr-20 su-w-full su-text-18 su-flex su-items-center su-justify-between su-text-left su-bg-white su-font-regular hover:su-bg-white hover:su-border-gray hover:su-text-black"
                            aria-expanded="false"
                            onClick={handleOpen}
                        >
                            <span className="su-mr-10">{selectedRange ? statusOptions.find((opt) => opt.label === selectedRange)?.label : 'All'}</span>
                            <img className="su-inline su-ml-6" alt="" src={require('images/chevron-down.svg')} />
                        </button>
                        <div className="su-z-10 su-hidden group-[.open]:su-block su-overflow-y-auto su-absolute su-border-t-0 su-border su-border-gray su-w-full su-bg-white su-rounded-b su-top-full">
                            <ul className="su-z-10 c-list su-max-h-[209px] su-overflow-y-auto su-p-0 su-list-none">
                                {statusOptions.map((option) => (
                                    <li
                                        key={option.label}
                                        role="button"
                                        data-value={option.label}
                                        className={`su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light ${
                                            option.label === selectedRange ? 'su-bg-gray-light' : ''
                                        }`}
                                        tabIndex="-1"
                                        onClick={() => handleRangeChange(option.label)}
                                    >
                                        {option.label}
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
