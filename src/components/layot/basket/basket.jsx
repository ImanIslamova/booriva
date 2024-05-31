
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductData } from "../../../services/product";
import Close from '../../../assets/icons/close';
import Button from '../../buttons/Button';
import Clear from '../../../assets/icons/Clear';


import styles from './basket.module.sass'


const Basket = ({isBasketOpen, setIsBasketOpen, cart, setCart}) =>{
    const [allPrice, setAllPrice]=useState(0)
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

    useEffect(() => {
      let productsPrice = 0;
      for(let i = 0; i < products.length; i++) {
        productsPrice += Number(products[i].price)
      }
      setAllPrice(productsPrice)
    }, [products])
    

    return (
        <div className={styles.basket__wrap}>
            <div className={styles.backdrop + ' ' + (isBasketOpen && styles.backdrop_open)} 
            onClick={() => setIsBasketOpen(false)}></div>
            <div className={styles.basket + ' ' + (isBasketOpen && styles.basket_open)}>
                <div className={styles.btn}>
                    <Close setIsBasketOpen={setIsBasketOpen}/>
                </div>
                <h2 className={styles.boxTitle}>КОРЗИНА</h2>
                <div className={styles.box}>
                    <div className={styles.products}>
                        {
                            products.map((item) =>
                                <div className={styles.products_block}>
                            <div className={styles.products__image} style={{backgroundImage: `URL(${item.images[0]})`}}></div>
                            <div className={styles.description}>
                                <div className={styles.description_name}>{item.name}</div>
                                <div className={styles.description_size}>S-M</div>
                                <div className={styles.description_price}>{item.price}</div>
                            </div>
                            <div className={styles.btnClear}>
                                <div onClick={() => setCart(cart.filter((id) => id !== item.id))}>
                                    <Clear/>
                                </div>
                            </div>
                        </div>)
                        }
                    </div>
                </div>
                {}
                <div className={styles.block}>
                    <div className={styles.block_one}>
                        <span className={styles.basketTextSmall}>Cумма заказа:</span>
                        <span className={styles.basketTextBig}>{allPrice} ₴</span>
                    </div>
                    <div className={styles.block_one}>
                        <span className={styles.basketTextSmall}>Стоимость доставки:</span>
                        <span className={styles.basketTextBig}>бесплатно</span>
                    </div>
                    <div className={styles.block_two}>
                        <span className={styles.basketTextPrice}>К оплате: . . . . . . . . . . </span>
                        <span className={styles.basketTextBigPrice}>{allPrice} ₴</span>
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