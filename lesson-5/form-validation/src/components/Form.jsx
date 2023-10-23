import React, { Fragment, useRef } from 'react';

const Form = () => {
    const nameInputRef = useRef();

    const getValueOnSubmit = (e) => {
        e.preventDefault();
        console.log(
            `Name: ${e.target[0].value ? e.target[0].value : 'No name'}`
        );
        console.log(`Favorite CSS Compiler: ${e.target[1].value}`);
        console.log(
            `Message: ${e.target[2].value ? e.target[2].value : 'No message'}`
        );
        console.log(
            `Receive our newsletter?: ${
                e.target[3].value === 'on' ? 'checked' : 'not checked'
            }`
        );
        console.log(
            `Email: ${e.target[4].value ? e.target[4].value : 'No email'}`
        );

        console.log(
            `Name value with ref: ${
                nameInputRef.current.value
                    ? nameInputRef.current.value
                    : 'No name'
            }`
        );

        console.log(
            `Name: ${
                e.target.elements[0].value
                    ? e.target.elements[0].value
                    : 'No name'
            }`
        );
        console.log(`Favorite CSS Compiler: ${e.target.elements[1].value}`);
        console.log(
            `Message: ${
                e.target.elements[2].value
                    ? e.target.elements[2].value
                    : 'No message'
            }`
        );
        console.log(
            `Receive our newsletter?: ${
                e.target.elements[3].value ? 'checked' : 'Not checked'
            }`
        );
        console.log(
            `Email: ${
                e.target.elements[4].value
                    ? e.target.elements[4].value
                    : 'No email'
            }`
        );
    };

    return (
        <Fragment>
            <form onSubmit={getValueOnSubmit}>
                <label htmlFor="name">Name</label>&nbsp;
                <input
                    ref={nameInputRef}
                    type="text"
                    id="name"
                    placeholder="Enter name..."
                />
                <br />
                <br />
                <label htmlFor="select">Favorite CSS Compiler</label>&nbsp;
                <select id="select">
                    <option value="sacc">sacc</option>
                    <option value="scss">scss</option>
                    <option value="css">css</option>
                    <option value="tailwind">tailwind</option>
                </select>
                <br />
                <br />
                <br />
                <label htmlFor="message">Message</label>&nbsp;
                <textarea id="message" cols="25" rows="5"></textarea>
                <br />
                <br />
                <input type="checkbox" id="checkbox" />
                &nbsp;
                <label htmlFor="checkbox">Receive our newsletter?</label>
                <br />
                <br />
                <label htmlFor="email">Email</label>&nbsp;
                <input type="email" id="email" placeholder="Enter email..." />
                <br />
                <br />
                <fieldset>
                    <legend>Are you familiar with CSS Grid?</legend>
                    <input type="radio" id="yes" name="cssGrid" /> &nbsp;
                    <label htmlFor="yes">Yes</label> &nbsp;
                    <input type="radio" name="cssGrid" id="no" />
                    <label htmlFor="no">No</label>
                </fieldset>
                <br />
                <br />
                <button type="submit">Send Response</button>
                <br />
                <br />
                <button type="reset">Clear Form</button>
            </form>
        </Fragment>
    );
};

export default Form;
