# Readme #
This repository can be used as a starting point for creating a React Application.
It is based on Squiz Boilerplate:

* [Read the wiki for more information](https://gitlab.squiz.net/boilerplate/webpack-boilerplate/wikis/home) about installation, example projects, help and contributing.
* Read the [installation guide](https://gitlab.squiz.net/boilerplate/webpack-boilerplate/wikis/Installation)

## Concepts

### Using Contexts and
[Contexts](https://reactjs.org/docs/context.html) and [Reducers](https://reactjs.org/docs/hooks-reference.html#usereducer) are used to set and get application data being the source of truth for all initial configurations and data being input by the user while using the app. This is similar to using [Redux](https://redux.js.org/) but without a need for external library.

There are two contexts present:
* AppState - this is used to store initial data like translations, application steps etc
* DataState - this is where data input from the user is stored

Example usage:
* Get data from context **/src/modules/Summary/Summary.jsx**
```
[...]
import { useDataState } from 'modules/DataState/DataState.jsx';

export const Summary = () => {
    const { page01 } = useDataState();

    return (
        <>
            <h2>Summary</h2>
            <ul>
                <li>Title: {page01.Title}</li>
                <li>First name: {page01["First name"]}</li>
                <li>Last name: {page01["Last name"]}</li>
                <li>E-mail: {page01.Email}</li>
                <li>Mobile number: E-mail: {page01["Mobile number"]}</li>
                <li>Developer: {page01.Developer}</li>
            </ul>

            [...]
        </>
    )
}
```
* Set data to context **/src/modules/UserForm/UserForm.jsx**
```
export const UserForm = () => {
    const { page01 } = useDataState();
    const appDispatch = useAppDispatch();
    const dataDispatch = useDataDispatch();

        const onSubmit = (data) => {
        dataDispatch({
            type: 'setPage01',
            data: data
        });
        appDispatch({type: 'nextStep'});
    }

    [...]
}
```

### Forms
[React Hook Form](https://react-hook-form.com/) is used for handling form submissions, validation etc. This is just as an example. You can just as well use [Formik](https://formik.org/) or any other library (or don't use any) - depends on the project.
One thing worth mentioning is that if you stay with React Hook Form and plan to support IE11 you need to comment this the other way around:
```
//import { useForm } from 'react-hook-form/dist/index.ie11';
import { useForm } from 'react-hook-form';
```
in **/src/modules/UserForm/UserForm.jsx**

### Property validation
[prop-types](https://www.npmjs.com/package/prop-types) is used for that. It comes in handy when debuging as is considered good practice overall.
Example use can be found in **src/modules/Steps/PrevNext.jsx**
```
import React from 'react';
import PropTypes from 'prop-types';
[...]

export const PrevNext = (props) => {
    [...]

    return (
        <div className="prevNext">
            <button
                className="prevNext__button"
                disabled={props.prevDisabled}
                onClick={() => { appDispatch({ type: 'previousStep' }) }}>
                    {translations.stepsPrev}
            </button>
            [...]
        </div>
    )
}

PrevNext.propTypes = {
    nextDisabled:  PropTypes.bool,
    nextStepReset: PropTypes.bool,
    prevDisabled:  PropTypes.bool
}
```

### Linting
When using VSCode with ESLint and stylelint extensions installed JS/CSS errors should be highlighted in the editor. In addition for CI there are two separte commands:
* npm run lint:js - will lint js/jsx
* npm run lint:css - will lint css/scss

## TO-DO
* add styled components like [Emotion](https://emotion.sh/docs/introduction)
* add [cypress](https://www.cypress.io/) for E2E testing
* add [jest](https://jestjs.io/en/) for unit testing
