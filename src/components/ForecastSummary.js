import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";

const ForecastSummary = ({ forecast }) => {
  const { date, description, icon, temperature } = forecast;
  return (
    <div className="forecast-summary">
      <div className="forecast-summary__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-summary__icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}&deg;c
      </div>
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
