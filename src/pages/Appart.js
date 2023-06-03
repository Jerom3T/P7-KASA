import React, { useState } from "react";
import accommodationsData from "../data/data.json";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import chevronLeft from "../images/chevron_carousel_left.png";
import chevronRight from "../images/chevron_carousel_right.png";

const Appart = () => {
  const { id } = useParams();
  const accommodation = accommodationsData.find((item) => item.id === id);

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!accommodation) {
    return <div>Logement non trouvé</div>;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? accommodation.pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === accommodation.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <Header />
      {/* Carousel d'images */}
      <div className="carousel">
        {accommodation.pictures.map((picture, index) => (
          <div
            className={`carousel-slide ${
              index === currentIndex ? "active" : ""
            }`}
            key={picture}
          >
            <img
              src={picture}
              alt="Cover"
              className={`carousel-image ${
                index === currentIndex ? "show" : ""
              }`}
            />
          </div>
        ))}
        {currentIndex !== null && (
          <>
            <button className="carousel-btn prev-btn" onClick={handlePrev}>
              <img src={chevronLeft} alt="Chevron Left" />
            </button>
            <div className="image-counter">
              {currentIndex + 1}/{accommodation.pictures.length}
            </div>
            <button className="carousel-btn next-btn" onClick={handleNext}>
              <img src={chevronRight} alt="Chevron Right" />
            </button>
          </>
        )}
      </div>
      {/* Contenu de la page de l'hébergement */}
      <div className="accommodation-details">
        <div className="title-container">
          <h2>{accommodation.title}</h2>
          <p>Emplacement : {accommodation.location}</p>
        </div>

        <div className="host-info">
          <div className="host-details">
            <p>{accommodation.host.name}</p>
            <img src={accommodation.host.picture} alt="Host" />
            {/* Étoiles pour la notation */}
            <div className="rating">
              {Array(parseInt(accommodation.rating)).fill(<span>★</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appart;
