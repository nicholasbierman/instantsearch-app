const client = require("../algolia");
const nbaTeams = require("./nba-teams.json");
const teamsIndex = client.initIndex("nba-teams");


teamsIndex.saveObjects(nbaTeams, { autoGenerateObjectIDIfNotExist: true });
teamsIndex
  .setSettings({
    searchableAttributes: [ "name" ],
    customRanking: [ "desc(score)" ], // values can't be strings because the objects will end up being ranked alphabetically
    // can use filterOnly(attribute) here to improve search speed and reduce index size
    // tradeoff of using filterOnly is that you can't count the number of values for each facet
    attributesForFaceting: [ "location", "score" ],
    // must include 'score' in attributesForFaceting to use RangeSlider on frontend
    // and 'location' to use with RefinementsList on frontend
  });
