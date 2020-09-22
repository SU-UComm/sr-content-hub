import React from 'react';

/**
 * Display form errors
 * @description If name is provided it will only print error for given name else it will list all form errors
 * @param {Object} errors react-hook-form errors object
 * @param {String} name form element name
 * @returns {JSX} error markup
 */
export const handleFormErrors = (errors, name) => {
    if (!name) {
        return (
            <ul className="form-errors">
                {Object.keys(errors).map((key, i) => {
                    if (errors[key].message) {
                        return (
                            <li key={`error${i}`} className="form-errors__list-item">
                                <p className="form-error" role="alert">{errors[key].message}</p>
                            </li>
                        )
                    }
                })}
            </ul>
        )
    } else {
        if (errors.hasOwnProperty(name)) {
            if (errors[name].message) {
                return (
                    <p className="form-error" role="alert">
                        {errors[name].message}
                    </p>
                )
            } else if (errors[name].type === "maxLength") {
                return (
                    <p className="form-error" role="alert">
                        Max length exceeded
                    </p>
                )
            } else if (errors[name].type === "minLength") {
                return (
                    <p className="form-error" role="alert">
                        Min length not reached
                    </p>
                )
            }
        }
    }
}
