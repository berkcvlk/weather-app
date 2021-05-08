import styles from "./WeatherCard.module.css";

const WeatherCard = () => {
  return (
    <div className={styles["weather-card"]}>
      <header className={styles["weather-city"]}>
        Trabzon Province
        <span className={styles["weather-country"]}>TR</span>
      </header>
      <div className={styles["weather-itself"]}>
        <span className={styles["weather-temp"]}>19</span>
        <span className={styles["weather-symbol"]}>°C</span> <br/>
        <span className={styles["weather-desc"]}>Broken Clouds</span>
      </div>
      <main className={styles["weather-details"]}>
        <div className={styles["detail"]}>
          <span className={styles["title"]}>Feels like:</span>
          <span className={styles["content"]}>18</span>
        </div>
        <div className={styles["detail"]}>
          <span className={styles["title"]}>Min/Max:</span>
          <span className={styles["content"]}>19/19</span>
        </div>
        <div className={styles["detail"]}>
          <span className={styles["title"]}>Wind:</span>
          <span className={styles["content"]}>1.03 meter/sec</span>
        </div>
        <div className={styles["detail"]}>
          <span className={styles["title"]}>Humidity:</span>
          <span className={styles["content"]}>68%</span>
        </div>
      </main>
      <footer>
        <span className={styles["weather-base"]}>
          *The results are base on <strong>"stations"</strong>
        </span>
      </footer>
    </div>
  );
};

export default WeatherCard;
