import { properties } from '../properties.js';
var request = require('sync-request');

export const searchApplicationsByCustId = (custId) => {
    var uri = `${properties.backendBaseURI}/customer/${custId}`
    var res = request('GET',uri);
    return JSON.parse(res.getBody());
}