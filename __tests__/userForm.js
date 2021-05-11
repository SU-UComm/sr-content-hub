import React from 'react';
import {unmountComponentAtNode} from 'react-dom';
import '@testing-library/jest-dom';
import {render, screen, fireEvent, act} from '@testing-library/react';
import {UserForm} from '../src/modules/UserForm/UserForm.jsx';
import {AppStateProvider} from '../src/modules/AppState/AppState.jsx';
import {DataStateProvider} from '../src/modules/DataState/DataState.jsx';

describe('<UserForm />', () => {
    // Mount before each test and unmount after
    let wrapper = null;
    beforeEach(() => {
        const {container} = render(
            <AppStateProvider>
                <DataStateProvider>
                    <UserForm />
                </DataStateProvider>
            </AppStateProvider>,
        );
        wrapper = container;
    });
    afterEach(() => {
        unmountComponentAtNode(wrapper);
        wrapper.remove();
        wrapper = null;
    });

    it('should have all the fields', () => {
        expect([...wrapper.querySelectorAll('input[type="text"]')]).toHaveLength(3);
        expect([...wrapper.querySelectorAll('select')]).toHaveLength(1);
        expect([...wrapper.querySelectorAll('input[type="radio"]')]).toHaveLength(2);
        expect([...wrapper.querySelectorAll('button[type="submit"]')]).toHaveLength(1);
    });

    it('should display errors when no fields are filled', async () => {
        await act(async () => {
            const buttonSubmit = screen.getByText('Next step');
            fireEvent.click(buttonSubmit);
        });
        expect([...wrapper.querySelectorAll('ul.form-errors > li')]).toHaveLength(6);
        expect([...wrapper.querySelectorAll('p.form-error')]).toHaveLength(6);
    });

    it('should have no errors when all fields are filled', async () => {
        await act(async () => {
            const buttonSubmit = screen.getByText('Next step');

            wrapper.querySelector('#title').value = 'Mr';
            wrapper.querySelector('#firstName').value = 'John';
            wrapper.querySelector('#lastName').value = 'Doe';
            wrapper.querySelector('#email').value = 'john@doe.com';
            wrapper.querySelector('#mobilePhone').value = '1234567';
            wrapper.querySelector('#Developer01').checked = true;

            fireEvent.click(buttonSubmit);
        });

        expect([...wrapper.querySelectorAll('ul.form-errors > li')]).toHaveLength(0);
        expect([...wrapper.querySelectorAll('p.form-error')]).toHaveLength(0);
    });
});
