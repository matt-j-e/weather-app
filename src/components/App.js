import React, { useState, useEffect } from "react";
// import axios from "axios";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import SearchForm from "./SearchForm";

import "../styles/App.css";
import getForecast from "../requests/getForecast";

function App() {
  const [selectedDate, setSelectedDate] = useState(0);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [forecasts, setForecasts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleCitySearch = (event) => {
    event.preventDefault();
    getForecast(setForecasts, setLocation, searchInput);
  };

  useEffect(() => {
    getForecast(setForecasts, setLocation, "manchester");
  }, []);

  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <SearchForm
        onCityInput={handleSearchInput}
        onCitySearch={handleCitySearch}
      />
      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
}

export default App;
