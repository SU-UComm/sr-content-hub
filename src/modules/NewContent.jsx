// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import {NewContent} from './NewContent/NewContent.jsx';

const rootNode = document.getElementById('content-hub--new-content');
if (rootNode) {
    ReactDOM.createRoot(rootNode).render(
        <React.StrictMode>
            <NewContent />
        </React.StrictMode>,
    );
}
