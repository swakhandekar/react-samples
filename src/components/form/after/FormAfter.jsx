import React from "react";
import PropTypes from "prop-types";
import {InputField} from "./InputField";
import {FormValidator} from "./formValidator";


export class FormAfter extends React.Component {
    state = {
        invalidTextField: false,
        invalidNumberField: false,
        invalidPasswordField: false,
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        const validTextField = FormValidator.isValidTextField(event.target[0].value);
        const validNumberField = FormValidator.isValidNumberField(event.target[1].value);
        const validPasswordField = FormValidator.isValidPasswordField(event.target[2].value);

        if (validTextField && validNumberField && validPasswordField) {
            this.props.postFormData();
        } else {
            this.setState({
                invalidTextField: !validTextField,
                invalidNumberField: !validNumberField,
                invalidPasswordField: !validPasswordField
            });
        }
    };

    render() {
        const {invalidTextField, invalidNumberField, invalidPasswordField} = this.state;
        return (
            <form onSubmit={this.onFormSubmit}>
                <InputField type="text" label="Text Field" placeholder="text field" invalidField={invalidTextField}/>
                <InputField type="number" label="Number Field" placeholder="number field" invalidField={invalidNumberField}/>
                <InputField type="password" label="Password Field" placeholder="password field" invalidField={invalidPasswordField}/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

FormAfter.propTypes = {
    postFormData: PropTypes.func,
};

FormAfter.defaultProps = {
    postFormData: () => (null),
};
