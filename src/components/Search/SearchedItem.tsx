import { useContext } from "react";
import { ICity } from "../../models/city-model";
import { WeatherContext } from "../../store/weather-context";
import styles from "./SearchedItem.module.css";

const SearchedItem: React.FC<{ city: ICity }> = (props) => {
  const { fetchWeatherByCity, resetCityList } = useContext(WeatherContext);

  const fetchWeatherHandler = () => {
    fetchWeatherByCity(props.city.name);
    resetCityList();
  };

  return (
    <div onClick={fetchWeatherHandler} className={styles["searched-item"]}>
      {props.city.name}
    </div>
  );
};

export default SearchedItem;
