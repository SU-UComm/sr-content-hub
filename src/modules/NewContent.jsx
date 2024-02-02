// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import {NewContent} from './NewContent/NewContent.jsx';
import {MyContent} from './MyContent/MyContent.jsx';

const rootNode = document.getElementById('content-hub--new-content');
if (rootNode) {
    ReactDOM.createRoot(rootNode).render(<React.StrictMode>{window?.data?.user?.userType === 'CP' ? <MyContent /> : <NewContent />}</React.StrictMode>);
}
