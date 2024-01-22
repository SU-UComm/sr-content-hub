// Imports
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app.jsx';

// Import CSS
// FIXME: This is a copy/paste from Matrix - should be replaced with proper tailwind config and build locally
import './app.scss';

var react_app_wrapper = document.querySelector('#content-hub');

// Don't run on a non-React page
if (react_app_wrapper !== null) {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        react_app_wrapper,
    );
}
