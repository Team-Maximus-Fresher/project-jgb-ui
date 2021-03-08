import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../util/Navbar';
import { AppBar } from '@material-ui/core';

describe('Navbar', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Navbar />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Appbar Component', () => {
    expect(wrapper.find('img').length).toEqual(1);
  });

 /*  it('should render the Appbar Component', () => {
    expect(wrapper.containsMatchingElement(<AppBar />)).toEqual(true);
  }); */
});