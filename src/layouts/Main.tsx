import { useState } from "react";

import logo from "../images/logo.png";
import styles from "./Main.module.css";
import SearchBar from "../components/Search/SearchBar";
import WeatherCard from "../components/WeatherCard";
import Weather, { initialState } from "../models/weather-model";

const Main = () => {
  const [weatherData, setWeatherData] = useState<Weather>(initialState);

  const fetchWeatherByCity = async (city: string) => {
    const baseUrl = "https://api.openweathermap.org/data/2.5/";
    const response = await fetch(`${baseUrl}weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric
    `);

    if (!response.ok) {
      console.log("error!");
      return;
    }

    const data = await response.json();
    setWeatherData(data);
  };

  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <img src={logo} alt="Weather App - Logo" />
      </div>
      <SearchBar fetchData={fetchWeatherByCity} />
      <WeatherCard weatherData={weatherData} />
    </div>
  );
};

export default Main;
