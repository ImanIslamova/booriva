import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getCatalogDataNew } from "../../../services/catalog";

import styles from "./topProducts.module.sass";

import Product from "../../../components/product/Product";
import Button from "../../../components/buttons/Button";
import image from "../../../assets/images/switshot.png";
// import centerImage from '../../../assets/images/dress.jpg';

const TopProducts = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = getCatalogDataNew();
    data.then((res) => {
      res[0].products.map(({ name, price, images }) => {
        setProducts(res[0].products);
      });
    });
  }, [location]);
  return (
    <div className={`${styles.topProducts} wrapper`}>
      <div className={styles.topProductsFlex}>
        <div className={styles.products}>
          {products
            .map(({ name, price, images, id }) => {
              return (
                <div className={styles.productWrap} key={id}>
                  <Product
                    name={name}
                    price={`${price} ₽`}
                    photo={images[0]}
                    widthImg={"90%"}
                    heightImg={"92%"}
                    link={`/product?id=${id}`}
                    id={id}
                  />
                </div>
              );
            })
            .slice(0, 2)}
        </div>
        <div className={`${styles.products} ${styles.centerImage}`}></div>
        <div className={styles.products}>
          {products
            .map(({ name, price, images, id }) => {
              return (
                <div className={styles.productWrap} key={id}>
                  <Product
                    name={name}
                    price={`${price} ₽`}
                    photo={images[0]}
                    widthImg={"100%"}
                    heightImg={"155%"}
                    link={`/product?id=${id}`}
                    id={id}
                  />
                </div>
              );
            })
            .slice(3, 4)}
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
