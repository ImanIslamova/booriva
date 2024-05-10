import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";

import styles from "./catalogProducts.module.sass";
import Product from "../../../components/product/Product";
import { getCatalogData, getCatalogDataAll } from "../../../services/catalog";

const CatalogProduct = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let data = getCatalogDataAll();
    if (location.search.length > 0) {
      data = getCatalogData(qs.parse(location.search.substring(1)).menuId);
      data.then((res) => {
        res.products.map(({ name, price, images }) => {
          setProducts(res.products);
        });
      });
    } else {
      data.then((res) => {
        res.map(({ name, price, images }) => {
          setProducts(res);
        });
      });
    }
  }, [location]);
  return (
    <div className={styles.products}>
      {products.map(({ name, price, images, id }) => {
        return (
          <div className={styles.productWrap} key={id}
          >
            <Link to="/product">
              <Product
                name={name}
                price={`${price} ₽`}
                photo={images[0]}
                widthImg={"100%"}
                heightImg={"121%"}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CatalogProduct;
