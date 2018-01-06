import {shallow} from "enzyme";
import React from "react";
import {FormAfter} from "../../../../src/components/form/after/FormAfter";
import {InputField} from "../../../../src/components/form/after/InputField";

describe('FormAfter', () => {
    const getComponent = () => (shallow(<FormAfter />));
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
});
