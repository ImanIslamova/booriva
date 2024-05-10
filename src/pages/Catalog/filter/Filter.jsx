import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./filter.module.sass";

import Title from "../../../components/title/Title";
import FilterName from "./filterName/FilterName";
import { getMenuItems } from "../../../services/menu";
import { useEffect } from "react";

const Filter = ({ title, subTitle, isFilterOpen, setIsFilterOpen }) => {
  const [filterCategory, setFilterCategory] = useState([]);
  useEffect(() => {
    getMenuItems().then((res) => setFilterCategory(res))
}, [])

  return (
    <div className={styles.filter + ' ' + (isFilterOpen && styles.mobileFilterOpen)}>
      <div className={styles.modalTop}>
        <div className={styles.close} onClick={() => setIsFilterOpen(prev => !prev)}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={styles.mainTitle}>
        <Title title={title ? title : "Пусто" } subtitle={subTitle ? subTitle : "Ничего"} />
      </div>
      <div className={styles.titleWrap}>
        <FilterName title="Категории" />
      </div>
      <div className={styles.category}>
        
      {filterCategory.map(({ id, name }) => (
        <div key = {id}>
          <Link to={`/catalog?menuId=${id}`} className={styles.filterList}>
            {name}
          </Link>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Filter;
