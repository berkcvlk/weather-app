import Weather from "../models/weather-model";
import styles from "./WeatherCard.module.css";

const WeatherCard: React.FC<{ weatherData: Weather }> = (props) => {
  const { name, weather, main, base, sys } = props.weatherData;

  return (
    <div className={styles["weather-card"]}>
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
          <span className={styles["content"]}>{main.feels_like}</span>
        </div>
        <div className={styles["detail"]}>
          <span className={styles["title"]}>Min/Max:</span>
          <span className={styles["content"]}>
            {main.temp_min}/{main.temp_min}
          </span>
        </div>
        <div className={styles["detail"]}>
          <span className={styles["title"]}>Wind:</span>
          <span className={styles["content"]}>-</span>
        </div>
        <div className={styles["detail"]}>
          <span className={styles["title"]}>Humidity:</span>
          <span className={styles["content"]}>{main.humidity}</span>
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
