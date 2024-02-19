import React from 'react';
import './Search and Filter.css';

const SearchBar = (onDispatch ) => {
  // Add your state and methods here if necessary

  return (
    <div className="search-bar-container">
      <div className="search-bar-heading">
        <label htmlFor="search-input">What are you looking for?</label>
        <input
          id="search-input"
          type="text"
          placeholder="Search for category, name, company, etc."
        />
      </div>
      <div className="search-bar-dropdowns">
        <div className="dropdown-category">
          <label htmlFor="category-select">Category</label>
          <select id="category-select">
            <option value="all">All</option>
            <option value="all">Electronics</option>
            <option value="all">Furniture</option>
            <option value="all">Fashion</option>
            {/* More options */}
          </select>
        </div>
        <div className="dropdown-status">
          <label htmlFor="status-select">Status</label>
          <select id="status-select">
            <option value="all">All</option>
            <option value="all">started</option>
            <option value="all">dispatched</option>
            {/* More options */}
          </select>
        </div>
      </div>
      <button className="search-button">SEARCH</button>
    </div>
  );
};

export default SearchBar;
