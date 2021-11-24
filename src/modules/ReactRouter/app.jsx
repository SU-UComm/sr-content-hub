// Imports
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Home} from './Home/Home.jsx';
import {About} from './About/About.jsx';

// Stateful components
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <Routes>
                    <Route path="reactRouter.html" element={<Home />} />
                    <Route path="about.html" element={<About />} />
                </Routes>
            </div>
        );
    }
}
