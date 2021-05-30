import { Highlight } from 'react-instantsearch-dom';
import { useSelector } from 'react-redux';
import '../../App.css';

export const Hit = ({ hit }) => {
  const indexName = useSelector(state => state.indexState.indexName);
  const logoUrlBase = "https://instantsearch-logos.s3.amazonaws.com"
  return (
    <div>
      {indexName === "nba-teams" ? (
        <img
          alt={hit.name}
          src={`${logoUrlBase}/${hit.logoUrl}`}
        />
      ) : null}
      <div className="hit-name">
        <Highlight attribute="name" hit={hit} />
      </div>
      <div className="hit-team">
        {hit.team}
        <Highlight attribute="team" hit={hit} />
      </div>
      <div className="hit-points">
        {hit.points} Points
        <Highlight attribute="points" hit={hit} />
      </div>
    </div>
  );
};

export default Hit;