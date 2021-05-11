import React from 'react';
import {PrevNext} from 'modules/Steps/PrevNext.jsx';
import {useDataState} from 'modules/DataState/DataState.jsx';

export const Summary = () => {
    const {page01} = useDataState();

    return (
        <>
            <h2>Summary</h2>
            <ul>
                <li>Title: {page01.Title}</li>
                <li>First name: {page01['First name']}</li>
                <li>Last name: {page01['Last name']}</li>
                <li>E-mail: {page01.Email}</li>
                <li>Mobile number: E-mail: {page01['Mobile number']}</li>
                <li>Developer: {page01.Developer}</li>
            </ul>

            <PrevNext prevDisabled={false} nextDisabled={false} nextStepReset={true} />
        </>
    );
};
