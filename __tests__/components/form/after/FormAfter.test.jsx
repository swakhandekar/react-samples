import {shallow} from "enzyme";
import React from "react";
import {FormAfter} from "../../../../src/components/form/after/FormAfter";
import {InputField} from "../../../../src/components/form/after/InputField";

describe('FormAfter', () => {
    const getComponent = () => (shallow(<FormAfter />));
    let component;

    it('should have a form', function () {
        component = getComponent();

        expect(component.find('form')).toHaveLength(1);
    });

    it('should have three InputFields in form', function () {
        component = getComponent();

        const form = component.find('form');

        let inputFields = form.find(InputField);
        expect(inputFields).toHaveLength(3);
    });
});
