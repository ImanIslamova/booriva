import { useEffect, useState, useContext } from "react";
import { getCard } from "../../../services/catalog";
import { WishListOpen } from "../../../App";
import Product from "../../../components/product/Product";
import styles from "./wishListComplete.module.sass";

const WishListComplete = () => {
  const { wish, setWish } = useContext(WishListOpen);
  const [products, setProducts] = useState([]);

  const sendData = async (wish, i, products) => {
    if (i < wish.length) {
      const data = await getCard(wish[i]);
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

  return (
    <div className={styles.wishlist}>
      <div className={styles.wishlist__items}>
        {products.map(({ name, price, images, id, isActive }) => {
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
                heart={true}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WishListComplete;
