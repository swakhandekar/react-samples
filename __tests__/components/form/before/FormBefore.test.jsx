import * as React from "react";
import { shallow } from "enzyme";
import { FormBefore } from "../../../../src/components/form/before/FormBefore";

describe("FormBefore component", () => {

    const getComponent = () => shallow(<FormBefore/>);

    it('should have a div with text', () => {
        const component = getComponent();
        
        expect(component.find("div").text()).toBe("Form Before");
    });
});