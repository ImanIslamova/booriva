import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import styles from './searcher.module.sass'


const Searcher = ({ showSearcher, setShowSearcher}) =>{
  const [findProducts, setFindProducts] = useState("");
  const navigate = useNavigate();
  
  const getFindProducts = (event) => {
    setFindProducts(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }

  const handleClick = () => {
    if(findProducts !== '') {
      navigate('/resultList');
    }
  }

  return (
    <div className={styles.searcher + " " + (showSearcher ? styles.searcher_open: " ")}
    >
      <form>
        <div className={styles.search}>
          <div className={styles.searchBtn} onClick={handleClick}></div>
          <input
          preventDefault
            type="text"
            className={styles.input}
            value={findProducts}
            onChange={getFindProducts}
            placeholder="Поиск товаров"
          />
        </div>
      </form>
            
    </div>
  )
        
}

export default Searcher;