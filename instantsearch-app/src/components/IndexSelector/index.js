import { useDispatch, useSelector } from "react-redux";
import { changeSearchIndex } from "../../store/indexState";
import "./IndexSelector.css";

export const IndexSelector = () => {
  const indexName = useSelector((state) => state.indexState.indexName);
  const dispatch = useDispatch();
  /* handleClick doesn't need to accept the entire event object
    as an argument since the changeSearchIndex thunk accepts a single string to update the indexState in Redux
    */
  const handleClick = (value) => {
    dispatch(changeSearchIndex(value));
  };
  return (
    <div>
      <button
        onClick={(e) => handleClick(e.target.value)}
        value="nba-players"
        className={indexName === "nba-players" ? "active" : undefined}>
        Search for Players
      </button>

      <button
        onClick={(e) => handleClick(e.target.value)}
        value="nba-teams"
        className={indexName === "nba-teams" ? "active" : undefined}>
        Search for Teams
      </button>
    </div>
  );
};

export default IndexSelector;
