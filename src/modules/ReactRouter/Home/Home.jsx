import React from 'react';
import {Link} from 'react-router-dom';

export const Home = () => {
    return (
        <>
            <h2>This is Home.jsx</h2>
            <Link to="/about.html">Go to About</Link>
        </>
    );
};
