import {dataStateReducer} from '../DataState.jsx';

describe('dataStateReducer()', () => {
    it('setPage01', () => {
        const initialState = {
            page01: {},
        };
        const formData = {
            Title: 'Mr',
            'First name': 'John',
            'Last name': 'Doe',
            Email: 'john@doe.com',
            'Mobile number': '1234567',
            Developer: 'Yes',
        };
        const expectedState = {
            page01: formData,
        };
        const updateAction = {type: 'setPage01', data: formData, initialState};
        const updatedState = dataStateReducer(initialState, updateAction);
        expect(updatedState).toEqual(expectedState);
    });

    it('clearDataState', () => {
        const initialState = {
            page01: {
                Title: 'Mr',
                'First name': 'John',
                'Last name': 'Doe',
                Email: 'john@doe.com',
                'Mobile number': '1234567',
                Developer: 'Yes',
            },
        };
        const expectedState = {
            page01: {},
        };
        const updateAction = {type: 'clearDataState', initialState};
        const updatedState = dataStateReducer(initialState, updateAction);
        expect(updatedState).toEqual(expectedState);
    });

    it('default', () => {
        const initialState = {
            page01: {},
        };

        const updateAction = {type: 'notSupportedType', initialState};
        expect(() => {
            dataStateReducer(initialState, updateAction);
        }).toThrow('Unhandled action type: notSupportedType');
    });
});
