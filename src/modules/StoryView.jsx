// Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import {StoryView} from '../modules/Story/StoryView.jsx';
import {useLocation} from 'react-router-dom';

// const location = useLocation();

const rootNode = document.getElementById('content-hub--story');
if (rootNode) {
    ReactDOM.createRoot(rootNode).render(
        <React.StrictMode>
            <StoryView />
        </React.StrictMode>,
    );
}
