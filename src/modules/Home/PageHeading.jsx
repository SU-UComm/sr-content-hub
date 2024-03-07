import React from 'react';
import * as DOMPurify from 'dompurify';
import PropTypes from 'prop-types';
import {BackToPageButton} from './BackToPageButton.jsx';

export const PageHeading = ({headingText, subHeadingText, homeButton}) => {
    return (
        <section className="su-relative su-text-center su-mt-60 su-mb-50 su-pt-60 md:su-mt-45 md:su-pt-70 md:su-mb-62">
            {/* Back to home button */}
            {homeButton == true && <BackToPageButton page="home" />}

            <h1 className="su-font-serif su-mb-12">{DOMPurify.sanitize(headingText)}</h1>
            <p className="su-text-21 su-leading-display lg:su-px-[20%]">{DOMPurify.sanitize(subHeadingText)}</p>
        </section>
    );
};

PageHeading.propTypes = {
    headingText: PropTypes.string,
    subHeadingText: PropTypes.string,
    homeButton: PropTypes.bool,
};
