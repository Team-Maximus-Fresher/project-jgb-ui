import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from '../components/PageNotFound'

describe('PageNotFound should render', () => {

    let component;
    beforeEach(() => component = shallow( <PageNotFound />));

    it("Render", () => {
        /* console.log(component.debug()); */ 
        expect(component.find('div').length).toEqual(1); 
    })

});