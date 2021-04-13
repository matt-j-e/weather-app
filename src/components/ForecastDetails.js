import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "../styles/ForecastDetails.css";

const ForecastDetails = ({ forecast }) => {
  const { date, humidity, temperature, wind } = forecast;
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-details__temperature--max">
        <p>Max temperature: {temperature.max}&deg;c</p>
      </div>
      <div className="forecast-details__temperature--min">
        <p>Min temperature: {temperature.min}&deg;c</p>
      </div>
      <div className="forecast-details__humidity">
        <p>Humidity: {humidity}%</p>
      </div>
      <div className="forecast-details__wind">
        <p>
          Wind:
          <span className="forecast-details__wind--speed"> {wind.speed} </span>
          <span className="forecast-details__wind--direction">
            {wind.direction}
          </span>
        </p>
      </div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
      direction: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ForecastDetails;
