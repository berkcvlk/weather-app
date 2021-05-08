import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar: React.FC<{ fetchData: (city: string) => void }> = (props) => {
  const [city, setCity] = useState<string>("");

  const onChangedHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setCity(newValue);

    if (newValue.trim().length > 3) {
      props.fetchData(newValue);
    }
  };

  return (
    <div>
      <input
        className={styles["search-bar"]}
        type="text"
        placeholder="Search for city..."
        value={city}
        onChange={onChangedHandler}
      />
    </div>
  );
};

export default SearchBar;
