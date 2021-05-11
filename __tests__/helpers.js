import React from 'react';
import ReactDom from 'react-dom';
import {AppStateProvider} from '../src/modules/AppState/AppState.jsx';
import {DataStateProvider} from '../src/modules/DataState/DataState.jsx';
import {arrayHelperRemoveElementByValue} from '../src/helpers/arrayHelpers';
import {HandleFormErrors} from '../src/helpers/formHelpers';
import {stepsData} from '../src/helpers/stepsHelpers';
const translations = require('../src/modules/AppData/data/translations.json');

test('arrayHelperRemoveElementByValue()', () => {
    let testArray = ['1', '2', 3, null, 'lorem ipsum'];

    expect(arrayHelperRemoveElementByValue('1', testArray)).toStrictEqual(['2', 3, null, 'lorem ipsum']);
    expect(arrayHelperRemoveElementByValue(3, testArray)).toStrictEqual(['1', '2', null, 'lorem ipsum']);
    expect(arrayHelperRemoveElementByValue(null, testArray)).toStrictEqual(['1', '2', 3, 'lorem ipsum']);
    expect(arrayHelperRemoveElementByValue('lorem ipsum', testArray)).toStrictEqual(['1', '2', 3, null]);
    expect(arrayHelperRemoveElementByValue('lorem', testArray)).toStrictEqual(['1', '2', 3, null, 'lorem ipsum']);
});

test('handleFormErrors() - top error list', () => {
    const div = document.createElement('div');
    const errors = {
        Title: {
            message: 'Title is required',
            ref: {},
            type: 'required',
        },
        'First name': {
            message: 'First name is required',
            ref: {},
            type: 'required',
        },
        Email: {
            message: 'Invalid e-mail address',
            ref: {},
            type: 'pattern',
        },
        'Mobile number': {
            message: '',
            ref: {},
            type: 'minLength',
        },
    };
    ReactDom.render(
        <AppStateProvider>
            <DataStateProvider>{HandleFormErrors(errors)}</DataStateProvider>
        </AppStateProvider>,
        div,
    );

    // Prints all errors
    expect([...div.querySelectorAll('p[role="alert"]')]).toHaveLength(Object.keys(errors).length - 1); // -1 as 'Mobile number' has no message because its type === 'minLength'

    // Prints proper error msg for each error
    [...div.querySelectorAll('p[role="alert"]')].forEach((error, i) => {
        expect(error.innerHTML).toBe(errors[Object.keys(errors)[i]].message);
    });
});

test('handleFormErrors() - single error - email', () => {
    const div = document.createElement('div');
    const errors = {
        Email: {
            message: 'Invalid e-mail address',
            ref: {},
            type: 'pattern',
        },
    };

    ReactDom.render(
        <AppStateProvider>
            <DataStateProvider>{HandleFormErrors(errors, 'Email')}</DataStateProvider>
        </AppStateProvider>,
        div,
    );

    expect([...div.querySelectorAll('p[role="alert"]')]).toHaveLength(1);
    expect(div.querySelector('p[role="alert"]').innerHTML).toBe('Invalid e-mail address');
});

test('handleFormErrors() - single error - minLength', () => {
    const div = document.createElement('div');
    const errors = {
        'Mobile number': {
            message: '',
            ref: {},
            type: 'minLength',
        },
    };

    ReactDom.render(
        <AppStateProvider>
            <DataStateProvider>{HandleFormErrors(errors, 'Mobile number')}</DataStateProvider>
        </AppStateProvider>,
        div,
    );

    expect([...div.querySelectorAll('p[role="alert"]')]).toHaveLength(1);
    expect(div.querySelector('p[role="alert"]').innerHTML).toBe('Min length not reached');
});

test('handleFormErrors() - single error - maxLength', () => {
    const div = document.createElement('div');
    const errors = {
        'Mobile number': {
            message: '',
            ref: {},
            type: 'maxLength',
        },
    };

    ReactDom.render(
        <AppStateProvider>
            <DataStateProvider>{HandleFormErrors(errors, 'Mobile number')}</DataStateProvider>
        </AppStateProvider>,
        div,
    );

    expect([...div.querySelectorAll('p[role="alert"]')]).toHaveLength(1);
    expect(div.querySelector('p[role="alert"]').innerHTML).toBe('Max length exceeded');
});

test('stepsData()', () => {
    expect(stepsData(translations)).toBeInstanceOf(Array);
    expect(stepsData(translations)).toHaveLength(3);
});
