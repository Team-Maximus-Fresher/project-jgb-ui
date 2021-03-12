import React from 'react';
import { shallow } from 'enzyme';
import InputCard from '../components/InputCard'
import { Card , CardContent , Typography, Grid} from '@material-ui/core';
import { searchApplicationsByCustId , searchApplicationsByMobileNo } from '../fetchData/endpoints';
import Homepage from '../components/Homepage';
import {setForm} from '../actions/FormAction';
import { connect } from 'react-redux';
import store from '../store';

const searchByCustIdConfig = {
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


const mapStatetoProps = state => (
    props = state
)
connect(mapStatetoProps, { setForm })(Homepage)
setForm("id" , "840000012")
setForm("productCode" , "PERSONAL")
/* let props = store.getState().form; */

let props = {
    id : "840000012",
    productCode : "PERSONAL"
}
console.log(props)

describe('InputCard should render', () => {

    let component;
    beforeEach(() => component = shallow( <InputCard 
        config={searchByCustIdConfig} 
        formHandle={props} 
        /* stateControl={{
            "setPageName" : setPageName,
            "setHomepageConfig" : setHomepageConfig
    }} *//> ));

    it("Render", () => {
        /* console.log(component.debug()); */ 
        expect(component.find('div').length).toEqual(1); 
    })

});