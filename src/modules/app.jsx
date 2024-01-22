import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';

import {Header} from './Header/Header.jsx';
import {Home} from './Home/Home.jsx';
import {NewContent} from './NewContent/NewContent.jsx';
import {AllContent} from './AllContent/AllContent.jsx';
import {Insights} from './Insights/Insights.jsx';
import {Footer} from './Footer/Footer.jsx';

export const App = () => {
    return (
        <HashRouter>
            <Header />
            <main id="content" className="su-centered-container su-pt-95 su-bg-gray-bg su-grid su-grid-cols-12 su-pb-120">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="newcontent" element={<NewContent />} />
                    <Route path="allcontent" element={<AllContent />} />
                    <Route path="insights" element={<Insights />} />
                </Routes>
            </main>
            <Footer />
        </HashRouter>
    );
};
