// Imports
import React from 'react';
import {AppStateProvider} from 'src/modules/ReactContexts/AppState/AppState.jsx';
import {DataStateProvider} from 'src/modules/ReactContexts/DataState/DataState.jsx';
import {Main} from 'src/modules/ReactContexts/Main/Main.jsx';

const dataStateDefaultData = require('modules/ReactContexts/DataState/dataStateDefaultData.json');
let appStateDefaultData = require('modules/ReactContexts/AppState/appStateDefaultData.json');
appStateDefaultData.testWindowVariable = window.testWindowVariable || false;

// Stateful components
export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <AppStateProvider defaultData={appStateDefaultData}>
                <DataStateProvider defaultData={dataStateDefaultData}>
                    <div className="container">
                        <Main />
                    </div>
                </DataStateProvider>
            </AppStateProvider>
        );
    }
}