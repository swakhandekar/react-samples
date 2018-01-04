import * as React from "react";
import {shallow} from "enzyme";
import {FormBefore} from "../../../../src/components/form/before/FormBefore";

describe("FormBefore component", () => {
    const getComponent = () => shallow(<FormBefore/>);

    it('should have a form', () => {
        const component = getComponent();

        expect(component.find("form")).toHaveLength(1);
    });

    it('should have a three input fields', () => {
        const component = getComponent();

        let form = component.find("form");
        expect(form.find('input')).toHaveLength(3);
    });

    it('should have a submit button', function () {
        const component = getComponent();

        let button = component.find('button');
        expect(button).toHaveLength(1);
        expect(button.props().type).toBe('submit');
    });

    describe('field 1', function () {
        let span;
        let inputField;
        let component;
        beforeEach(() => {
            component = getComponent();
            span = component.find('form').childAt(0);
            inputField = span.find('input');
        });

        it('should have field name text as "Text field"', function () {
            expect(span.text()).toBe("Text field: ");
        });

        it('should have input field with type text', function () {
            expect(inputField.props().type).toBe('text');
        });

        it('should have input field with placeholder', function () {
            expect(inputField.props().placeholder).toBe('text field');
        });

        it('should show error message on submit if the text entered is not valid', function () {
            let form = component.find('form');
            form.simulate('submit', {
                preventDefault: () => (null),
                target: [
                    {value: ''},
                    {value: 123}
                ]
            });

            form = component.find('form');
            expect(form.childAt(0).find('.error-message').text()).toBe('Please enter a valid text');
        });

        it('should not show error message on submit if the text entered is valid', function () {
            let form = component.find('form');
            form.simulate('submit', {
                preventDefault: () => (null),
                target: [
                    {value: 'some value'},
                    {value: 123}
                ]
            });

            form = component.find('form');
            expect(form.childAt(0).find('.error-message').text()).toBe('');
        });
    });

    describe('field 2', function () {
        let span;
        let inputField;
        let component;
        beforeEach(() => {
            component = getComponent();
            span = component.find('form').childAt(1);
            inputField = span.find('input');
        });

        it('should have field name text as "Number field:"', function () {
            expect(span.text()).toBe("Number field: ");
        });

        it('should have input field with type number', function () {
            expect(inputField.props().type).toBe('number');
        });

        it('should have input field with placeholder', function () {
            expect(inputField.props().placeholder).toBe('number field');
        });

        it('should show error message on submit if the text entered is not valid', function () {
            let form = component.find('form');
            form.simulate('submit', {
                preventDefault: () => (null),
                target: [
                    {value: 'Some value'},
                    {value: ''}
                ]
            });

            form = component.find('form');
            expect(form.childAt(1).find('.error-message').text()).toBe('Please enter a valid number');
        });

        it('should not show error message on submit if the text entered is valid', function () {
            let form = component.find('form');
            form.simulate('submit', {
                preventDefault: () => (null),
                target: [
                    {value: 'some value'},
                    {value: ''}
                ]
            });

            form = component.find('form');
            expect(form.childAt(0).find('.error-message').text()).toBe('');
        });

    });

    describe('field 3', function () {
        let span;
        let inputField;
        beforeEach(() => {
            span = getComponent().find('form').childAt(2);
            inputField = span.find('input');
        });

        it('should have field name text as "Password field:"', function () {
            expect(span.text()).toBe("Password field: ");
        });

        it('should have input field with type password', function () {
            expect(inputField.props().type).toBe('password');
        });

        it('should have input field with placeholder', function () {
            expect(inputField.props().placeholder).toBe('password field');
        });
    });
});
