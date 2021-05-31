const { apiKey, applicationID } = require('./config');
const algoliasearch = require("algoliasearch");
const client = algoliasearch(applicationID, apiKey);


module.exports = client;