import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";

import "../styles/ForecastSummary.css";

const ForecastSummary = ({ forecast, onSelect }) => {
  const { date, description, icon, temperature } = forecast;
  return (
    <div
      className="forecast-summary"
      data-testid="forecast-summary"
      onClick={() => onSelect(date)}
      onKeyPress={() => onSelect(date)}
      role="button"
      tabIndex="0"
    >
      <div className="forecast-summary__date">{moment(date).format("ddd")}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}&deg;c
      </div>
      <div className="forecast-summary__description">{description}</div>
      {/* <button type="button" onClick={() => onSelect(date)}>
        More details
      </button> */}
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
  onSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;
