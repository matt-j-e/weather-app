import React from "react";
import PropTypes from "prop-types";

const ForecastSummary = ({ forecast }) => {
  const { date, description, icon, temperature } = forecast;
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">{date}</div>
      <img
        className="forecast-summary__icon"
        src={icon}
        alt="weather type icon"
      />
      <div className="forecast-summary__temp">{temperature.max}&deg;c</div>
      <div className="forecast-summary__description">{description}</div>
    </div>
  );
};

ForecastSummary.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default ForecastSummary;
