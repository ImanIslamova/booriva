import { Link } from "react-router-dom";
import styles from "./topProducts.module.sass";

import Product from "../../../components/product/Product";
import Button from "../../../components/buttons/Button";
import image from "../../../assets/images/switshot.png";
// import centerImage from '../../../assets/images/dress.jpg';

const TopProducts = () => {
  return (
    <div className={`${styles.topProducts} wrapper`}>
      <div className={styles.topProductsFlex}>
        <div className={styles.products}>
          <Link to="/product">
            <Product
              name="Бомбер"
              price="1560"
              photo={image}
              widthImg={"90%"}
              heightImg={"100%"}
            />
          </Link>
          <Link to="/product">
            <Product
              name="Бомбер"
              price="1560"
              photo={image}
              widthImg={"90%"}
              heightImg={"100%"}
            />
          </Link>
        </div>
        <div className={`${styles.products} ${styles.centerImage}`}>
          {/* <img src={centerImage} alt = 'Фото'/> */}
        </div>
        <div className={styles.products}>
          <Link to="/product">
            <Product
              name="Бомбер"
              price="1560"
              photo={image}
              widthImg={"100%"}
              heightImg={"180%"}
            />
          </Link>
        </div>
      </div>
      <div className={styles.button}>
        <Link to="/catalog">
          <Button text="Смотреть все" />
        </Link>
      </div>
    </div>
  );
};

export default TopProducts;
