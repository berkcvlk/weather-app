import { useContext } from "react";
import { WeatherContext } from "../store/weather-context";
import { getWeatherCondition } from "../helpers/weather-helper";
import styles from "./WeatherCard.module.css";

const WeatherCard = () => {
  const { weatherData } = useContext(WeatherContext);
  const { name, weather, main, base, sys, wind } = weatherData;

  if (name.length === 0) {
    return (
      <div style={{ color: "#ff9a9a" }}>
        <strong>Please enter a city name to get weather!</strong>
      </div>
    );
  }
  
  const subWeatherIcon: string = getWeatherCondition(
    weather[0].icon.substring(0, 2)
  );

  const weatherCardClasses = [
    styles["weather-card"],
    styles[subWeatherIcon],
  ].join(" ");

  return (
    <div className={weatherCardClasses}>
      <header className={styles["weather-city"]}>
        {name}
        <span className={styles["weather-country"]}>{sys.country}</span>
      </header>
      <div className={styles["weather-itself"]}>
        <span className={styles["weather-temp"]}>{Math.floor(main.temp)}</span>
        <span className={styles["weather-symbol"]}>°C</span> <br />
        <span className={styles["weather-desc"]}>{weather[0].description}</span>
      </div>
      <main className={styles["weather-details"]}>
        <div className={styles["detail"]}>
          <span className={styles["title"]}>Feels like:</span>
          <span className={styles["content"]}>{main.feels_like}°C</span>
        </div>
        <div className={styles["detail"]}>
          <span className={styles["title"]}>Min/Max:</span>
          <span className={styles["content"]}>
            {Math.floor(main.temp_min)}°C/{Math.floor(main.temp_min)}°C
          </span>
        </div>
        <div className={styles["detail"]}>
          <span className={styles["title"]}>Wind:</span>
          <span className={styles["content"]}>{wind.speed} meter/sec</span>
        </div>
        <div className={styles["detail"]}>
          <span className={styles["title"]}>Humidity:</span>
          <span className={styles["content"]}>{main.humidity}%</span>
        </div>
      </main>
      <footer>
        <span className={styles["weather-base"]}>
          *The results are base on <strong>"{base}"</strong>
        </span>
      </footer>
    </div>
  );
};

export default WeatherCard;
