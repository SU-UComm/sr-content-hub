import {appStateReducer} from '../src/modules/AppState/AppState.jsx';

describe('appStateReducer()', () => {
    it('nextStep: 1 to 2', () => {
        const initialState = {
            currentStep: 1,
            blockedSteps: [],
            finishedSteps: [],
            translations: {},
        };
        const expectedState = {
            currentStep: 2,
            blockedSteps: [],
            finishedSteps: [1],
            translations: {},
        };
        const updateAction = {type: 'nextStep', initialState};
        const updatedState = appStateReducer(initialState, updateAction);
        expect(updatedState).toEqual(expectedState);
    });

    it('nextStep: exceed the 3 limit', () => {
        const initialState = {
            currentStep: 3,
            blockedSteps: [],
            finishedSteps: [1, 2],
            translations: {},
        };
        const expectedState = {
            currentStep: 3,
            blockedSteps: [],
            finishedSteps: [1, 2, 3],
            translations: {},
        };
        const updateAction = {type: 'nextStep', initialState};
        const updatedState = appStateReducer(initialState, updateAction);
        expect(updatedState).toEqual(expectedState);
    });

    it('nextStep: 2 to 1', () => {
        const initialState = {
            currentStep: 2,
            blockedSteps: [],
            finishedSteps: [],
            translations: {},
        };
        const expectedState = {
            currentStep: 1,
            blockedSteps: [],
            finishedSteps: [],
            translations: {},
        };
        const updateAction = {type: 'previousStep', initialState};
        const updatedState = appStateReducer(initialState, updateAction);
        expect(updatedState).toEqual(expectedState);
    });

    it('setCurrentStep: 2', () => {
        const initialState = {
            currentStep: 1,
            blockedSteps: [],
            finishedSteps: [],
            translations: {},
        };
        const expectedState = {
            currentStep: 2,
            blockedSteps: [],
            finishedSteps: [],
            translations: {},
        };
        const updateAction = {type: 'setCurrentStep', payload: 2, initialState};
        const updatedState = appStateReducer(initialState, updateAction);
        expect(updatedState).toEqual(expectedState);
    });

    it('enableFirstStepOnly', () => {
        const initialState = {
            currentStep: 3,
            blockedSteps: [],
            finishedSteps: [1, 2],
            translations: {},
        };
        const expectedState = {
            currentStep: 3,
            blockedSteps: [],
            finishedSteps: [1],
            translations: {},
        };
        const updateAction = {type: 'enableFirstStepOnly', initialState};
        const updatedState = appStateReducer(initialState, updateAction);
        expect(updatedState).toEqual(expectedState);
    });

    it('enableAllSteps', () => {
        const initialState = {
            currentStep: 3,
            blockedSteps: [],
            finishedSteps: [],
            translations: {},
        };
        const expectedState = {
            currentStep: 3,
            blockedSteps: [],
            finishedSteps: [1, 2, 3],
            translations: {},
        };
        const updateAction = {type: 'enableAllSteps', initialState};
        const updatedState = appStateReducer(initialState, updateAction);
        expect(updatedState).toEqual(expectedState);
    });

    it('blockSteps', () => {
        const initialState = {
            currentStep: 1,
            blockedSteps: [],
            finishedSteps: [],
            translations: {},
        };
        const expectedState = {
            currentStep: 1,
            blockedSteps: [2],
            finishedSteps: [],
            translations: {},
        };
        const updateAction = {type: 'blockSteps', payload: 2, initialState};
        const updatedState = appStateReducer(initialState, updateAction);
        expect(updatedState).toEqual(expectedState);
    });

    it('blockSteps', () => {
        const initialState = {
            currentStep: 1,
            blockedSteps: [],
            finishedSteps: [],
            translations: {},
        };
        const expectedState = {
            currentStep: 1,
            blockedSteps: [2],
            finishedSteps: [],
            translations: {},
        };
        const updateAction = {type: 'blockSteps', payload: 2, initialState};
        const updatedState = appStateReducer(initialState, updateAction);
        expect(updatedState).toEqual(expectedState);
    });

    it('clearAppState', () => {
        const initialState = {
            currentStep: 3,
            blockedSteps: [1, 2],
            finishedSteps: [1, 2],
            translations: {},
        };
        const expectedState = {
            currentStep: 1,
            blockedSteps: [],
            finishedSteps: [],
            translations: {},
        };
        const updateAction = {type: 'clearAppState', initialState};
        const updatedState = appStateReducer(initialState, updateAction);
        expect(updatedState).toEqual(expectedState);
    });

    it('default', () => {
        const initialState = {
            currentStep: 1,
            blockedSteps: [],
            finishedSteps: [],
            translations: {},
        };

        const updateAction = {type: 'notSupportedType', initialState};
        expect(() => {
            appStateReducer(initialState, updateAction);
        }).toThrow('Unhandled action type: notSupportedType');
    });
});
