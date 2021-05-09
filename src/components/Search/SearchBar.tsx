import React, { useContext, useEffect, useState } from "react";
import styles from "./SearchBar.module.css";

import SearchDropdown from "./SearchDropdown";
import { WeatherContext } from "../../store/weather-context";

const SearchBar = () => {
  const { cityList, fetchCityList } = useContext(WeatherContext);
  const [city, setCity] = useState<string>("");

  useEffect(() => {
    if (!city && city.length <= 3) {
      return;
    }

    // Set a timer for delay
    const getCityTimeout = setTimeout(fetchCityList.bind(null, city), 300);

    return () => {
      // Clear timer
      clearTimeout(getCityTimeout);
    };
  }, [city, fetchCityList]);

  const changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setCity(newValue);
  };

  return (
    <div className={styles["search-bar-wrapper"]}>
      <input
        className={styles["search-bar"]}
        type="text"
        placeholder="Search for city..."
        value={city}
        onChange={changeHandler}
      />
      {cityList.length !== 0 && <SearchDropdown />}
    </div>
  );
};

export default SearchBar;
