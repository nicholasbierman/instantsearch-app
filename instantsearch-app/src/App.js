import {
  InstantSearch,
  SearchBox,
  Hits,
  ClearRefinements,
  RefinementList,
  HitsPerPage,
  Pagination
} from "react-instantsearch-dom";
import Hit from './components/Hit'
import algoliasearch from "algoliasearch/lite";
import "./App.css";
import { useSelector } from 'react-redux';

const searchClient = algoliasearch(
  "ROCHIEJW4S",
  "a1d75e2e71aa32957c2360ee48bda44e"
);

function App() {
  const indexName = useSelector(state => state.indexState.indexName);

  return (
    <div className="ais-InstantSearch">
      <InstantSearch searchClient={searchClient} indexName={indexName}>
        <div className="left-panel">
          <HitsPerPage
            items={[
              { value: 5, label: "Show 5 hits" },
              { value: 10, label: "Show 10 hits" },
            ]}
            defaultRefinement={5}
          />
          <h2>Teams</h2>
          <ClearRefinements />
          <RefinementList attribute="team" />
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
