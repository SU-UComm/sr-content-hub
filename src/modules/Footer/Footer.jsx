import React from 'react';

export const Footer = () => {
    return (
        <footer className="su-bg-black su-py-32">
            <div className="su-centered-container su-flex su-flex-col lg:su-flex-row su-gap-x-[42px] su-gap-y-xs">
                <img
                    className="su-max-w-[139px] su-max-h-[77px] su-h-full su-w-full su-object-cover su-object-center"
                    src={require('images/logo-footer.png')}
                    alt="Stanford Logo"
                />
                <div className="su-flex su-flex-col su-gap-lg md:su-gap-[12px]">
                    <ul className="su-flex su-flex-wrap su-gap-y-xs md:su-gap-x-[31px] su-p-0 su-m-0 su-list-none su-text-white">
                        <li className="su-text-17 su-mb-0 su-leading-[normal] su-flex-[50%_0_0] md:su-flex-none">
                            <a className="su-font-semibold hover:su-text-white focus:su-text-white hover:su-underline" href="https://www.stanford.edu/">
                                Stanford Home
                            </a>
                        </li>
                        <li className="su-text-17 su-mb-0 su-leading-[normal] su-flex-[50%_0_0] md:su-flex-none">
                            <a className="su-font-semibold hover:su-text-white focus:su-text-white hover:su-underline" href="https://visit.stanford.edu/basics/index.html">
                                Maps &amp; Directions
                            </a>
                        </li>
                        <li className="su-text-17 su-mb-0 su-leading-[normal] su-flex-[50%_0_0] md:su-flex-none">
                            <a className="su-font-semibold hover:su-text-white focus:su-text-white hover:su-underline" href="https://www.stanford.edu/search/">
                                Search Stanford
                            </a>
                        </li>
                        <li className="su-text-17 su-mb-0 su-leading-[normal] su-flex-[50%_0_0] md:su-flex-none">
                            <a className="su-font-semibold hover:su-text-white focus:su-text-white hover:su-underline" href="https://emergency.stanford.edu/">
                                Emergency Info
                            </a>
                        </li>
                    </ul>

                    <ul className="su-flex su-flex-wrap su-gap-y-xs md:su-gap-[29px] su-p-0 su-m-0 su-list-none su-text-white">
                        <li className="su-leading-[normal] su-mb-0 su-text-15 su-flex-[50%_0_0] sm:su-flex-[33%_0_0] md:su-flex-none">
                            <a className="hover:su-text-white focus:su-text-white hover:su-underline" href="https://www.stanford.edu/site/terms/">
                                Terms of Use
                            </a>
                        </li>
                        <li className="su-leading-[normal] su-mb-0 su-text-15 su-flex-[50%_0_0] sm:su-flex-[33%_0_0] md:su-flex-none">
                            <a className="hover:su-text-white focus:su-text-white hover:su-underline" href="https://www.stanford.edu/site/privacy/">
                                Privacy
                            </a>
                        </li>
                        <li className="su-leading-[normal] su-mb-0 su-text-15 su-flex-[50%_0_0] sm:su-flex-[33%_0_0] md:su-flex-none">
                            <a className="hover:su-text-white focus:su-text-white hover:su-underline" href="https://uit.stanford.edu/security/copyright-infringement">
                                Copyright
                            </a>
                        </li>
                        <li className="su-leading-[normal] su-mb-0 su-text-15 su-flex-[50%_0_0] sm:su-flex-[33%_0_0] md:su-flex-none">
                            <a className="hover:su-text-white focus:su-text-white hover:su-underline" href="https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4">
                                Trademarks
                            </a>
                        </li>
                        <li className="su-leading-[normal] su-mb-0 su-text-15 su-flex-[50%_0_0] sm:su-flex-[33%_0_0] md:su-flex-none">
                            <a
                                className="hover:su-text-white focus:su-text-white hover:su-underline"
                                href="https://studentservices.stanford.edu/more-resources/student-policies/non-academic/non-discrimination"
                            >
                                Non-Discrimination
                            </a>
                        </li>
                        <li className="su-leading-[normal] su-mb-0 su-text-15 su-flex-[50%_0_0] sm:su-flex-[33%_0_0] md:su-flex-none">
                            <a className="hover:su-text-white focus:su-text-white hover:su-underline" href="https://www.stanford.edu/site/accessibility">
                                Accessibility
                            </a>
                        </li>
                    </ul>

                    <p className="su-text-white su-text-15 su-leading-[normal] su-mb-0">© Copyright Stanford University. Stanford, California 94305.</p>
                </div>
            </div>
        </footer>
    );
};
