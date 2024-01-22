import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {HeaderLogo} from './HeaderLogo.jsx';

export const Header = () => {
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    const location = useLocation();
    const {pathname} = location;

    return (
        <header className="su-h-95 su-w-full su-fixed su-z-20">
            <div className="su-centered-container su-h-full su-flex">
                <HeaderLogo />
                <div className="su-bg-black su-relative su-grow su-flex su-items-center su-justify-end xl:su-justify-between after:su-bg-black after:su-absolute after:su-h-full after:su-left-full after:su-w-screen">
                    <div className="su-hidden xl:su-flex su-items-center">
                        <ul className="su-p-0 su-m-0 su-mx-40 su-list-none su-flex su-gap-x-xl">
                            <li className={`${'su-mb-0 su-group'} ${pathname === '/' && 'active'}`}>
                                <Link
                                    to="/"
                                    className="su-text-white group-[.active]:su-border-b-red group-[.active]:su-border-b-3 focus:su-text-white hover:su-text-white hover:su-border-b-red hover:su-border-b-3 su-pb-3 su-font-semibold"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className={`${'su-mb-0 su-group'} ${pathname === '/newcontent' && 'active'}`}>
                                <Link
                                    to="newcontent"
                                    className="su-text-white group-[.active]:su-border-b-red group-[.active]:su-border-b-3 focus:su-text-white hover:su-text-white hover:su-border-b-red hover:su-border-b-3 su-pb-3 su-font-semibold"
                                >
                                    New Content
                                </Link>
                            </li>
                            <li className={`${'su-mb-0 su-group'} ${pathname === '/allcontent' && 'active'}`}>
                                <Link
                                    to="allcontent"
                                    className="su-text-white group-[.active]:su-border-b-red group-[.active]:su-border-b-3 focus:su-text-white hover:su-text-white hover:su-border-b-red hover:su-border-b-3 su-pb-3 su-font-semibold"
                                >
                                    All Content
                                </Link>
                            </li>
                            <li className={`${'su-mb-0 su-group'} ${pathname === '/insights' && 'active'}`}>
                                <Link
                                    to="insights"
                                    className="su-text-white group-[.active]:su-border-b-red group-[.active]:su-border-b-3 focus:su-text-white hover:su-text-white hover:su-border-b-red hover:su-border-b-3 su-pb-3 su-font-semibold"
                                >
                                    Insights
                                </Link>
                            </li>
                        </ul>

                        <a className="header-button su-group su-bg-gray-light su-flex su-items-center" href="https://sug-web.matrix.squiz.cloud/content/_admin">
                            <span>Go to Matrix</span>
                            <svg
                                className="su-ml-5 su-transition-colors su-text-red group-hover:su-text-white"
                                width="18"
                                height="18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#a)">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.918 4.546a.9.9 0 0 1 .9-.9h7.637a.9.9 0 0 1 .9.9v7.636a.9.9 0 0 1-1.8 0V6.718l-7.373 7.373a.9.9 0 1 1-1.273-1.272l7.373-7.373H5.818a.9.9 0 0 1-.9-.9Z"
                                        fill="currentColor"
                                    ></path>
                                </g>
                                <defs>
                                    <clipPath id="a">
                                        <path fill="#fff" d="M0 0h18v18H0z"></path>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>

                    <div className="su-hidden xl:su-flex su-text-white su-items-center" id="user-status" data-fullname={window?.data?.userName} data-uid={window?.data?.userid}>
                        <div className="su-flex su-flex-col">
                            <p className="su-font-semibold su-text-16 su-leading-display su-mb-0">Hi, {window?.data?.userName}</p>
                            <a
                                className="su-underline su-font-regular su-text-14 xl:su-self-end hover:su-cursor-pointer hover:su-text-white focus:su-text-white"
                                href="/?SQ_ACTION=logout"
                            >
                                Sign out
                            </a>
                        </div>
                        <div className="su-rounded-full su-flex su-mr-10 su-ml-10 su-items-center su-justify-center su-aspect-[1/1] su-w-38 su-h-38 su-border-3 su-font-bold su-border-red">
                            {window?.data?.userName?.[0]}
                        </div>
                    </div>

                    <div className="su-block xl:su-hidden">
                        <button
                            id="header-mobile-menu-toggle"
                            aria-label="Mobile Menu Toggle"
                            aria-expanded="false"
                            aria-controls="header-mobile-menu"
                            className="su-group su-bg-transparent su-border-none hover:su-bg-transparent hover:su-border-none focus:su-bg-transparent focus:su-border-none su-text-white hover:su-text-gray"
                            onClick={() => {
                                setMobileMenuVisible(!mobileMenuVisible);
                            }}
                        >
                            <svg className="su-block group-[.active]:su-hidden" aria-hidden="true" viewBox="0 0 100 80" width="30" height="30" fill="currentColor">
                                <rect width="100" height="8" rx="8"></rect>
                                <rect y="30" width="100" height="8" rx="8"></rect>
                                <rect y="60" width="100" height="8" rx="8"></rect>
                            </svg>
                            <svg
                                className="su-hidden group-[.active]:su-block"
                                aria-hidden="true"
                                width="30"
                                height="30"
                                viewBox="0 0 14 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="x">
                                    <path id="Vector" d="M12.0554 1.9502L1.94434 11.0502" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path
                                        id="Vector_2"
                                        d="M1.94434 1.9502L12.0554 11.0502"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div id="header-mobile-menu" aria-labelledby="header-mobile-menu-toggle" className={`xl:su-hidden su-shadow-xl su-bg-white ${!mobileMenuVisible && 'su-hidden'}`}>
                <div className="su-flex su-items-center su-px-16 su-py-12 su-font-bold su-border-b su-border-gray">
                    <div className="su-rounded-full su-flex su-mr-10 xl:su-mr-0 xl:su-ml-10 su-items-center su-justify-center su-aspect-[1/1] su-w-32 su-h-32 su-border-3 su-font-bold su-border-red">
                        {window?.data?.userName?.[0]}
                    </div>
                    <span>Hi, {window?.data?.userName}</span>
                </div>

                <ul className="su-m-0 su-p-0 su-list-none su-flex su-flex-col su-z-20">
                    <li className="su-mb-0 su-group ">
                        <Link
                            to="/"
                            className="su-inline-block su-w-full su-px-16 su-py-12 su-font-semibold hover:su-bg-gray/20"
                            tabIndex="-1"
                            onClick={() => {
                                setMobileMenuVisible(false);
                            }}
                        >
                            Home
                        </Link>
                    </li>
                    <li className="su-mb-0 su-group ">
                        <Link
                            to="newcontent"
                            className="su-inline-block su-w-full su-px-16 su-py-12 su-font-semibold hover:su-bg-gray/20"
                            tabIndex="-1"
                            onClick={() => {
                                setMobileMenuVisible(false);
                            }}
                        >
                            New Content
                        </Link>
                    </li>
                    <li className="su-mb-0 su-group ">
                        <Link
                            to="allcontent"
                            className="su-inline-block su-w-full su-px-16 su-py-12 su-font-semibold hover:su-bg-gray/20"
                            tabIndex="-1"
                            onClick={() => {
                                setMobileMenuVisible(false);
                            }}
                        >
                            All Content
                        </Link>
                    </li>
                    <li className="su-mb-0 su-group ">
                        <Link
                            to="insights"
                            className="su-inline-block su-w-full su-px-16 su-py-12 su-font-semibold hover:su-bg-gray/20"
                            tabIndex="-1"
                            onClick={() => {
                                setMobileMenuVisible(false);
                            }}
                        >
                            Insights
                        </Link>
                    </li>

                    <li className="su-mb-0 su-px-16 su-pt-12 su-pb-6">
                        <a href="/_admin" className="header-button su-group su-bg-white su-flex su-justify-center su-items-center" tabIndex="-1">
                            <span>Go to Matrix</span>
                            <svg
                                className="su-ml-5 su-transition-colors su-text-red group-hover:su-text-white"
                                width="18"
                                height="18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#a)">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.918 4.546a.9.9 0 0 1 .9-.9h7.637a.9.9 0 0 1 .9.9v7.636a.9.9 0 0 1-1.8 0V6.718l-7.373 7.373a.9.9 0 1 1-1.273-1.272l7.373-7.373H5.818a.9.9 0 0 1-.9-.9Z"
                                        fill="currentColor"
                                    ></path>
                                </g>
                                <defs>
                                    <clipPath id="a">
                                        <path fill="#fff" d="M0 0h18v18H0z"></path>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </li>

                    <li className="su-mb-0 su-px-16 su-pt-6 su-pb-12">
                        <a className="button su-inline-block su-w-full su-text-center" href="?SQ_ACTION=logout" tabIndex="-1">
                            Sign Out
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};
