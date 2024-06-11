import React from 'react';
import PropTypes from 'prop-types';
import './SunMoon.css'; 

function SunMoon({ sunrise, sunset }) {
  return (
    <div className="sun-moon-container">
      <div className="sun-moon-icon">
        <img src="/sunrise-icon.png" alt="Sunrise" />
        <span>{sunrise} 6:10am</span>
      </div>
      <div className="sun-moon-icon">
        <img src="/sunset-icon.png" alt="Sunset" />
        <span>{sunset} 5:45pm</span>
      </div>
    </div>
  );
}

SunMoon.propTypes = {
  sunrise: PropTypes.string.isRequired,
  sunset: PropTypes.string.isRequired,
};

export default SunMoon;
