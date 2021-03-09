import React from 'react';
import { shallow } from 'enzyme';
import Homepage from '../components/Homepage';

describe('Homepage', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Homepage />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

});