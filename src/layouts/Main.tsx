import styles from "./Main.module.css";

import Logo from "../components/Logo";
import SearchBar from "../components/Search/SearchBar";
import WeatherCard from "../components/WeatherCard";

const Main = () => {
  return (
    <div className={styles.main}>
      <Logo />
      <SearchBar />
      <WeatherCard />
    </div>
  );
};

export default Main;
