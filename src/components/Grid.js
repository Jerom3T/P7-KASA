import React from 'react';
import accommodationsData from '../data/data.json';
import { NavLink } from 'react-router-dom';

const Grid = () => {
  const accommodations = accommodationsData;

  return (
    <div className="grid">
      {accommodations.map(accommodation => (
        <NavLink
          key={accommodation.id}
          to={`/details/${accommodation.id}`}
          className="accommodation-image"
          activeClassName="active"
        >
          <img src={accommodation.cover} alt="Couverture" />
          <div className="accommodation-info">
            <h2>{accommodation.title}</h2>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Grid;
