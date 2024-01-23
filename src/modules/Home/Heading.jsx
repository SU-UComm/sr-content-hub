import React from 'react';
import * as DOMPurify from 'dompurify';
import PropTypes from 'prop-types';

export const PageHeading = ({headingText, subHeadingText}) => {
    return (
        <section className="su-text-center su-mt-60 su-mb-50 md:su-mt-120 md:su-mb-100">
            <h1 className="su-font-serif su-mb-12">{DOMPurify.sanitize(headingText)}</h1>
            <p className="su-text-21 su-leading-display lg:su-px-[20%]">{DOMPurify.sanitize(subHeadingText)}</p>
        </section>
    );
};

PageHeading.propTypes = {
    headingText: PropTypes.string,
    subHeadingText: PropTypes.string,
};
