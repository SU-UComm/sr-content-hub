import React, {useState, useRef, useEffect} from 'react';

export const StatusFilter = (filterType) => {
    const [selectedStatus, setSelectedStatus] = useState('');
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    const statusOptions = [
        {value: '', label: 'All'},
        {value: 'submitted', label: 'Submitted'},
        {value: 'reviewed', label: 'Reviewed'},
        {value: 'sent-to-sr', label: 'Publishing soon on Stanford Report'},
        {value: 'published', label: 'Published on Stanford Report'},
    ];

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

        // Attach the event listener when the component mounts
        document.addEventListener('click', handleClickOutside);

        // Detach the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
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
                            {option.label}
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
                        <svg className="su-inline group-[.open]:su-rotate-180" xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 12 8" fill="none">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.41416 7.54297L11.7071 2.25007C12.0976 1.85954 12.0976 1.22638 11.7071 0.835856L11.6213 0.750069C11.2307 0.359544 10.5976 0.359545 10.207 0.75007L4.91416 6.04297L6.41416 7.54297Z"
                                fill="#E50808"
                            ></path>
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.41416 7.54297L7.91416 6.04297L2.62126 0.750069C2.23074 0.359544 1.59757 0.359545 1.20705 0.75007L1.12126 0.835857C0.730738 1.22638 0.730738 1.85955 1.12126 2.25007L6.41416 7.54297Z"
                                fill="#E50808"
                            ></path>
                        </svg>
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
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
