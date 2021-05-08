import logo from "../images/logo.png";
import styles from "./Main.module.css";
import SearchBar from "../components/Search/SearchBar";
import WeatherCard from "../components/WeatherCard";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <img src={logo} alt="Weather App - Logo"/>
      </div>
      <SearchBar />
      <WeatherCard/>
    </div>
  );
};
export default Main;
