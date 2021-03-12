import React from 'react';
import { shallow } from 'enzyme';
import { searchApplicationsByCustId , searchApplicationsByMobileNo } from '../fetchData/endpoints';
import App from '../App';

const expectedOutput1 = [{"applicationDate": "2021-02-12", "applicationReferenceId": "MLP000000000010", "applicationStateLogs": [{"id": "PersonalOfferFetcher", "preApprovedAmount": 600000, "stepStatus": "FINISHED"}], "customerId": "840000012", "journeyCode": "PERSONAL_ETB_PA", "productCode": "PERSONAL", "state": "IN_PROGRESS"}]
const expectedOutput2 = [{"applicationDate": "2021-03-05", "applicationReferenceId": "MLP000000007571", "applicationStateLogs": [{"decision": "AA", "id": "PersonalPaSangamCheck", "loanAmount": 50000, "stepStatus": "FINISHED", "tenure": 60, "validityDate": "2021-04-03T00:00:00.000Z"}, {"breakdown": [{"displayName": "Stamp Duty", "value": "110"}, {"displayName": "Processing Fee", "value": "885"}, {"displayName": "Net Disbursal", "value": "49005"}], "emi": 1137, "id": "PersonalLoanOfferRequest", "interestRate": 12.989999771118164, "stepStatus": "FINISHED", "tenure": 60}, {"id": "OTPValidation", "stepStatus": "FINISHED"}, {"id": "HunterResult", "status": "NO_MATCH", "stepStatus": "FINISHED"}, {"appId": "3116142", "id": "FinnoneAppIdTask", "stepStatus": "FINISHED"}, {"accountNumber": "24501291011743", "disbursedAmount": "49005", "disbursementDate": "2021-03-05", "id": "DisbursementTask", "stepStatus": "FINISHED"}], "journeyCode": "PERSONAL_NTB", "mobileNumber": "9910009914", "productCode": "PERSONAL", "state": "COMPLETE"}]
const expectedOutput3 = {
    message : "applications not found"
}


describe('Endpoint should get the expected output', () => {

    let component;
    beforeEach(() => component = shallow( <App />));

    it("searchApplicationsByCustId", () => {
        expect(searchApplicationsByCustId(840000012,"PERSONAL")).toEqual(expectedOutput1); 
    })

    it("searchApplicationsByMobileNo", () => {
        expect(searchApplicationsByMobileNo(9910009914,"PERSONAL")).toEqual(expectedOutput2); 
    })

    /* it("searchApplicationsByCustId", () => {
        expect(searchApplicationsByCustId(840,"PERSONAL")).toEqual(expectedOutput3); 
    }) */

});