import React from 'react';
import PropTypes from 'prop-types';
import {loadAppState, saveAppState} from './appStateHelpers';

const AppStateContext = React.createContext();
const AppDispatchContext = React.createContext();

export const appStateReducer = (state, action) => {
    switch (action.type) {
        case 'addExampleAppData': {
            let newExampleAppData = [...state.exampleAppData];
            newExampleAppData.push(action.data);
            saveAppState('exampleAppData', newExampleAppData);
            return {
                ...state,
                exampleAppData: newExampleAppData,
            };
        }
        case 'removeExampleAppData': {
            let newExampleAppData = [...state.exampleAppData];
            newExampleAppData = newExampleAppData.filter((e) => e !== action.data);
            saveAppState('exampleAppData', newExampleAppData);
            return {
                ...state,
                exampleAppData: newExampleAppData,
            };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

const AppStateProvider = (props) => {
    let initialData = props.defaultData;

    if (!loadAppState()) {
        // InitialData not present - use props.defaultData
        saveAppState(null, initialData);
    } else {
        // InitialData present - load it
        initialData = loadAppState();
        saveAppState(null, initialData);
    }

    const fetchData = async () => {
        try {
            const response = await fetch(
                'https://dxp-us-stage-search.funnelback.squiz.cloud/s/search.json?profile=search&collection=sug~sp-stanford-university-content-hub&num_ranks=10&start_rank=1&sort=dmetamtxCreated&&query=!nullquery',
            );
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            // const req0Url = response['info']['url'];
            // const resp0Code = response['info']['http_code'];
            // const resp0Body = response.body;

            // const output = showAllContent.init(resp0Code, resp0Body, mtxCfg);
            // print(output);

            console.log(result);
            return result;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    let data = fetchData();

    console.log('state', state);

    const [state, dispatch] = React.useReducer(appStateReducer, initialData);

    return (
        <AppStateContext.Provider value={data}>
            <AppDispatchContext.Provider value={dispatch}>{props.children}</AppDispatchContext.Provider>
        </AppStateContext.Provider>
    );
};

const useAppState = () => {
    const context = React.useContext(AppStateContext);
    if (context === undefined) {
        throw new Error('useAppState must be used within a AppStateProvider');
    }
    return context;
};

const useAppDispatch = () => {
    const context = React.useContext(AppDispatchContext);
    if (context === undefined) {
        throw new Error('useAppDispatch must be used within a AppStateProvider');
    }
    return context;
};

AppStateProvider.propTypes = {
    defaultData: PropTypes.object,
    children: PropTypes.any,
};

export {AppStateProvider, useAppState, useAppDispatch};
