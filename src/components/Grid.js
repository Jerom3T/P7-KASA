import React from 'react';
import accommodationsData from '../data/data.json';
import { NavLink } from 'react-router-dom';

const Grid = () => {
  const accommodations = accommodationsData;

  return (
    <div className="grid-container">
      <div className="grid">
        {accommodations.map(accommodation => (
          <NavLink
            key={accommodation.id}
            to={`/details/${accommodation.id}`}
            className={`accommodation-image ${window.location.pathname === `/details/${accommodation.id}` ? 'active' : ''}`}
          >
            <img src={accommodation.cover} alt="Couverture" />
            <div className="accommodation-info">
              <h3>{accommodation.title}</h3>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Grid;
