import React from 'react';
import PropTypes from 'prop-types';
import {useAppState, useAppDispatch} from 'modules/AppState/AppState.jsx';
import {useDataDispatch} from 'modules/DataState/DataState.jsx';

export const PrevNext = (props) => {
    const appDispatch = useAppDispatch();
    const dataDispatch = useDataDispatch();
    const {translations} = useAppState();

    const restartApp = () => {
        dataDispatch({
            type: 'setPage01',
            data: {},
        });
        dataDispatch({type: 'clearDataState'});
        appDispatch({type: 'clearAppState'});
    };

    return (
        <div className="prevNext">
            <button
                className="prevNext__button"
                disabled={props.prevDisabled}
                onClick={() => {
                    appDispatch({type: 'previousStep'});
                }}
            >
                {translations.stepsPrev}
            </button>
            <button
                className="prevNext__button"
                disabled={props.nextDisabled}
                onClick={() => {
                    props.nextStepReset ? restartApp() : appDispatch({type: 'nextStep'});
                }}
            >
                {`${props.nextStepReset ? translations.stepsReset : translations.stepsNext}`}
            </button>
        </div>
    );
};

PrevNext.propTypes = {
    nextDisabled: PropTypes.bool,
    nextStepReset: PropTypes.bool,
    prevDisabled: PropTypes.bool,
};
