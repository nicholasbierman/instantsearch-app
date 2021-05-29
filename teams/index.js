const client = require("../algolia");
const nbaTeams = require("./nba-teams.json");

const teamsIndex = client.initIndex("nba-teams");

// teamsIndex
//   .saveObjects(nbaTeams, { autoGenerateObjectIDIfNotExist: true })
//   .then(({ objectIDs }) => {
//     console.log("TEAM IDS");
//     console.log(objectIDs);
//   });

teamsIndex
  .setSettings({
    searchableAttributes: ["name", "location"], // algolia engine considers attributes higher in searchable attributes list more relevant than lower attributes
    customRanking: [ "desc(score)" ], // values can't be strings because the objects will end up being ranked alphabetically
    attributesForFaceting: ["location"]
  })
  .then(() => {
    teamsIndex.getSettings().then((settings) => {
      console.log(settings);
    });
  });

// teamsIndex.search('', {
//     filters: 'score:<=400'
// }).then((result) => {
//   console.log(result.nbHits);
//   for (const hit of result.hits) {
//     console.log(hit);
//   }
// });
