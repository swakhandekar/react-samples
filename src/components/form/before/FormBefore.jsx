import * as React from "react"

export class FormBefore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            validTextField: true,
            validNumberField: true,
            validPasswordField: true,
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    isValidTextField(value) {
        return !!(value && value.length > 0);
    }

    isValidNumberField(value) {
        let number = parseInt(value);
        return !!(number || number === 0);
    }

    isValidPasswordField(value) {
        return !!(value && value.length >= 6);
    }

    onFormSubmit(event) {
        event.preventDefault();

        const textFieldValue = event.target[0].value;
        const numberFieldValue = event.target[1].value;
        const passwordFieldValue = event.target[2].value;

        let validTextField = true, validNumberField = true, validPasswordField = true;
        if (!this.isValidTextField(textFieldValue)) {
            validTextField = false;
        }
        if (!this.isValidNumberField(numberFieldValue)) {
            validNumberField = false;
        }
        if (!this.isValidPasswordField(passwordFieldValue)) {
            validPasswordField = false;
        }
        if (validNumberField && validTextField && validPasswordField) {
            this.setState({
                validTextField: true,
                validNumberField: true,
                validPasswordField: true
            });
            const data = {
                textFieldValue: textFieldValue,
                numberFieldValue: numberFieldValue,
                passwordFieldValue: passwordFieldValue,
            };
            this.props.postForm(data);
        } else {
            this.setState({
                validTextField: validTextField,
                validNumberField: validNumberField,
                validPasswordField: validPasswordField
            });
        }
    }

    render() {
        return (
            <div className="form-before">
                <form className="form-before-form" onSubmit={this.onFormSubmit}>
                    <div className="form-text-field">
                        <span>Text field: </span>
                        <input type="text" placeholder="text field"/>
                        <div className="error-message">
                            {!this.state.validTextField && "Please enter a valid text"}
                        </div>
                    </div>
                    <div className="form-number-field">
                        <span>Number field: </span>
                        <input type="number" placeholder="number field"/>
                        <div className="error-message">
                            {!this.state.validNumberField && "Please enter a valid number"}
                        </div>
                    </div>
                    <div className="form-password-field">
                        <span>Password field: </span>
                        <input type="password" placeholder="password field"/>
                        <div className="error-message">
                            {!this.state.validPasswordField && "Password must be at least of 6 characters"}
                        </div>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

FormBefore.defaultProps = {
    postForm: (data) => (console.log(data)),
};
