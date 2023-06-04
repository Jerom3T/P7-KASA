import React, { useState } from 'react';
import PropTypes from 'prop-types';
import chevronLeft from '../images/chevron_carousel_left.png';
import chevronRight from '../images/chevron_carousel_right.png';

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      {pictures.map((picture, index) => (
        <div
          className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          key={picture}
        >
          <img
            src={picture}
            alt="Cover"
            className={`carousel-image ${index === currentIndex ? 'show' : ''}`}
          />
        </div>
      ))}
      {currentIndex !== null && (
        <>
          <button className="carousel-btn prev-btn" onClick={handlePrev}>
            <img src={chevronLeft} alt="Chevron Left" />
          </button>
          <div className="image-counter">
            {currentIndex + 1}/{pictures.length}
          </div>
          <button className="carousel-btn next-btn" onClick={handleNext}>
            <img src={chevronRight} alt="Chevron Right" />
          </button>
        </>
      )}
    </div>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
