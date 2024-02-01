// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import {Insights} from './Insights/Insights.jsx';

const rootNode = document.getElementById('content-hub--insights');
if (rootNode) {
    ReactDOM.createRoot(rootNode).render(
        <React.StrictMode>
            <Insights />
        </React.StrictMode>,
    );
}
