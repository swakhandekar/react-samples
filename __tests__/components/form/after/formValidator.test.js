import {FormValidator} from "../../../../src/components/form/after/formValidator";

describe('FormValidator', () => {
    describe('isValidTextField', () => {
        let textField;

        it('should return false if value is empty', () => {
            textField = '';
            expect(FormValidator.isValidTextField(textField)).toBeFalsy();
        });

        it('should return false if value is undefined', () => {
            textField = undefined;
            expect(FormValidator.isValidTextField(textField)).toBeFalsy();
        });

        it('should return true if value string with length greater than 0', () => {
            textField = 'some valid text';
            expect(FormValidator.isValidTextField(textField)).toBeTruthy();
        });
    });

    describe('isValidNumberField', () => {
        let numberField;

        it('should return false if value is undefined', () => {
            numberField = undefined;
            expect(FormValidator.isValidNumberField(numberField)).toBeFalsy();
        });

        it('should return false if value is not a number', () => {
            numberField = 'abcd';
            expect(FormValidator.isValidNumberField(numberField)).toBeFalsy();
        });

        it('should return true if value is a number', () => {
            numberField = '6';
            expect(FormValidator.isValidNumberField(numberField)).toBeTruthy();
        });
    });

    describe('isValidPasswordField', () => {
        let passwordField = 'abcd#4';

        it('should return false if value is undefined', () => {
            passwordField = undefined;
            expect(FormValidator.isValidPasswordField(passwordField)).toBeFalsy();
        });

        it('should return false if length of string is less than 6', () => {
            passwordField = 'ab';
            expect(FormValidator.isValidPasswordField(passwordField)).toBeFalsy();
        });

        it('should return true if length of string is greater than equals 6', () => {
            passwordField = 'abcdef';
            expect(FormValidator.isValidPasswordField(passwordField)).toBeTruthy();
        });
    });
});
