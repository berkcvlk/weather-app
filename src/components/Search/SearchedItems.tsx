import { useContext } from "react";
import { WeatherContext } from "../../store/weather-context";
import SearchedItem from "./SearchedItem";

const SearchedItems = () => {
  const { cityList } = useContext(WeatherContext);

  return (
    <div className="searched-items">
      {cityList.map((city) => (
        <SearchedItem key={city.id} city={city} />
      ))}
    </div>
  );
};
export default SearchedItems;
