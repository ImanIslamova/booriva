//import { useState } from 'react';
import FavorWhite from '../../assets/svg/favorWhite';
//import styles from './product.module.css';
import styles from './product.module.sass';


const Product = ({description, price, photo}) => {
    const isActive = false;
    return (
        <div className={styles.product}>
            <div class={styles.product__image_container}>
                <img src={photo} alt = "свитшот" className="product__image"></img>  
                <div className={styles.product__favor_container}>
                    <FavorWhite isActive = {isActive}/>
                </div> 
                <div className={styles.product__options}>
                    <p className={styles.product__name}>{description}</p>
                    <p className={styles.product__price}>{price}</p>
                </div>           
            </div>
        </div>
    )
}

export default Product;