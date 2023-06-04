import React from "react";
import { useParams } from "react-router-dom";
import accommodationsData from "../data/data.json";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import AccommodationDetails from "../components/AccommodationDetails";
import HostInfo from "../components/HostInfo";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";

const Appart = () => {
  const { id } = useParams();
  const accommodation = accommodationsData.find((item) => item.id === id);

  if (!accommodation) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div>
      <Header />
      <Carousel pictures={accommodation.pictures} />
      <div className="accommodation-details-container">
        <AccommodationDetails
          title={accommodation.title}
          location={accommodation.location}
          tags={accommodation.tags}
        />
        <div className="host-rating-container">
          <HostInfo host={accommodation.host} />
          <Rating rating={accommodation.rating} />
        </div>
      </div>
      <div className="collapse-container">
        <Collapse title="Description" content={accommodation.description} />
        <Collapse title="Équipements" content={accommodation.equipments} />
      </div>
    </div>
  );
};

export default Appart;
