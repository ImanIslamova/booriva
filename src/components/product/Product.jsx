//import { useState } from 'react';
import FavorWhite from "../../assets/svg/favorWhite";
import styles from "./product.module.sass";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import qs from "qs";

const Product = ({ name, price, photo, widthImg, heightImg }) => {
  const [isActive, setisActive] = useState(false);
  const location = useLocation();
  const addWishList = () => {
    if (location.search){
      const id = qs.parse(location.search.substring(1)).id;
      const wish = localStorage.getItem('wish') ? JSON.parse(localStorage.getItem('wish')) : [];
      localStorage.setItem('wish', JSON.stringify([...wish, id]));
      setisActive(prev => !prev);
    }
  }
  return (
    <div className={styles.product}>
      <div
        className={styles.product__image_container}
        style={{ paddingTop: heightImg }}
      >
        <img src={photo} alt="свитшот" className={styles.product__image}></img>
        {/* <div className={styles.product__favor_container}>
            <FavorWhite isActive={isActive} />
          </div> */}
          <div className={styles.product__favor_container} onClick={addWishList}>
            <FavorWhite isActive={isActive} />
          </div>
      </div>
      <div className={styles.product__options}>
        <p className={styles.product__name}>
          {name.length < 25 ? name : name.substr(0, 20) + "..."}
        </p>
        <p className={styles.product__price}>{price}</p>
      </div>
    </div>
  );
};

export default Product;
