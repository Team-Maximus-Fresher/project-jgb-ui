import React , {useState}from 'react';
import { shallow } from 'enzyme';
import ApplicationCard , {getStatusColor} from '../components/ApplicationCard'
import { Card , CardContent , Typography, Grid} from '@material-ui/core';
import { render, fireEvent } from '@testing-library/react';



const applicationData = {
    "applicationReferenceId": "MLP000000007567",
    "mobileNumber": "9910009906",
    "productCode": "PERSONAL",
    "journeyCode": "PERSONAL_NTB",
    "applicationDate": "2021-03-05",
    "applicationStateLogs": [{
            "id": "PersonalPaSangamCheck",
            "stepStatus": "FINISHED",
            "decision": "AA",
            "loanAmount": 50000,
            "validityDate": "2021-04-03T00:00:00.000Z",
            "tenure": 60
        },
        {
            "id": "PersonalLoanOfferRequest",
            "stepStatus": "FINISHED",
            "tenure": 60,
            "emi": 1137,
            "interestRate": 12.989999771118164,
            "breakdown": [{
                    "displayName": "Stamp Duty",
                    "value": "110"
                },
                {
                    "displayName": "Processing Fee",
                    "value": "885"
                },
                {
                    "displayName": "Net Disbursal",
                    "value": "49005"
                }
            ]
        },
        {
            "id": "HunterResult",
            "stepStatus": "FINISHED",
            "status": "NO_MATCH"
        },
        {
            "id": "FinnoneAppIdTask",
            "stepStatus": "FINISHED",
            "appId": "3116142"
        }
    ],
    "state": "COMPLETE"
}

const applicationData1 = {
      "applicationReferenceId": "MLP000000002388",
      "customerId": "840003729",
      "productCode": "PERSONAL",
      "journeyCode": "PERSONAL_ETB_PA",
      "applicationDate": "2021-03-10",
      "applicationStateLogs": [
        {
          "id": "PersonalOfferFetcher",
          "stepStatus": "FINISHED",
          "preApprovedAmount": 600000
        },
        {
          "id": "PersonalOfferLanding",
          "stepStatus": "FINISHED",
          "loanAmount": 600000,
          "loanPurpose": "Home Repair"
        },
        {
          "id": "PersonalPaSangamCheck",
          "stepStatus": "FINISHED",
          "decision": "AA",
          "loanAmount": 600000,
          "validityDate": "2021-04-08T00:00:00.000Z",
          "tenure": 60
        },
        {
          "id": "PersonalLoanOfferRequest",
          "stepStatus": "FINISHED",
          "tenure": 60,
          "emi": 14039,
          "interestRate": 14.25,
          "breakdown": [
            {
              "displayName": "Processing Fee",
              "value": "14160"
            },
            {
              "displayName": "Stamp Duty",
              "value": "610"
            },
            {
              "displayName": "Net Disbursal",
              "value": "585230"
            }
          ]
        },
        {
          "id": "OTPValidation",
          "stepStatus": "FINISHED"
        },
        {
          "id": "HunterResult",
          "stepStatus": "FINISHED",
          "status": "MATCH"
        },
        {
          "id": "KnockOff",
          "stepStatus": "FINISHED"
        },
        {
          "id": "FinnoneAppIdTask",
          "stepStatus": "FINISHED",
          "appId": "3116142"
        },
        {
          "id": "DisbursementTask",
          "stepStatus": "FINISHED",
          "accountNumber": "1730100003729",
          "disbursedAmount": "585230",
          "disbursementDate": "2021-03-10"
        }
      ],
      "state": "COMPLETE"
    }

let selectedStep = {}
const setSelectedStep = (data)=>{
  selectedStep = data
}

describe('ApplicationCard should render', () => {

    let component;
    beforeEach(() => component = shallow( 
    < ApplicationCard 
    data = { applicationData1 } 
    selectedStep = { selectedStep }
    setSelectedStep = { setSelectedStep }
    /> ));

    it("Render - Case 1", () => {
        expect(component.find('div').length).toEqual(1); 
    })

    /* it("Render - Case 2" , () =>{
        const component1 = shallow( < ApplicationCard data = { applicationData1 } selectedStep = { selectedStep }/> )
        expect(component1.find('div').length).toEqual(1); 
    }) */
    
    it('should render the ul Component', () => {
        expect(component.find('ul').length).toEqual(1);
    });

    /* it('should render the a Component', () => {
        const mockCallBack =  jest.fn() ;
        component.find('a').at(1).simulate("click");
        expect(mockCallBack.mock.calls.length).toEqual(1)
    }); */

    

    it('should click the a button', () => {
        const { getByTestId } = render(< ApplicationCard data = { applicationData1 } selectedStep = { selectedStep } setSelectedStep = { setSelectedStep }/>);
        const submit = getByTestId("PersonalOfferFetcher");
        /* Click on Step */
        fireEvent.click(submit);
        /* UnClick on Step */
        fireEvent.click(submit);
    });

    it('should get the status color as expected', () => {
        expect(getStatusColor("FINISHED")).toEqual("green");
        expect(getStatusColor("COMPLETE")).toEqual("green");
        expect(getStatusColor("AUTO_APPROVED")).toEqual("green");
        expect(getStatusColor("NEW")).toEqual("orange");
        expect(getStatusColor("SUSPENDED")).toEqual("red");
        expect(getStatusColor("REJECT")).toEqual("red");
        expect(getStatusColor("TERMINATED")).toEqual("red");
        expect(getStatusColor("TRIGGERED")).toEqual("grey");
        expect(getStatusColor("SKIPPED")).toEqual("grey");
   });

});