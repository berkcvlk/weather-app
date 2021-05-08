import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div>
      <input
        className={styles["search-bar"]}
        type="text"
        placeholder="Search for city..."
      />
    </div>
  );
};

export default SearchBar;
