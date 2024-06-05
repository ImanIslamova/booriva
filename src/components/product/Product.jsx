//import { useState } from 'react';
import FavorWhite from "../../assets/svg/favorWhite";
import styles from "./product.module.sass";
import { Link, useLocation } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWishList } from "../../redux/wishSlice/wishSlice";
// import qs from "qs";

const Product = ({ id, name, price, photo, widthImg, heightImg, link, heart }) => {
  const [isActive, setisActive] = useState(heart);
  const wish = useSelector(state => state.wish.wish);
  const dispatch = useDispatch();
  const addProduct = () =>{
    dispatch(addWishList(id));
  }

  useEffect(() => {
    setisActive(wish.some(item => item === id))
  }, [wish]);

  return (
    <div className={styles.product}>
      <div
        className={styles.product__image_container}
        style={{ paddingTop: heightImg }}
      >
        <Link to={link}>
          <img src={photo} alt="свитшот" className={styles.product__image}></img>
        </Link>
          <div className={styles.product__favor_container} onClick={addProduct}>
            <FavorWhite isActive={isActive} />
          </div>
      </div>
      <Link to={link}>
      <div className={styles.product__options}>
        <p className={styles.product__name}>
          {name.length < 25 ? name : name.substr(0, 20) + "..."}
        </p>
        <p className={styles.product__price}>{price}</p>
      </div>
      </Link>
    </div>
  );
};

export default Product;
