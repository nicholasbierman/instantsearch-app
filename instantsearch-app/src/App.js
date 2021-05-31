import {
  InstantSearch,
  SearchBox,
  Hits,
  ClearRefinements,
  RefinementList,
  HitsPerPage,
  Pagination,
  RangeInput,
} from "react-instantsearch-dom";
import Hit from "./components/Hit";
import IndexSelector from "./components/IndexSelector";
import algoliasearch from "algoliasearch/lite";
import "./App.css";
import { useSelector } from "react-redux";

const searchClient = algoliasearch(
  "ROCHIEJW4S",
  "a1d75e2e71aa32957c2360ee48bda44e"
);

function App() {
  const indexName = useSelector((state) => state.indexState.indexName);

  return (
    <div className="ais-InstantSearch">
      <IndexSelector />
      <InstantSearch searchClient={searchClient} indexName={indexName}>
        <div className="left-panel">
          <HitsPerPage
            defaultRefinement={5}
            items={[
              {
                value: 5,
                label: "5 hits per page",
              },
              {
                value: 10,
                label: "10 hits per page",
              },
              {
                value: 15,
                label: "15 hits per page",
              },
              {
                value: 20,
                label: "20 hits per page",
              },
            ]}
          />
          <RangeInput
            attribute={indexName === "nba-teams" ? "score" : "points"}
            translations={{ submit: "Go" }}
          />
          <h2>Filter by {indexName === "nba-players" ? "Team" : "Location"}</h2>
          <ClearRefinements />
          <RefinementList
            attribute={indexName === "nba-teams" ? "location" : "team"}
          />
        </div>
        <div className="right-panel">
          <SearchBox />
          <Hits hitComponent={Hit} />
          <Pagination />
        </div>
      </InstantSearch>
    </div>
  );
}

export default App;
