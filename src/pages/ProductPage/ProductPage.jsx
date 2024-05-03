import styles from "./productPage.module.sass";

import ProductSwiper from "../../components/productSwiper/ProductSwiper";
import Characteristics from "./characteristics/Characteristics";

const ProductPage = () => {
  return (
    <div className={`${styles.productPage} wrapper`}>
      <div className={styles.mainFlex}>
        <div className={styles.swipe}>
          <ProductSwiper />
        </div>
        <div className={styles.characteristics}>
          <Characteristics />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
