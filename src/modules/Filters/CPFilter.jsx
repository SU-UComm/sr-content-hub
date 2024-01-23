import React, {useState, useRef, useEffect} from 'react';

export const CPFilter = () => {
    const [selectedPartner, setSelectedPartner] = useState('');
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    const partners = [
        'BeWell',
        'Bill Lane Center for the American West',
        'Board of Trustees',
        'Cardinal at Work',
        'Center for Advanced Study in the Behavioral Sciences',
        'Center for Ocean Solutions',
        'ChEM-H',
        'Environmental Health & Safety',
        'Graduate School of Business',
        'Haas Center for Public Service',
        'John S. Knight Journalism Fellowships',
        'King Center on Global Development',
        'Office of the Provost',
        'School of Engineering',
        'School of Medicine',
        'Stanford Center for Innovation in Global Health',
        'Stanford Doerr School of Sustainability',
        'Stanford Law School',
        'STANFORD magazine',
        'Sustainable Stanford',
    ];

    const handleChange = (value) => {
        setSelectedPartner(value);
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

    return (
        <div className="su-flex-[calc(100%/3)_1_1]">
            <label htmlFor="cp-filter" className="su-block su-text-18 su-font-bold su-leading-[2] su-mb-10">
                Content partners
            </label>

            <div className="undefined">
                <div className="c-select c-select--search su-min-w-full">
                    <select
                        className="su-opacity-0 su-float-right su-border-0 su-w-0 su-h-0 su-p-0 su-m-0"
                        name="f.contentPartner%7CtaxonomyContentPartnerText"
                        id="cp-filter"
                        value={selectedPartner}
                        onChange={(e) => handleChange(e.target.value)}
                    >
                        <option value="">-- Choose Content Partner --</option>
                        {partners.map((partner) => (
                            <option key={partner} value={partner}>
                                {partner}
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
                            <div className="su-leading-[3.6rem] su-px-8 su-pt-4 su-pb-8">
                                <input
                                    className="su-w-full su-rounded su-border-gray su-text-18 su-py-8 focus:su-border-red focus:su-ring-red"
                                    placeholder="Search"
                                    type="text"
                                    name="cp-search"
                                    id="cp-search"
                                />
                            </div>
                            <ul className="su-z-10 c-list su-max-h-[209px] su-overflow-y-auto su-p-0 su-list-none">
                                {partners.map((partner) => (
                                    <li
                                        key={partner}
                                        data-value={partner}
                                        role="button"
                                        className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light"
                                        tabIndex="0"
                                        onClick={() => handleChange(partner)}
                                    >
                                        {partner}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
