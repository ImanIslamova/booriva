import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCard } from "../../services/catalog";
import qs from "qs";

import styles from "./productPage.module.sass";

import ProductSwiper from "../../components/productSwiper/ProductSwiper";
import Characteristics from "./characteristics/Characteristics";

const ProductPage = () => {
  let [product, setProduct] = useState([]);
  const location = useLocation();
  useEffect(() => {
   const data = getCard(qs.parse(location.search.substring(1)).id);
   data.then((res) => {
    setProduct(res);
   })
  }, [location]);
  console.log(product.images);
  return (
    <div className={`${styles.productPage} wrapper`}>
      <div className={styles.mainFlex}>
        <div className={styles.swipe}>
          <ProductSwiper image1={product.images}/>
        </div>
        <div className={styles.characteristics}>
          <Characteristics />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
