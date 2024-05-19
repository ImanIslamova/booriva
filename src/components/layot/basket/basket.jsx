
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductData } from 'react-router-dom';
import Close from '../../../assets/icons/close';
import Button from '../../buttons/Button';

import styles from './basket.module.sass'


const Basket = ({isBasketOpen, setIsBasketOpen, cart, setCart}) =>{
    const [products, setProducts] = useState([])

    const sendData = async (cart, i, products) => {
        if(i < cart.length){
            const data = await getProductData(cart[i])
            products.push(data)
            if(i < cart.length -1) {
                return sendData(cart, i + 1, products)
            } else {
                return products
            }
        } else {
            return []
        }
    }

    useEffect(() => {
        const items = sendData(cart, 0, [])
        items.then((res) => setProducts(res))
    }, [cart])
    return (
        <div className={styles.basket__wrap}>
            <div className={styles.backdrop + ' ' + (isBasketOpen && styles.backdrop_open)} 
            onClick={() => setIsBasketOpen(false)}></div>
            <div className={styles.basket + ' ' + (isBasketOpen && styles.basket_open)}>
                <div className={styles.btn}>
                    <Close setIsBasketOpen={setIsBasketOpen}/>
                </div>
                <div className={styles.box}>
                    <h2 className={styles.box__title}>КОРЗИНА</h2>
                </div>
                <div className={styles.block}>
                    <div className={styles.block_one}>
                        <span className={styles.basketTextSmall}>Cумма заказа:</span>
                        <span className={styles.basketTextBig}>4 998 ₴</span>
                    </div>
                    <div className={styles.block_one}>
                        <span className={styles.basketTextSmall}>Стоимость доставки:</span>
                        <span className={styles.basketTextBig}>бесплатно</span>
                    </div>
                    <div className={styles.block_two}>
                        <span className={styles.basketTextPrice}>К оплате: . . . . . . . . . . </span>
                        <span className={styles.basketTextBigPrice}>4 998 ₴</span>
                    </div>
                </div>
                <Link to="/" className={styles.baskets_button}>
                    <Button text = "ОФОРМИТЬ ЗАКАЗ"/>
                </Link>
            </div>
        </div>
    )
}

export default Basket;