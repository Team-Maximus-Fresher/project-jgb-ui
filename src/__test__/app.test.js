import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Navbar from '../util/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Homepage from '../components/Homepage';

describe('App', () => {

  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Calculator Component', () => {
    expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true);
  });

  it('should render the Browser Router Component', () => {
    expect(wrapper.find('BrowserRouter').length).toEqual(1);
  });

  it('should render the Provider Component', () => {
    expect(wrapper.find('Provider').length).toEqual(1);
  });

});