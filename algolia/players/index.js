const client = require("../algolia");
const nbaPlayers = require("./nba-players.json");

const playersIndex = client.initIndex("nba-players");

playersIndex
  .saveObjects(nbaPlayers, {
    autoGenerateObjectIDIfNotExist: true,
  });

playersIndex
  .setSettings({
    searchableAttributes: [ "unordered(name)" ],
    // filter attributes must be set using attributesForFaceting at indexing time
    // can use filterOnly(attribute) here to improve search speed and reduce index size
    // tradeoff of using filterOnly is that you can't count the number of values for each facet
    attributesForFaceting: [ 'team', 'points' ]
    // must include 'points' in attributesForFaceting to use RangeSlider on frontend
  })
  .then(() => {
    playersIndex.getSettings().then((settings) => {
      console.log(settings);
    });
  });

// allow for duplicate names, or not?
// send queries back to algolia?
// redux?
// user can control hits per page 
//