
import SearchIcon from "../../../../assets/icons/SearchIcon";
import styles from "./../../../../components/layot/nav/search/Search.module.css";

const Search = ({showSearcher, setShowSearcher}) => {
    
    return (
        <div className={styles.search} onClick={() => setShowSearcher(!showSearcher)}>
            <SearchIcon />
            <div className={styles.searchText}>Поиск</div>
        </div>

    )

}
export default Search