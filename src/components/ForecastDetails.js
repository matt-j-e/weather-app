import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";

import "../styles/ForecastDetails.css";

const ForecastDetails = ({ forecast }) => {
  const { date, humidity, icon, temperature, wind } = forecast;
  return (
    <div className="forecast-details">
      <div>
        <div className="forecast-details__date">
          {moment(date).format("ddd Do MMM")}
        </div>
        <div className="forecast-details__icon">
          <WeatherIcon name="owm" iconId={icon} />
        </div>
      </div>
      <div>
        <div className="forecast-details__temperature--max">
          <p>Max temp: {temperature.max}&deg;c</p>
        </div>
        <div className="forecast-details__temperature--min">
          <p>Min temp: {temperature.min}&deg;c</p>
        </div>
        <div className="forecast-details__humidity">
          <p>Humidity: {humidity}%</p>
        </div>
        <div className="forecast-details__wind">
          <p className="forecast-details__wind--speed">
            Wind speed {wind.speed} mph
          </p>
          <p className="forecast-details__wind--direction">
            Direction: <span>{wind.direction}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
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
