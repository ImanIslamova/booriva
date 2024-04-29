import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";

import styles from "./catalogProducts.module.sass";
import Product from "../../../components/product/Product";
import image from "../../../assets/images/bomber.png";
import { getCatalogData } from "../../../services/catalog";

const CatalogProduct = () => {
  const location = useLocation();
  console.log(qs.parse(location.search.substring(1)));
  useEffect(() => {
    const data = getCatalogData(qs.parse(location.search.substring(1)).menuId);
    data.then((res) => console.log(res.products));
    data.then((res) => {
      res.products.map(({ name, price, images }) => {
        return (
          <div className={styles.productWrap}>
            <Link to="/product">
              <Product
                name={name}
                price={price}
                photo={images[0]}
                widthImg={"100%"}
                heightImg={"121%"}
              />
            </Link>
          </div>
        );
      });
    });
  }, [location]);

  //   const [products, setProduct] = useState([
  //     {
  //       id: "001",
  //       description: "Свитшот вставка клетка",
  //       price: "1 099 ₽",
  //       photo: image,
  //     },
  //     {
  //       id: "002",
  //       description: "Платье позрачное в цветочек черное",
  //       price: "1 299 ₽",
  //       photo: image,
  //     },
  //     {
  //       id: "003",
  //       description: "Бомбер Gone Crazy хаки",
  //       price: "2 499 ₽",
  //       photo: image,
  //     },
  //     {
  //       id: "004",
  //       description: "Бомбер Gone Crazy хаки",
  //       price: "2 499 ₽",
  //       photo: image,
  //     },
  //   ]);

  //   return (
  //     <div className={styles.products}>
  //       {products.map(({ description, price, photo, id}) => {
  //         return (
  //           <div className={styles.productWrap}>
  //             <Link to="/product">
  //               <Product
  //                 description={description}
  //                 price={price}
  //                 photo={photo}
  //                 widthImg={"100%"}
  //                 heightImg={"121%"}
  //                 id={id}
  //               />
  //             </Link>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
};

export default CatalogProduct;
