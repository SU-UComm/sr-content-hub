import React from 'react';
import { useAppDispatch } from 'modules/AppState/AppState.jsx';
import { useDataState, useDataDispatch } from 'modules/DataState/DataState.jsx';
//import { useForm } from 'react-hook-form/dist/index.ie11';
import { useForm } from 'react-hook-form';
import { handleFormErrors } from 'src/helpers/formHelpers.js';

export const UserForm = () => {
    const { page01 } = useDataState();
    const appDispatch = useAppDispatch();
    const dataDispatch = useDataDispatch();

    const { register, handleSubmit, errors } = useForm({
        mode: "onSubmit",
    });

    const onSubmit = (data) => {
        dataDispatch({
            type: 'setPage01',
            data: data
        });
        appDispatch({type: 'nextStep'});
    }

    return (
        <form className="userForm" onSubmit={handleSubmit(onSubmit)}>
            {handleFormErrors(errors)}

            <div className="userForm__field">
                <label htmlFor="title" className="userForm__label">Title</label>
                <select
                    id="title"
                    name="Title"
                    defaultValue={page01["Title"] || ''}
                    className="userForm__select"
                    ref={
                        register(
                            {
                                required: "Title is required"
                            })
                    }>
                    <option value="">--- please select ---</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                </select>
                {handleFormErrors(errors, "Title")}
            </div>

            <div className="userForm__field">
                <label htmlFor="firstName" className="userForm__label">First name</label>
                <input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    name="First name"
                    defaultValue={page01["First name"] || ''}
                    aria-invalid={errors["First name"] ? "true" : "false"}
                    className="userForm__input"
                    ref={
                        register(
                            {
                                required: "First name is required",
                                maxLength: 80
                            })
                    } />
                {handleFormErrors(errors, "First name")}
            </div>

            <div className="userForm__field">
                <label htmlFor="lastName" className="userForm__label">Last name</label>
                <input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    name="Last name"
                    defaultValue={page01["Last name"] || ''}
                    aria-invalid={errors["Last name"] ? "true" : "false"}
                    className="userForm__input"
                    ref={
                        register(
                            {
                                required: "Last name is required",
                                maxLength: 10
                            })
                    } />
                {handleFormErrors(errors, "Last name")}
            </div>

            <div className="userForm__field">
                <label htmlFor="email" className="userForm__label">E-mail</label>
                <input
                    id="email"
                    type="text"
                    placeholder="john.doe@gmail.com"
                    name="Email"
                    defaultValue={page01["Email"] || ''}
                    aria-invalid={errors["Email"] ? "true" : "false"}
                    className="userForm__input"
                    ref={
                        register(
                            {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid e-mail address"
                                }
                            })
                    } />
                {handleFormErrors(errors, "Email")}
            </div>

            <div className="userForm__field">
                <label htmlFor="mobilePhone" className="userForm__label">Mobile number</label>
                <input
                    id="mobilePhone"
                    type="tel"
                    placeholder="345123118"
                    name="Mobile number"
                    defaultValue={page01["Mobile number"] || ''}
                    className="userForm__input"
                    ref={
                        register(
                            {
                                required: "Mobile number is required",
                                minLength: 6,
                                maxLength: 12
                            })
                    } />
                {handleFormErrors(errors, "Mobile number")}
            </div>

            <div className="userForm__field">
                <input
                    id="Developer01"
                    name="Developer"
                    defaultChecked={page01["Developer"] === "Yes" ? true : false}
                    className="userForm__radio"
                    type="radio"
                    value="Yes"
                    ref={
                        register(
                            {
                                required: "Developer is required"
                            })
                    } />
                <label htmlFor="Developer01" className="userForm__label userForm__label--inline">I am a developer</label>
            </div>

            <div className="userForm__field">
                <input
                    id="Developer02"
                    name="Developer"
                    defaultChecked={page01["Developer"] === "No" ? true : false}
                    className="userForm__radio"
                    type="radio"
                    value="No"
                    ref={
                        register(
                            {
                                required: "Developer is required"
                            })
                    } />
                <label htmlFor="Developer02" className="userForm__label userForm__label--inline">I am not a developer</label>
                {handleFormErrors(errors, "Developer")}
            </div>

            <div className="userForm__field">
                <button type="submit" className="userForm__button userForm__submit">Next step</button>
            </div>

        </form>
    )
}
