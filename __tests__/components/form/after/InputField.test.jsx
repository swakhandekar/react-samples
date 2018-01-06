import {InputField} from "../../../../src/components/form/after/InputField";
import React from "react";
import {shallow} from "enzyme";

describe('InputField', () => {
    let type, placeholder, label;
    let component;

    const getComponent = () => shallow(
        <InputField
            label={label}
            type={type}
            placeholder={placeholder}
        />
    );

    beforeEach(() => {
        type = 'text';
        placeholder = 'default placeholder';
        label = 'default label';
    });

    it('should have a input field with passed type prop as type', () => {
        component = getComponent();

        const input = component.find('input');
        expect(input).toHaveLength(1);
        expect(input.props().type).toBe(type);
        expect(input.props().placeholder).toBe(placeholder);
    });

    it('should have a label if passed', () => {
        component = getComponent();

        let label = component.find('label');
        expect(label).toHaveLength(1);
        expect(label.text()).toBe('default label: ');
    });
});
