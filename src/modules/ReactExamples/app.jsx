// Imports
import React from 'react';
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
                <Images />
                <StyledComponents />
                <EnvVariables />
            </div>
        );
    }
}
