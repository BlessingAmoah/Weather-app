

import React from 'react';
import PropTypes from 'prop-types'; 

function Day({ date, temperature, weather, description, icon}) {
  return (
    <div className="day">
      <div>Date: {date}</div>
      <div>Temperature: {temperature}</div>
      <div>Weather: {weather}</div>
      <div>Description: {description}</div>
      <div>Icon: {icon}</div>
     
    </div>
  );
}

Day.propTypes = {
  date: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  
};

export default Day;
