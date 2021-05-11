import React, {useState} from 'react';
import {PrevNext} from 'modules/Steps/PrevNext.jsx';
import {useAppState} from 'modules/AppState/AppState.jsx';
import {useDataState} from 'modules/DataState/DataState.jsx';

export const Confirmation = () => {
    const {translations} = useAppState();
    const {page01} = useDataState();
    const [confirmed, setConfirmed] = useState(false);

    return (
        <div className="confirmation">
            <h2>
                Dear {page01.Title} {page01['First name']} {page01['Last name']}
            </h2>
            <div dangerouslySetInnerHTML={{__html: translations.page02Text}}></div>

            <div className="confirmation__box">
                <input
                    id="Approve"
                    className="confirmation__checkbox"
                    type="checkbox"
                    onClick={() => {
                        setConfirmed(!confirmed);
                    }}
                />
                <label htmlFor="Approve">{`${translations.page02Approve}`}</label>
            </div>

            <PrevNext prevDisabled={false} nextDisabled={!confirmed} />
        </div>
    );
};
