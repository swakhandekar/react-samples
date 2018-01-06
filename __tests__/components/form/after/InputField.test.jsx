import {InputField} from "../../../../src/components/form/after/InputField";
import React from "react";
import {shallow} from "enzyme";

describe('InputField', () => {
    let type, placeholder, label, errorMessage, invalidField;
    let component;

    const getComponent = () => shallow(
        <InputField
            label={label}
            type={type}
            placeholder={placeholder}
            errorMessage={errorMessage}
            invalidField={invalidField}
        />
    );

    beforeEach(() => {
        type = 'text';
    });

    it('should have a input field with passed type prop as type', () => {
        placeholder = 'default placeholder';
        component = getComponent();
        const input = component.find('input');

        expect(input).toHaveLength(1);
        expect(input.props().type).toBe(type);
        expect(input.props().placeholder).toBe(placeholder);
    });

    it('should have a label if passed', () => {
        label = 'default label';
        component = getComponent();

        const labelField = component.find('label');
        expect(labelField).toHaveLength(1);
        expect(labelField.text()).toBe('default label: ');
    });

    it('should show passed error message if the invalidField flag is true', () => {
        invalidField = true;
        errorMessage = "Some error";
        component = getComponent();

        expect(component.find('.error-message').text()).toBe(errorMessage)
    });

    it('should not show error message if the invalidField flag is false', () => {
        invalidField = false;
        errorMessage = 'Some error';
        component = getComponent();

        expect(component.find('.error-message')).toHaveLength(0);
    });
});
