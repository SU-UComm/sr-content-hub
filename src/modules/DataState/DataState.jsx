import React from 'react';
import {any} from 'prop-types';

// Initial data
let initialData = {
    page01: {},
};

const DataStateContext = React.createContext();
const DataDispatchContext = React.createContext();

export const dataStateReducer = (state, action) => {
    switch (action.type) {
        case 'setPage01': {
            return {
                ...state,
                page01: action.data,
            };
        }
        case 'clearDataState': {
            return {
                ...state,
                page01: {},
            };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

const DataStateProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(dataStateReducer, initialData);

    return (
        <DataStateContext.Provider value={state}>
            <DataDispatchContext.Provider value={dispatch}>{children}</DataDispatchContext.Provider>
        </DataStateContext.Provider>
    );
};

const useDataState = () => {
    const context = React.useContext(DataStateContext);
    if (context === undefined) {
        throw new Error('useDataState must be used within a DataStateProvider');
    }
    return context;
};

const useDataDispatch = () => {
    const context = React.useContext(DataDispatchContext);
    if (context === undefined) {
        throw new Error('useDataDispatch must be used within a DataStateProvider');
    }
    return context;
};

DataStateProvider.propTypes = {
    children: any,
};

export {DataStateProvider, useDataState, useDataDispatch};
