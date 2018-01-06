import {shallow} from "enzyme";
import React from "react";
import {FormAfter} from "../../../../src/components/form/after/FormAfter";
import {InputField} from "../../../../src/components/form/after/InputField";
import {FormValidator} from "../../../../src/components/form/after/formValidator";

describe('FormAfter', () => {
    let mockPostFormData;
    const getComponent = () => (shallow(<FormAfter postFormData={mockPostFormData}/>));
    let component;

    it('should have a form', () => {
        component = getComponent();

        expect(component.find('form')).toHaveLength(1);
    });

    it('should have three InputFields in form', () => {
        component = getComponent();
        const form = component.find('form');
        const inputFields = form.find(InputField);

        expect(inputFields).toHaveLength(3);
    });

    it('should have a text field with a placeholder', () => {
        component = getComponent();
        const form = component.find('form');
        const textField = form.find(InputField).at(0);

        expect(textField.props().type).toBe('text');
        expect(textField.props().placeholder).toBe('text field');
    });

    it('should have a number field with a placeholder', () => {
        component = getComponent();
        const form = component.find('form');
        const numberField = form.find(InputField).at(1);

        expect(numberField.props().type).toBe('number');
        expect(numberField.props().placeholder).toBe('number field');
    });

    it('should have a password field with a placeholder', () => {
        component = getComponent();
        const form = component.find('form');
        const textField = form.find(InputField).at(2);

        expect(textField.props().type).toBe('password');
        expect(textField.props().placeholder).toBe('password field');
    });

    it('should have a submit button', () => {
        component = getComponent();

        const form = component.find('form');
        const button = form.find('button');

        expect(button).toHaveLength(1);
        expect(button.text()).toBe('Submit');
        expect(button.props().type).toBe('submit');
    });

    it('should submit the form data if every field is valid', () => {
        spyOn(FormValidator, 'isValidTextField').and.returnValue(true);
        spyOn(FormValidator, 'isValidPasswordField').and.returnValue(true);
        spyOn(FormValidator, 'isValidNumberField').and.returnValue(true);
        mockPostFormData = jest.fn();
        component = getComponent();
        const form = component.find('form');

        form.simulate('submit', {
            preventDefault: () => (null),
            target: [
                {value: 'some value'},
                {value: 123},
                {value: 'some password'},
            ]
        });

        expect(mockPostFormData).toHaveBeenCalled();
    });

    it('should show respective error messages if any of fields is invalid on submit', () => {
        spyOn(FormValidator, 'isValidTextField').and.returnValue(false);
        spyOn(FormValidator, 'isValidPasswordField').and.returnValue(false);
        spyOn(FormValidator, 'isValidNumberField').and.returnValue(true);
        mockPostFormData = jest.fn();
        component = getComponent();
        let form = component.find('form');

        form.simulate('submit', {
            preventDefault: () => (null),
            target: [
                {value: ''},
                {value: 123},
                {value: 'abcd'},
            ]
        });

        form = component.find('form');
        const textField = form.find(InputField).at(0);
        const numberField = form.find(InputField).at(1);
        const passwordField = form.find(InputField).at(2);

        expect(textField.props().invalidField).toBe(true);
        expect(numberField.props().invalidField).toBe(false);
        expect(passwordField.props().invalidField).toBe(true);
        expect(mockPostFormData).toHaveBeenCalledTimes(0);
    });
});
