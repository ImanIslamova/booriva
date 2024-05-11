import Button from '../../buttons/Button';
import styles from './basket.module.sass'

const Basket = ({isBasketOpen, setIsBasketOpen}) =>{
    return (
        <div className={styles.basket__wrap}>
            <div className={styles.backdrop + ' ' + (isBasketOpen && styles.backdrop_open)} 
            onClick={() => setIsBasketOpen(false)}></div>
            <div className={styles.basket + ' ' + (isBasketOpen && styles.basket_open)}>
                <div className={styles.box}>
                    <h2 className={styles.box__title}>КОРЗИНА</h2>
                </div>
                <div className={styles.block}></div>
                <div className={styles.baskets_button}>
                    <Button text = "ОФОРМИТЬ ЗАКАЗ"/>
                </div>
            </div>
        </div>
    )
}

export default Basket;