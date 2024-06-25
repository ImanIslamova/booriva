
import { useState } from 'react';

import styles from './searcher.module.sass'


const Searcher = () =>{
  const [findProducts, setFindProducts] = useState("");
  const getFindProducts = (event) => {
    setFindProducts(event.target.value);
  };

  return (
    <div className={styles.searcher}>
      <form>
        <div className={styles.search}>
          <div className={styles.searchBtn}></div>
          <input
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