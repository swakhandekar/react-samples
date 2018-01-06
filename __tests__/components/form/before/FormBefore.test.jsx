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
        const form = component.find("form");

        expect(form.find('input')).toHaveLength(3);
    });

    it('should have a submit button', () => {
        const component = getComponent();
        const button = component.find('button');

        expect(button).toHaveLength(1);
        expect(button.props().type).toBe('submit');
    });

    describe('field 1', () => {
        let span;
        let inputField;
        let component;

        beforeEach(() => {
            component = getComponent();
            span = component.find('form').childAt(0);
            inputField = span.find('input');
        });

        it('should have field name text as "Text field"', () => {
            expect(span.text()).toBe("Text field: ");
        });

        it('should have input field with type text', () => {
            expect(inputField.props().type).toBe('text');
        });

        it('should have input field with placeholder', () => {
            expect(inputField.props().placeholder).toBe('text field');
        });

        it('should show error message on submit if the text entered is not valid', () => {
            let form = component.find('form');
            form.simulate('submit', {
                preventDefault: () => (null),
                target: [
                    {value: ''},
                    {value: 123},
                    {value: "abcdefg"},
                ]
            });

            form = component.find('form');
            expect(form.childAt(0).find('.error-message').text()).toBe('Please enter a valid text');
        });

        it('should not show error message on submit if the text entered is valid', () => {
            let form = component.find('form');
            form.simulate('submit', {
                preventDefault: () => (null),
                target: [
                    {value: 'some value'},
                    {value: 123},
                    {value: "abcdefg"},
                ]
            });

            form = component.find('form');
            expect(form.childAt(0).find('.error-message').text()).toBe('');
        });
    });

    describe('field 2', () => {
        let span;
        let inputField;
        let component;
        beforeEach(() => {
            component = getComponent();
            span = component.find('form').childAt(1);
            inputField = span.find('input');
        });

        it('should have field name text as "Number field:"', () => {
            expect(span.text()).toBe("Number field: ");
        });

        it('should have input field with type number', () => {
            expect(inputField.props().type).toBe('number');
        });

        it('should have input field with placeholder', () => {
            expect(inputField.props().placeholder).toBe('number field');
        });

        it('should show error message on submit if the text entered is not valid', () => {
            let form = component.find('form');
            form.simulate('submit', {
                preventDefault: () => (null),
                target: [
                    {value: 'Some value'},
                    {value: ''},
                    {value: "abcdefg"},
                ]
            });

            form = component.find('form');
            expect(form.childAt(1).find('.error-message').text()).toBe('Please enter a valid number');
        });

        it('should not show error message on submit if the text entered is valid', () => {
            let form = component.find('form');
            form.simulate('submit', {
                preventDefault: () => (null),
                target: [
                    {value: 'some value'},
                    {value: ''},
                    {value: "abcdefg"}
                ]
            });

            form = component.find('form');
            expect(form.childAt(0).find('.error-message').text()).toBe('');
        });

    });

    describe('field 3', () => {
        let span;
        let inputField;
        let component
        beforeEach(() => {
            component = getComponent();
            span = component.find('form').childAt(2);
            inputField = span.find('input');
        });

        it('should have field name text as "Password field:"', () => {
            expect(span.text()).toBe("Password field: ");
        });

        it('should have input field with type password', () => {
            expect(inputField.props().type).toBe('password');
        });

        it('should have input field with placeholder', () => {
            expect(inputField.props().placeholder).toBe('password field');
        });

        it('should show error message on submit if the text entered is not valid', () => {
            let form = component.find('form');
            form.simulate('submit', {
                preventDefault: () => (null),
                target: [
                    {value: 'Some value'},
                    {value: 123},
                    {value: 'ag'},
                ]
            });

            form = component.find('form');
            expect(form.childAt(2).find('.error-message').text()).toBe('Password must be at least of 6 characters');
        });

        it('should not show error message on submit if the text entered is valid', () => {
            let form = component.find('form');
            form.simulate('submit', {
                preventDefault: () => (null),
                target: [
                    {value: 'some value'},
                    {value: 123},
                    {value: "abcdefg"},
                ]
            });

            form = component.find('form');
            expect(form.childAt(2).find('.error-message').text()).toBe('');
        });
    });
});
