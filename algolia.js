const { apiKey, applicationID } = require('./config');
const algoliasearch = require("algoliasearch");
const nbaPlayers = require('./nba-players');
const nbaTeams = require('./nba-teams');

const client = algoliasearch(applicationID, apiKey);
const playersIndex = client.initIndex("nba-players");
const teamsIndex = client.initIndex('nba-teams');


playersIndex.saveObjects(nbaPlayers, {
        autoGenerateObjectIDIfNotExist: true,
    }).then(({ objectIDs }) => {
        console.log("PLAYER IDS")
        console.log(objectIDs);
    });


teamsIndex.saveObjects(nbaTeams, { autoGenerateObjectIDIfNotExist: true }).then(({ objectIDs }) => {
    console.log("TEAM IDS");
    console.log(objectIDs);
});

playersIndex.setSettings({
    searchableAttributes: [ 'unordered(name)' ]
}).then(() => {
    playersIndex.getSettings().then((settings) => {
        console.log(settings);
    });
});

teamsIndex
  .setSettings({
      searchableAttributes: [ "name", "location" ], // algolia engine considers attributes higher in searchable attributes list more relevant than lower attributes
      customRanking: ['desc(score)']
  })
  .then(() => {
    teamsIndex.getSettings().then((settings) => {
      console.log(settings);
    });
  });

teamsIndex.search().then(result => {
    console.log(result.nbHits);
    for (const hit of result.hits) {
        console.log(hit);
    };
});

  // ranking => points? score for teams?
  // what does relevance actually mean?
  /* RANKING:
  1. number of typos
  2. */

// custom ranking
// values can't be strings because the objects will end up being ranked alphabetically
