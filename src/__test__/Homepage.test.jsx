import React from 'react';
import { shallow } from 'enzyme';
import Homepage from '../components/Homepage';
import store from '../store'
import InputCard from '../components/InputCard';
import {Container} from '@material-ui/core';
import ApplicationDetails from './ApplicationDetails';

describe('Homepage', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Homepage store={store}/>));

  const getHomepageConfig = ()=>{
    return {
      title : "Search by Customer ID",
      inputLabel : "Enter Customer ID",
      inputName : "id",
      productCodeOptions : ["PERSONAL","FOUR_WHEELER_PERSONAL"],
      endPoint : searchApplicationsByCustId,
      redirection : {
          config : "searchByMobileNoConfig",
          text : "Search by mobile number"
      } 
    }
  }

  it('should render a <div />', () => {
    expect(wrapper.containsMatchingElement(<ApplicationDetails endpointConfig={getHomepageConfig().endPoint}/>)).toEqual(1);
  });

});