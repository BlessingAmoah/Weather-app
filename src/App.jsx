
import React from 'react';
import './App.css'; 
import Forecast from './Forecast';
import forecastData from './data/data.js';
import SearchForm from './SearchForm';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Weather Report</h1>
      </header>
      <SearchForm />
      <Forecast data={forecastData} />
    </div>
  );
}

export default App;
