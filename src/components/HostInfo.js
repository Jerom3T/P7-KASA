import React from 'react';
import PropTypes from 'prop-types';

const HostInfo = ({ host }) => {

  return (
    <div className="host-info">
      <div className="host-details">
        <div className="name-photo-container">
          <div className="name">{host.name}</div>
          <img src={host.picture} alt="Host" />
        </div>
      </div>
    </div>
  );
};

HostInfo.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.string,
  }).isRequired,
};

export default HostInfo;
