import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";
import logo from "./logo.svg";
import "./App.css";

const searchClient = algoliasearch(
  "ROCHIEJW4S",
  "a1d75e2e71aa32957c2360ee48bda44e"
);

function App() {
  return (
    <div className="ais-InstantSearch">
      <InstantSearch searchClient={searchClient} indexName="nba-players">
        <div className="right-panel">
          <SearchBox />
          <Hits />
        </div>
      </InstantSearch>
    </div>
  );
}

export default App;