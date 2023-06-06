import React from 'react';

const Collapse = ({ title, content, activeIndex, setActiveIndex, index, isList }) => {
  const handleToggleCollapse = () => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`collapse ${activeIndex === index ? 'expanded' : 'collapsed'}`}>
      <div className="collapse-header" onClick={handleToggleCollapse}>
        <div className="collapse-title">{title}</div>
        <div className="collapse-arrow">{activeIndex === index ? '▼' : '▲'}</div>
      </div>
      {activeIndex === index && (
        <div className="collapse-content">
          {isList 
            ? <ul>{Array.isArray(content) && content.map((item, i) => <li key={i}>{item}</li>)}</ul> 
            : (Array.isArray(content) ? content.map((item, i) => <p key={i}>{item}</p>) : <p>{content}</p>)
          }
        </div>
      )}
    </div>
  );
};

export default Collapse;
