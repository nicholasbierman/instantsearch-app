const client = require('../algolia');
const nbaPlayers = require('./nba-players.json');

const playersIndex = client.initIndex('nba-players');

playersIndex
  .saveObjects(nbaPlayers, {
    autoGenerateObjectIDIfNotExist: true,
  })
//   .then(({ objectIDs }) => {
//     console.log("PLAYER IDS");
//     console.log(objectIDs);
//   });

playersIndex
  .setSettings({
    searchableAttributes: ["unordered(name)"],
  })
//   .then(() => {
//     playersIndex.getSettings().then((settings) => {
//       console.log(settings);
//     });
//   });

playersIndex.search('', {
    filters: 'points:10 TO 20'
}).then(({ hits }) => {
    console.log(hits);
});