

import React from 'react';
import Day from './Day'; 
import { parseForecastData } from './utils/utils';
import './Forecast.css'; 

function Forecast(props) {
  const preparedData = parseForecastData(props.data);
  
  return (
    <div className="forecast">
      {preparedData.map((day, index) => (
        <Day
          key={index} 
          date={day.date} 
          temperature={day.temperature}
          weather={day.weather}
          description={day.description}
          icon={day.icon}
          
        />
      ))}
    </div>
  );
}

export default Forecast;
