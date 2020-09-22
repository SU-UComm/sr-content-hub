import React from 'react';
import classNames from 'classnames';
import { useAppState, useAppDispatch } from 'modules/AppState/AppState.jsx';
import { stepsData } from 'src/helpers/stepsHelpers.js'

const Step = (step) => {
    const { currentStep, finishedSteps, blockedSteps } = step;
    const { id, name } = step.step;

    const dispatch = useAppDispatch();

    const canClick = finishedSteps.includes(id);

    const stepButtonClassNames = classNames({
        'step__button': true,
        'step__button--current': currentStep === id && blockedSteps.includes(id) === false,
        'step__button--finished': finishedSteps.includes(id),
        'step__button--finished-blocked': blockedSteps.includes(id)
    });

    return (
        <li className="steps__list-item">
            <button
                disabled={!canClick}
                className={stepButtonClassNames}
                onClick={() => canClick && dispatch({ type: 'setCurrentStep', payload: id })}>
                {name}
            </button>
        </li>
    )
}


const Steps = () => {
    const { currentStep, finishedSteps, blockedSteps } = useAppState();

    return (
        <section className="steps">
            <ul className="steps__list">
                {stepsData.map((step) => {
                    return (<Step step={step} currentStep={currentStep} finishedSteps={finishedSteps} blockedSteps={blockedSteps} key={step.id} />)
                })
                }
            </ul>
        </section>
    );
}

export default Steps;
