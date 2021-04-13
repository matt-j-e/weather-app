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
    console.log(error);
  }
}

export default getForecast;
