import { useEffect, useState } from "react";
import styles from "./wishListComplete.module.sass";
import { getCard } from "../../../services/catalog";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Product from "../../../components/product/Product";

const WishListComplete = ({ wish }) => {
  const [products, setProducts] = useState([]);
  //   console.log(wish.length);
  const sendData = async (wish, i, products) => {
    if (i < wish.length) {
      const data = await getCard(wish[i]);
      // console.log(wish[i]);
      products.push(data);
      if (i < wish.length - 1) {
        return sendData(wish, i + 1, products);
      } else {
        return products;
      }
    }
  };

  useEffect(() => {
    const items = sendData(wish, 0, []);
    items.then((res) => setProducts(res));
  }, [wish]);
  console.log(products);

  return (
    <div className={styles.wishlist}>
      <div className={styles.wishlist__items}>
        {products.map(({ name, price, images, id, isActive }) => {
          return (
            <div className={styles.productWrap} key={id}>
              <Link to="/product">
                <Product
                  name={name}
                  price={`${price} ₽`}
                  photo={images[0]}
                  widthImg={"100%"}
                  heightImg={"121%"}
                  isActive={isActive}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WishListComplete;
