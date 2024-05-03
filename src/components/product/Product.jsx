//import { useState } from 'react';
import FavorWhite from "../../assets/svg/favorWhite";
import styles from "./product.module.sass";

const Product = ({ name, price, photo, widthImg, heightImg }) => {
  const isActive = false;
  return (
    <div className={styles.product}>
      <div
        className={styles.product__image_container}
        style={{ paddingTop: heightImg }}
      >
        <img src={photo} alt="свитшот" className={styles.product__image}></img>
        <div className={styles.product__favor_container}>
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
