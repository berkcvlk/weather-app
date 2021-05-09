import React, { useContext, useEffect, useState } from "react";
import styles from "./SearchBar.module.css";

import SearchDropdown from "./SearchDropdown";
import { WeatherContext } from "../../store/weather-context";

const SearchBar = () => {
  const { cityList, getCityList } = useContext(WeatherContext);
  const [city, setCity] = useState<string>("");

  useEffect(() => {
    if (!city && city.length < 3) {
      return;
    }

    const getCityTimeout = setTimeout(getCityList.bind(null, city), 300);

    return () => {
      clearTimeout(getCityTimeout);
    };
  }, [city, getCityList]);

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
