import React from 'react';
import upArrowImage from '../images/Vector_up.png';
import downArrowImage from '../images/Vector_down.png';

const Collapse = ({ title, content, activeIndex, setActiveIndex, index, isList, layout }) => {
  const handleToggleCollapse = () => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`collapse ${layout === 'row' ? 'row-layout' : 'column-layout'} ${activeIndex === index ? 'expanded' : 'collapsed'}`}>
      <div className="collapse-header" onClick={handleToggleCollapse}>
        <div className="collapse-title">{title}</div>
        <div className="collapse-arrow-container">
          <img className={`collapse-arrow ${activeIndex === index ? 'up-arrow' : 'down-arrow'}`} src={activeIndex === index ? upArrowImage : downArrowImage} alt="Arrow" />
        </div>
      </div>
      {activeIndex === index && (
        <div className="collapse-content">
          {isList ? (
            <ul>{Array.isArray(content) && content.map((item, i) => <li key={i}>{item}</li>)}</ul>
          ) : (
            Array.isArray(content) ? (
              content.map((item, i) => <p key={i}>{item}</p>)
            ) : (
              <p>{content}</p>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Collapse;
