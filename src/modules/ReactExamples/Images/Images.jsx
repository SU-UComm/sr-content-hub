import React from 'react';
import Example from './images/example.svg';
import InlineExample from './images/inline-example.svg';

export const Images = () => {
    return (
        <div className="section">
            <h2 className="section__heading">Image examples</h2>

            <h3 className="section__subheading">Img tag</h3>
            <img src={Example} height="50px" />

            <h3 className="section__subheading">Inline SVG</h3>
            <span className="svg-wrapper" dangerouslySetInnerHTML={{__html: InlineExample}}></span>
        </div>
    );
};
