import React from "react";
import { useParams } from "react-router-dom";
import accommodationsData from "../data/data.json";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import AccommodationDetails from "../components/AccommodationDetails";
import HostInfo from "../components/HostInfo";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import NotFound from "./NotFound";

const Appart = () => {
  const { id } = useParams();
  const accommodation = accommodationsData.find((item) => item.id === id);

  const [activeIndex, setActiveIndex] = React.useState(null);

  if (!accommodation) {
    return <NotFound />;
  }

  const data = [
    {
      title: "Description",
      content: accommodation.description,
      isList: false,
      layout: "row",
    },
    {
      title: "Équipements",
      content: accommodation.equipments,
      isList: true,
      layout: "row",
    },
  ];

  return (
    <div>
      <Header />
      <Carousel pictures={accommodation.pictures} />
      {/* ... */}
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
      <div className="collapse-container appart-page">
        {" "}
        {data.map((collapse, index) => (
          <Collapse
            key={index}
            title={collapse.title}
            content={collapse.content}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            index={index}
            isList={collapse.isList}
            layout={collapse.layout}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Appart;
