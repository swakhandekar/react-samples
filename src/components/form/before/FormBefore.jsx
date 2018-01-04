import * as React from "react"

export class FormBefore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            validTextField: true,
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    isValidTextField(value) {
        return !!(value && value.length > 0);
    }

    onFormSubmit(event) {
        event.preventDefault();

        const textFieldValue = event.target[0].value;
        if (!this.isValidTextField(textFieldValue)) {
            this.setState({
                validTextField: false
            });
        }
        else {
            this.setState({
                validTextField: true
            });
            const data = {
                textFieldValue: textFieldValue,
            };
            this.props.postForm(data);
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
                    </div>
                    <div className="form-password-field">
                        <span>Password field: </span>
                        <input type="password" placeholder="password field"/>
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
