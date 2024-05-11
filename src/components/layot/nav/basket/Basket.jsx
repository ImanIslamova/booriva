

import BasketIcon from "../../../../assets/icons/BasketIcon";
import styles from "./Basket.module.css";

const Basket = ({setIsBasketOpen}) => {
    return (
        <span className={styles.basket} onClick={() => setIsBasketOpen(true)}>
            <BasketIcon/>
        </span>

    )

}
export default Basket