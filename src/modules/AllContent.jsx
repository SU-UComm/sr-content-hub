// Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import {AllContent} from './AllContent/AllContent.jsx';

const rootNode = document.getElementById('content-hub--all-content');
if (rootNode) {
    ReactDOM.createRoot(rootNode).render(
        <React.StrictMode>
            <AllContent />
        </React.StrictMode>,
    );
}
