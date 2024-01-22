import React from 'react';
import {Link} from 'react-router-dom';

export const HeaderLogo = () => {
    return (
        <div className="su-bg-red-dark su-relative su-flex su-items-center su-pr-16 sm:su-pr-40 before:su-bg-red-dark before:su-absolute before:su-h-full before:su-right-full before:su-w-screen">
            <Link to="/" title="Stanford Content Hub">
                <img src={require('images/stanford-ch.svg')} alt="Content Hub Logo" />
            </Link>
        </div>
    );
};
