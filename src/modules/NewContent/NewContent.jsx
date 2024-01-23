import React from 'react';
import {HomeHeading} from '../Home/HomeHeading.jsx';

export const NewContent = () => {
    return (
        <div className="su-col-span-full xl:su-col-start-2 xl:su-col-span-10">
            <HomeHeading headingText={window?.data?.texts?.newcontent?.headingText} subHeadingText={window?.data?.texts?.newcontent?.subHeadingText} />
            <section>
                <div className="su-mb-20">
                    {/* <!-- CP Select --> */}

                    <label htmlFor="cp-filter" className="su-block su-text-18 su-font-bold su-leading-[2] su-mb-10">
                        Content partners
                    </label>

                    <div className="su-w-full md:su-w-1/2">
                        <div className="c-select c-select--search su-min-w-full">
                            <select
                                className="su-opacity-0 su-float-right su-border-0 su-w-0 su-h-0 su-p-0 su-m-0"
                                name="f.contentPartner%7CtaxonomyContentPartnerText"
                                id="cp-filter"
                            >
                                <option value="Cardinal at Work">Cardinal at Work</option>
                                <option value="Center for Advanced Study in the Behavioral Sciences">Center for Advanced Study in the Behavioral Sciences</option>
                                <option value="Center for Ocean Solutions">Center for Ocean Solutions</option>
                                <option value="ChEM-H">ChEM-H</option>
                                <option value="Environmental Health &amp; Safety">Environmental Health &amp; Safety</option>
                                <option value="Graduate School of Business">Graduate School of Business</option>
                                <option value="Haas Center for Public Service">Haas Center for Public Service</option>
                                <option value="John S. Knight Journalism Fellowships">John S. Knight Journalism Fellowships</option>
                                <option value="King Center on Global Development">King Center on Global Development</option>
                                <option value="Office of the Provost">Office of the Provost</option>
                                <option value="School of Engineering">School of Engineering</option>
                                <option value="School of Medicine">School of Medicine</option>
                                <option value="Stanford Doerr School of Sustainability">Stanford Doerr School of Sustainability</option>
                                <option value="Stanford Law School">Stanford Law School</option>
                                <option value="STANFORD magazine">STANFORD magazine</option>
                                <option value="Sustainable Stanford">Sustainable Stanford</option>
                            </select>
                            <div className="c-wrapper su-relative su-group">
                                <button className="c-button su-transition-none group-[.open]:su-mb-1 group-[.open]:su-border-b-transparent group-[.open]:su-rounded-b-none su-leading-[3.6rem] su-pr-20 su-w-full su-text-18 su-flex su-items-center su-justify-between su-text-left su-bg-white su-font-regular hover:su-bg-white hover:su-border-gray hover:su-text-black">
                                    <span className="su-mr-10 su-line-clamp-1">-- Choose Content Partner --</span>
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
                                        <li
                                            data-value="Cardinal at Work"
                                            role="button"
                                            className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light"
                                        >
                                            Cardinal at Work
                                        </li>

                                        <li
                                            data-value="Center for Advanced Study in the Behavioral Sciences"
                                            role="button"
                                            className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light"
                                        >
                                            Center for Advanced Study in the Behavioral Sciences
                                        </li>

                                        <li
                                            data-value="Center for Ocean Solutions"
                                            role="button"
                                            className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light"
                                        >
                                            Center for Ocean Solutions
                                        </li>

                                        <li
                                            data-value="ChEM-H"
                                            role="button"
                                            className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light"
                                        >
                                            ChEM-H
                                        </li>

                                        <li
                                            data-value="Environmental Health &amp; Safety"
                                            role="button"
                                            className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light"
                                        >
                                            Environmental Health &amp; Safety
                                        </li>

                                        <li
                                            data-value="Graduate School of Business"
                                            role="button"
                                            className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light"
                                        >
                                            Graduate School of Business
                                        </li>

                                        <li
                                            data-value="Haas Center for Public Service"
                                            role="button"
                                            className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light"
                                        >
                                            Haas Center for Public Service
                                        </li>

                                        <li
                                            data-value="John S. Knight Journalism Fellowships"
                                            role="button"
                                            className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light"
                                        >
                                            John S. Knight Journalism Fellowships
                                        </li>

                                        <li
                                            data-value="King Center on Global Development"
                                            role="button"
                                            className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light"
                                        >
                                            King Center on Global Development
                                        </li>

                                        <li
                                            data-value="Office of the Provost"
                                            role="button"
                                            className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light"
                                        >
                                            Office of the Provost
                                        </li>

                                        <li
                                            data-value="School of Engineering"
                                            role="button"
                                            className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light"
                                        >
                                            School of Engineering
                                        </li>

                                        <li
                                            data-value="School of Medicine"
                                            role="button"
                                            className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light"
                                        >
                                            School of Medicine
                                        </li>

                                        <li
                                            data-value="Stanford Doerr School of Sustainability"
                                            role="button"
                                            className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light"
                                        >
                                            Stanford Doerr School of Sustainability
                                        </li>

                                        <li
                                            data-value="Stanford Law School"
                                            role="button"
                                            className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light"
                                        >
                                            Stanford Law School
                                        </li>

                                        <li
                                            data-value="STANFORD magazine"
                                            role="button"
                                            className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light"
                                        >
                                            STANFORD magazine
                                        </li>

                                        <li
                                            data-value="Sustainable Stanford"
                                            role="button"
                                            className="su-leading-[3.6rem] su-block su-text-18 su-mb-0 su-py-8 su-pl-15 su-pr-20 hover:su-cursor-pointer hover:su-bg-gray-light"
                                        >
                                            Sustainable Stanford
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Selected Items -->
            <!-- No Selected Filters --> */}
                </div>
            </section>
        </div>
    );
};
