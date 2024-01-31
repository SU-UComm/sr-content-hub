import React, {useState, useRef, useEffect} from 'react';

export const CPFilter = (props) => {
    const [selectedPartner, setSelectedPartner] = useState('');
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);
    const [statusOptions, setStatusOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // Loader flag
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (value, partner) => {
        setSelectedPartner(value);
        handleClose();
        // console.log('CP FILTER partner: ', partner.toggleUrl);
        props.onChange('CP', partner.toggleUrl);
    };

    const onInputChange = (e) => {
        const inputValue = e.target.value;
        setSearchInput(inputValue);
        const filteredOptions = props.facets.filter((partner) => partner.label.replace(/&amp;/g, '&').toLowerCase().includes(inputValue.toLowerCase()));
        setStatusOptions(filteredOptions);
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
        if (props.facets) {
            setStatusOptions(props.facets);
            setIsLoading(false);
        } else {
            setIsLoading(true);
        }
    }, [props.facets]);

    return (
        !isLoading && (
            <div className="c-select c-select--search su-min-w-full">
                <select
                    className="su-opacity-0 su-float-right su-border-0 su-w-0 su-h-0 su-p-0 su-m-0"
                    name="f.contentPartner%7CtaxonomyContentPartnerText"
                    id="cp-filter"
                    value={selectedPartner}
                    // onChange={(e) => handleChange(e.target.value, e)}
                >
                    <option value="">-- Choose Content Partner --</option>
                    {statusOptions.map((partner) => (
                        <option key={partner.label} value={partner.label}>
                            {partner.label}
                        </option>
                    ))}
                </select>
                <div ref={wrapperRef} className={`c-wrapper su-relative su-group ${open ? 'open' : ''}`}>
                    <button
                        className="c-button su-transition-none group-[.open]:su-mb-1 group-[.open]:su-border-b-transparent group-[.open]:su-rounded-b-none su-leading-[3.6rem] su-pr-20 su-w-full su-text-18 su-flex su-items-center su-justify-between su-text-left su-bg-white su-font-regular hover:su-bg-white hover:su-border-gray hover:su-text-black"
                        aria-expanded={open}
                        onClick={handleOpen}
                    >
                        <span className="su-mr-10 su-line-clamp-1">{selectedPartner || '-- Choose Content Partner --'}</span>
                        <img className="su-inline su-ml-6" alt="" src={require('images/chevron-down.svg')} />
                    </button>
                    <div className="su-z-10 su-hidden group-[.open]:su-block su-overflow-y-auto su-absolute su-border-t-0 su-border su-border-gray su-w-full su-bg-white su-rounded-b su-top-full">
                        <div className="su-leading-[3.6rem] su-px-8 su-pt-4 su-pb-8">
                            <input
                                className="su-w-full su-rounded su-border-gray su-text-18 su-py-8 focus:su-border-red focus:su-ring-red"
                                placeholder="Search"
                                type="text"
                                name="cp-search"
                                id="cp-search"
                                value={searchInput}
                                onChange={onInputChange}
                            />
                        </div>
                        <ul className="su-z-10 c-list su-max-h-[209px] su-overflow-y-auto su-p-0 su-list-none">
                            {statusOptions.map((partner) => (
                                <li
                                    key={partner.label}
                                    data-value={partner.data}
                                    role="button"
                                    className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light"
                                    tabIndex="0"
                                    onClick={(e) => handleChange(partner.label, partner)}
                                >
                                    {partner.label.replace(/&amp;/g, '&')}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    );
};
