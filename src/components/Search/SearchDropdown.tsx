import SearchedItems from "./SearchedItems";
import styles from "./SearchDropdown.module.css";

const SearchDropdown = () => {
  return (
    <div className={styles["search-dropdown"]}>
      <SearchedItems />
    </div>
  );
};
export default SearchDropdown;
