import { Highlight } from 'react-instantsearch-dom';

export const Hit = ({ hit }) => {
  return (
    <div>
      <div className="hit-name">
        <Highlight attribute="name" hit={hit} />
      </div>
          <div className="hit-team">{hit.team}
        <Highlight attribute="team" hit={hit} />
      </div>
          <div className="hit-points">{hit.points} Points
        <Highlight attribute="points" hit={hit} />
      </div>
    </div>
  );
};

export default Hit;