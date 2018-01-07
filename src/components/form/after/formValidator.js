export class FormValidator {
    static isValidTextField(textField) {
        return !(!textField || textField === '');
    }

    static isValidNumberField(numberField) {
        return !(!numberField || isNaN(parseInt(numberField)));
    }

    static isValidPasswordField(passwordField) {
        return !(!passwordField || passwordField.length < 6);
    }
}
