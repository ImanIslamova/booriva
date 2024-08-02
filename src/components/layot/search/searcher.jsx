import { useNavigate } from "react-router-dom";
import {  useState } from 'react';

import styles from './searcher.module.sass'


const Searcher = ({ showSearcher, setShowSearcher}) =>{
  const [findProducts, setFindProducts] = useState("");
  const navigate = useNavigate();

  
  const getFindProducts = (event) => {
    setFindProducts(event.target.value);
  };


  const handleClick = (e) => {
    e.preventDefault()
    if(findProducts !== '') {
      navigate(`/resultList?search=${findProducts}`);
    }
  }

  


  return (
    <div className={styles.searcher + " " + (showSearcher ? styles.searcher_open: " ")}
    >
      <form onSubmit={(e) => handleClick(e)}>
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

         <input type="submit" style={{visibility: 'hidden'}}/>

          
        </div>
      </form>
            
    </div>
  )
        
}

export default Searcher;