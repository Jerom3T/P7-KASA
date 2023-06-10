import React, { useState } from 'react';
import Header from '../components/Header';
import Banner2 from '../components/Banner2';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <Header />
      <Banner2 />

      <div className="container">
        <div className="collapse-container">
          <Collapse
            title="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            index={0}
            layout="column" // Ajout de la prop layout
          />

          <Collapse
            title="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            index={1}
            layout="column" // Ajout de la prop layout
          />

          <Collapse
            title="Service"
            content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            index={2}
            layout="column" // Ajout de la prop layout
          />

          <Collapse
            title="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            index={3}
            layout="column" // Ajout de la prop layout
          />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
