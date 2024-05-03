import { useState } from 'react';
import styles from './wishListComplete.module.sass';


import Product from "../../../components/product/Product";
import image from '../../../assets/images/bomber.png'

const WishListComplete = () => {
    const [products, setProduct] = useState([{id: '001', name: 'Свитшот вставка клетка', price: '1 099 ₽', photo: image}, 
        {id: '002', name: 'Платье позрачное в цветочек черное', price: '1 299 ₽', photo: image},
        {id: '003', name: 'Бомбер Gone Crazy хаки', price: '2 499 ₽', photo: image},
    ]); 
    return (
        <div className = {styles.wishlist}>
            <div className = {styles.wishlist__items}>
                {products.map(({name, price, photo, id}) => {
                    return (
                        <div className={styles.productWrap} key={id}>
                            <Product name = {name} price = {price} photo={image} widthImg={"100%"} heightImg={"121%"}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WishListComplete;