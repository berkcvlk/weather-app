import { useContext } from "react";
import { ICity } from "../../models/city-model";
import { WeatherContext } from "../../store/weather-context";
import styles from "./SearchedItem.module.css";

const SearchedItem: React.FC<{ city: ICity }> = (props) => {
  const { fetchWeatherByCity } = useContext(WeatherContext);

  const fetchWeatherHandler = (city: string) => {
    fetchWeatherByCity(city);
  };

  return (
    <div
      onClick={fetchWeatherHandler.bind(null, props.city.name)}
      className={styles["searched-item"]}
    >
      {props.city.name}
    </div>
  );
};
export default SearchedItem;
