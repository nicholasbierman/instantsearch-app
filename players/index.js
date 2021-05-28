const client = require("../algolia");
const nbaPlayers = require("./nba-players.json");

const playersIndex = client.initIndex("nba-players");

// playersIndex
//   .saveObjects(nbaPlayers, {
//     autoGenerateObjectIDIfNotExist: true,
//   })
//   .then(({ objectIDs }) => {
//     console.log("PLAYER IDS");
//     console.log(objectIDs);
//   });

playersIndex
  .setSettings({
    searchableAttributes: [ "unordered(name)" ],
    // filter attributes must be set using attributesForFaceting at indexing time
    // can use filterOnly(attribute) here to improve search speed and reduce index size
    // tradeoff of using filterOnly is that you can't count the number of values for each facet
    attributesForFaceting: ['team']
  })
  .then(() => {
    playersIndex.getSettings().then((settings) => {
      console.log(settings);
    });
  });

// playersIndex.search('', {
//     filters: 'points:10 TO 20'
// }).then(({ hits }) => {
//     console.log(hits);
// });
