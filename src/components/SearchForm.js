import React from "react";
import PropTypes from "prop-types";

import "../styles/SearchForm.css";

const SearchForm = ({ searchInput, setSearchInput, onCitySearch }) => {
  const handleInputChange = (event) => setSearchInput(event.target.value);

  return (
    <div className="search-form">
      <form onSubmit={onCitySearch}>
        <input
          onChange={handleInputChange}
          type="text"
          name="city"
          placeholder="City / town"
          value={searchInput}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  searchInput: PropTypes.string.isRequired,
  setSearchInput: PropTypes.func.isRequired,
  onCitySearch: PropTypes.func.isRequired,
};

export default SearchForm;
