const { apiKey, applicationID } = require('./config');
const algoliasearch = require("algoliasearch");
const client = algoliasearch(applicationID, apiKey);




  // ranking => points? score for teams?
  // what does relevance actually mean?
  /* RANKING:
  1. number of typos
  2. */

// custom ranking

module.exports = client;