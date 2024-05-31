import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./newClothes.module.sass";
import Title from "../../../components/title/Title";
import Product from "../../../components/product/Product";
import Button from "../../../components/buttons/Button";
import banner from "../../../assets/images/baner.png";
import {getCatalogDataNew} from '../../../services/catalog';

const NewClothes = () => {
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
    <section className={styles.new_clothes}>
      <div className={styles.wrapper}>
        <Title title="Новинки" subtitle="новинки" />
        <div className={styles.new_clothes__items_container}>
          <div className={styles.new_clothes__items}>
            {products.map(({ name, price, images, id }) => {
              return (
                <div className={styles.productWrap} key={id}>
                 <Product
                  name={name}
                  price={`${price} ₽`}
                  photo={images[0]}
                  widthImg={"100%"}
                  heightImg={"121%"}
                  link={`/product?id=${id}`}
                  id={id}
                />
                </div>
              );
            }).slice(0, 4)}
          </div>
          <div className={styles.new_clothes__button}>
            <Link to="/catalog?menuId=000">
              <Button text="Смотреть все" />
            </Link>
          </div>
        </div>
      </div>
      <Link to="/catalog?menuId=000">
        <div className={styles.banner}>{<img src={banner} alt="Баннер" />}</div>
      </Link>
    </section>
  );
};

export default NewClothes;
