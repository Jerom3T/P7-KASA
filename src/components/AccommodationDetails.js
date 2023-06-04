import React from 'react';
import PropTypes from 'prop-types';

const AccommodationDetails = ({ title, location, tags }) => {
  return (
    <div className="accommodation-details">
      <div className="title-container">
        <h2>{title}</h2>
        <p>Emplacement : {location}</p>

        <div className="tag-container">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="tag"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

AccommodationDetails.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AccommodationDetails;
