
import BasketIcon from "../../../../assets/icons/BasketIcon";

import styles from "./Basket.module.css";

const Basket = ({setIsBasketOpen, productsLength}) => {
  
  return (
    <span className={styles.basket} onClick={() => setIsBasketOpen(true)}>
      <BasketIcon/>
      <span class={styles.cartNumber}>{productsLength}</span>
    </span>

  )
}
export default Basket