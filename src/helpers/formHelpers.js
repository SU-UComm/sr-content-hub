import React from 'react';
import styled from '@emotion/styled';
import cssVars from 'src/styles/imports/variables.scss';

const ErrorListItem = styled.li`
    margin: 0;
    padding: 0;
`;

const ErrorTextTop = styled.p`
    color: ${cssVars.errorTextColor};
    font-size: ${cssVars.fontSizeSmall};
    margin: 0;
    padding: 0;
`;

const ErrorText = styled.p`
    color: ${cssVars.errorTextColor};
    font-size: ${cssVars.fontSizeSmall};
    margin: 0;
    padding: 0.3rem 0 0;
`;

/**
 * Display form errors
 * @description If name is provided it will only print error for given name else it will list all form errors
 * @param {Object} errors react-hook-form errors object
 * @param {String} name form element name
 * @returns {JSX} error markup
 */
export const HandleFormErrors = (errors, name) => {
    if (!name) {
        return (
            <ul className="form-errors">
                {Object.keys(errors).map((key, i) => {
                    if (errors[key].message) {
                        return (
                            <ErrorListItem className="form-error" key={`error${i}`}>
                                <ErrorTextTop role="alert">{errors[key].message}</ErrorTextTop>
                            </ErrorListItem>
                        );
                    }
                })}
            </ul>
        );
    } else {
        if (Object.prototype.hasOwnProperty.call(errors, name)) {
            if (errors[name].message) {
                return (
                    <ErrorText className="form-error" role="alert">
                        {errors[name].message}
                    </ErrorText>
                );
            } else if (errors[name].type === 'maxLength') {
                return (
                    <ErrorText className="form-error" role="alert">
                        Max length exceeded
                    </ErrorText>
                );
            } else {
                return (
                    <ErrorText className="form-error" role="alert">
                        Min length not reached
                    </ErrorText>
                );
            }
        }
    }
};
