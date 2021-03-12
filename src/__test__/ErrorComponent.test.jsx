import React from 'react';
import { shallow } from 'enzyme';
import ErrorComponent from '../util/ErrorComponent';


const data = {
    message : "PAGE NOT FOUND"
}

describe('PageNotFound should render', () => {

    let component;
    beforeEach(() => component = shallow(  <ErrorComponent data={data} />));

    it("Render", () => {
        /* console.log(component.debug()); */ 
        expect(component.find('div').length).toEqual(1); 
    })

});