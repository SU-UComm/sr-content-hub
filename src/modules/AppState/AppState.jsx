import React from 'react';
import {any} from 'prop-types';
import {arrayHelperRemoveElementByValue} from 'src/helpers/arrayHelpers.js';

// Initial data
let initialData = {
    currentStep: 1,
    finishedSteps: [],
    blockedSteps: [],
    translations: window.translations || {},
};

const AppStateContext = React.createContext();
const AppDispatchContext = React.createContext();

export const appStateReducer = (state, action) => {
    const maxStep = 3;
    const minStep = 1;
    switch (action.type) {
        case 'nextStep': {
            return {
                ...state,
                currentStep: state.currentStep + 1 <= maxStep ? state.currentStep + 1 : maxStep,
                finishedSteps: [...state.finishedSteps, state.currentStep],
            };
        }
        case 'previousStep': {
            return {
                ...state,
                currentStep: state.currentStep - 1 >= minStep ? state.currentStep - 1 : minStep,
                finishedSteps: arrayHelperRemoveElementByValue(state.currentStep, state.finishedSteps),
            };
        }
        case 'setCurrentStep': {
            return {
                ...state,
                currentStep: action.payload,
            };
        }
        case 'enableFirstStepOnly': {
            return {
                ...state,
                finishedSteps: [1],
            };
        }
        case 'enableAllSteps': {
            return {
                ...state,
                finishedSteps: [1, 2, 3],
            };
        }
        case 'blockSteps': {
            state.blockedSteps.push(action.payload);
            return {
                ...state,
                blockedSteps: [...new Set(state.blockedSteps)],
            };
        }
        case 'clearAppState': {
            return {
                ...state,
                currentStep: 1,
                finishedSteps: [],
                blockedSteps: [],
            };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

const AppStateProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(appStateReducer, initialData);

    return (
        <AppStateContext.Provider value={state}>
            <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
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
    children: any,
};

export {AppStateProvider, useAppState, useAppDispatch};
