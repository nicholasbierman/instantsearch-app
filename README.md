# React Instantsearch App for NBA Teams & Players
## [Live link]()

## Index Selection
<p>The goal of this application is to create a search experience where users can search for NBA teams and players separately. I used two different indices from the provided `basketball` data set, one for `nba-teams` and `nba-players`.</p> 

<p>Keeping separate indices, as opposed to having records for both teams and players in the same index, allowed me to tailor each index's configuration to its specific content while maintaining a flattened data structure.</p>

<p>From an implementation perspective, I indexed the data using the Algolia JavaScript API (scripts to configure each index can be found in the <code>algolia</code> directory) and built the search UI with the React InstantSearch library, Redux for global state management, and AWS S3 for image hosting. I chose this approach to illustrate my proficiency with these tools.</p>


## Searchable Attributes
- nba-teams: `["name"]`
- nba-players: `["unordered(name)"]`
<p>In an effort to have as few searchable attributes as possible, I only set the `name` property to be searchable on each index. 
On the `nba-players` index, I used `["unordered(name)"]` to equally weight a player's first and last name at query time.</p>

## Filtering data
- nba-teams: `["location", "score"]`
- nba-players: `["team", "points"]`

<p>While I did not want to include these properties in <code>searchableAttributes</code>, I improved the search experience and let users fine-tune their query by including them in <code>attributesForFaceting</code> at indexing time. I chose not to use the <code>filterOnly</code> method because I needed to include counts of each facet value on the frontend with the `RefinementList` widget.</p>

## Custom Ranking
- nba-teams: `["desc(score)"]`
- nba-players: `["desc(points)"]`
<p>By default, when there is a tie between records in terms of textual relevance, the Algolia engine will use the objectID in alphanumeric order. Since a tie in terms of textual relevance is a high probability on each index (players with same first/last name on different teams, teams with same name in different locations), I set the `customRanking` attribute on each index at indexing time. In doing so, I created a search experience where the players with the most points or the teams with the highest score appeared earlier, allowing more relevant results in this use case.</p>
