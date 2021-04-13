/* eslint-disable no-console */
import axios from "axios";

async function getForecast(setForecasts, setLocation, cityName = "Manchester") {
  try {
    const response = await axios.get(
      `https://mcr-codes-weather.herokuapp.com/forecast?city=${cityName}`
    );
    console.log(response.data);
    setLocation(response.data.location);
    setForecasts(response.data.forecasts);
  } catch (error) {
    console.log(error.response);
    if (error.response.status === 404) {
      setLocation({
        error: true,
        message: "Sorry, we could not find that location.",
      });
    } else {
      setLocation({
        error: true,
        message: "Something went wrong. Please try again.",
      });
    }
  }
}

export default getForecast;
