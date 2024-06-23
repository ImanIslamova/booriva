
import BasketIcon from "../../../../assets/icons/BasketIcon";

import styles from "./Basket.module.css";

const Basket = ({setIsBasketOpen}) => {
  
  
  return (
    <span className={styles.basket} onClick={() => setIsBasketOpen(true)}>
        <BasketIcon/>
          <span class={styles.cartNumber}>0</span>
      </span>

    )

}
export default Basket