import React, { useState } from 'react';
import upArrowImage from '../images/Vector_up.png';
import downArrowImage from '../images/Vector_down.png';

const Collapse = ({ title, content, isList, layout }) => {
  const [isOpen, setIsOpen] = useState(false); 

  const handleToggleCollapse = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className={`collapse ${layout === 'row' ? 'row-layout' : 'column-layout'} ${isOpen ? 'expanded' : 'collapsed'}`}>
      <div className="collapse-header" onClick={handleToggleCollapse}>
        <div className="collapse-title">{title}</div>
        <div className="collapse-arrow-container">
          <img className={`collapse-arrow ${isOpen ? 'up-arrow' : 'down-arrow'}`} src={isOpen ? upArrowImage : downArrowImage} alt="Arrow" />
        </div>
      </div>
      {isOpen && (
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
