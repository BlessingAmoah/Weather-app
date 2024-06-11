
import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <div className="search-form">
      <input type="text" className="search-input" placeholder="Enter city name" />
      <button className="search-button">Search</button>
    </div>
  );
}

export default SearchForm;
