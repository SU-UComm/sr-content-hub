// Imports
import React from 'react';
import { AppStateProvider } from 'modules/AppState/AppState.jsx';
import { DataStateProvider } from 'modules/DataState/DataState.jsx';
import { PageRouter } from 'modules/PageRouter/PageRouter.jsx';
import Steps from 'modules/Steps/Steps.jsx';

import "src/styles/global.scss";

// Stateful components

export class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <AppStateProvider>
                <DataStateProvider>
                    <div className="container">
                        <Steps />
                        <PageRouter />
                    </div>
                </DataStateProvider>
            </AppStateProvider>
        );
    }
}
