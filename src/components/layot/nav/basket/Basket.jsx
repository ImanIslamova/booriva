
import { useState, useEffect } from 'react';
import BasketIcon from "../../../../assets/icons/BasketIcon";

import styles from "./Basket.module.css";

const Basket = ({setIsBasketOpen}) => {
    const [counter, setСounter]= useState(0)
    const [products, setProducts] = useState([])

    useEffect(() => {
        let productsCounter = 0;
        for(let i = 0; i < products.length; i++) {
          productsCounter += Number(products[i].counter)
        }
        setСounter(productsCounter)
      }, [products])

    return (
        <span className={styles.basket} onClick={() => setIsBasketOpen(true)}>
            <BasketIcon/>
            <span class={styles.cartNumber}>{counter}</span>
        </span>

    )

}
export default Basket