// Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Home} from './Home/Home.jsx';

const rootNode = document.getElementById('content-hub--home');
if (rootNode) {
    ReactDOM.createRoot(rootNode).render(
        <React.StrictMode>
            <Home />
        </React.StrictMode>,
    );
}
