import * as React from "react"

export class FormBefore extends React.Component {
    constructor(props) {
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
        const data = {};
        this.props.postForm(data);
    }

    render() {
        return (
            <div className="form-before">
                <form className="form-before-form" onSubmit={this.onFormSubmit}>
                    <div className="form-text-field">
                        <span>Text field: </span>
                        <input type="text" placeholder="text field"/>
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