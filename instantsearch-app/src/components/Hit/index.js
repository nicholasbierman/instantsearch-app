import { Highlight } from "react-instantsearch-dom";
import { useSelector } from "react-redux";
import "../../App.css";

export const Hit = ({ hit }) => {
  const indexName = useSelector((state) => state.indexState.indexName);
  const logoUrlBase = "https://instantsearch-logos.s3.amazonaws.com";
  return (
    <div>
      {indexName === "nba-teams" ? (
        <img alt={hit.name} src={`${logoUrlBase}/${hit.logoUrl}`} />
      ) : null}
      <div className="hit-location">
        <Highlight attribute="location" hit={hit} />
      </div>
      <div className="hit-name">
        <Highlight attribute="name" hit={hit} />
      </div>
      <div className="hit-team">{hit.team}
        <Highlight attribute="team" hit={hit} />
      </div>
      {hit.points && <div className="hit-points">{hit.points} Points</div>}
      {hit.score && (
        <div className="hit-score">Score: {Math.ceil(hit.score)}</div>
      )}
    </div>
  );
};

export default Hit;
