import React from 'react';
import accommodationsData from '../data/data.json';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const Appart = () => {
  const { id } = useParams();
  const accommodation = accommodationsData.find(item => item.id === id);

  if (!accommodation) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div>
      <Header />
      {/* Contenu de la page de l'hébergement */}
      <div className="accommodation-details">
        <img src={accommodation.cover} alt="Couverture" />
        <div className="accommodation-info">
          <h2>{accommodation.title}</h2>
          {/* Autres informations sur l'hébergement */}
        </div>
      </div>
    </div>
  );
};

export default Appart;
