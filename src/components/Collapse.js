import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Collapse = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`collapse ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="collapse-header" onClick={handleToggleCollapse}>
        <div className="collapse-title">{title}</div>
        <div className="collapse-arrow">&#9662;</div>
      </div>
      {isCollapsed && (
        <div className="collapse-content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            content
          )}
        </div>
      )}
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export default Collapse;
