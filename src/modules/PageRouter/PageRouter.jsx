import React from 'react';
import { useAppState } from 'modules/AppState/AppState.jsx';
import { UserForm } from 'modules/UserForm/UserForm.jsx'
import { Confirmation } from 'src/modules/Confirmation/Confirmation.jsx';
import { Summary } from 'src/modules/Summary/Summary.jsx';

export const PageRouter = () => {
    const { currentStep } = useAppState();

    switch (currentStep) {
        case 1: {
            return (<UserForm />);
        }
        case 2: {
            return (<Confirmation />);
        }
        case 3: {
            return (<Summary />);
        }
        default: {
            return (
                <p>Page not found</p>
            )
        }
    }
}
