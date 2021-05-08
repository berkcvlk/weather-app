import styles from "./Main.module.css";
import SearchBar from "../components/Search/SearchBar";
import WeatherCard from "../components/WeatherCard";

const Main = () => {
  return (
    <div className={styles.main}>
      <SearchBar />
      <WeatherCard/>
    </div>
  );
};
export default Main;
