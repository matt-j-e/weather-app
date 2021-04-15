import React from "react";
import PropTypes from "prop-types";

import "../styles/LocationDetails.css";

const LocationDetails = ({ city }) => {
  // Note: the parameter structure in the line above is a destructuring
  // of the props object. This assigns the values of props.city and
  // props.country directly to variables called city & country
  //
  // It has the same effect as naming the parameter 'props' and adding
  // const { city, country } = props;
  return <h1 className="location-details">{city}</h1>;
};

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  // country: PropTypes.string.isRequired,
};

export default LocationDetails;
