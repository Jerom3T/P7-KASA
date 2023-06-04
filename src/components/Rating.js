import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => {
  const parsedRating = parseFloat(rating);

  if (isNaN(parsedRating) || parsedRating < 0 || parsedRating > 5) {
    return <div>Invalid rating</div>;
  }

  const filledStars = Math.floor(parsedRating);
  const remainingStars = 5 - filledStars;

  return (
    <div className="rating">
      {[...Array(filledStars)].map((_, index) => (
        <span key={index} style={{ color: '#ff6060', fontSize: '24px' }}>
          ★
        </span>
      ))}
      {[...Array(remainingStars)].map((_, index) => (
        <span key={index} style={{ color: 'grey', fontSize: '24px' }}>
          ★
        </span>
      ))}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;
