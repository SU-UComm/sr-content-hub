// Imports
import React from 'react';
import {LocoFetch} from './LocoFetch/LocoFetch.jsx';
import {Images} from './Images/Images.jsx';
import {StyledComponents} from './StyledComponents/StyledComponents.jsx';
import {EnvVariables} from './EnvVariables/EnvVariables.jsx';

// Stateful components
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <LocoFetch apiURL="http://127.0.0.1:8888/return_json" />
                <Images />
                <StyledComponents />
                <EnvVariables />
            </div>
        );
    }
}
