import React from "react";
import Collapse from "./Collapse";

const CollapseContainer = ({ data, isAboutPage }) => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  return (
    <div
      className={`collapse-container ${
        isAboutPage ? "about-page" : "appart-page"
      }`}
    >
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
  );
};

export default CollapseContainer;
