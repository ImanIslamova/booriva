
import SearchIcon from "../../../../assets/icons/SearchIcon";
import styles from "./../../../../components/layot/nav/search/Search.module.css";

const Search = () => {

    return (
        <a href="" className={styles.search}>
            <SearchIcon />
        <div className={styles.searchText}>Поиск</div>
        </a>

    )

}
export default Search