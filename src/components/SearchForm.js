import React from "react";
import PropTypes from "prop-types";

const SearchForm = ({ onCityInput, onCitySearch }) => {
  return (
    <div className="search-form">
      <form onSubmit={onCitySearch}>
        <input
          onChange={onCityInput}
          type="text"
          name="city"
          placeholder="City / town"
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  onCityInput: PropTypes.func.isRequired,
  onCitySearch: PropTypes.func.isRequired,
};

export default SearchForm;
