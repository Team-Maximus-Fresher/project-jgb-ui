import { properties } from '../properties.js';
var request = require('sync-request');

export const searchApplicationsByCustId = (customerId , productCode) => {
    var uri = `${properties.backendBaseURI}/v1/loan-application/products/${productCode}/customers/${customerId}/applications`
    var res = request('GET',uri);
    console.log(JSON.parse(res.getBody()))
    return JSON.parse(res.getBody());
}