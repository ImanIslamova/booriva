import { useState } from 'react';

import styles from './catalogProducts.module.sass';
import Product from '../../../components/product/Product';
import image from '../../../assets/images/bomber.png'


const CatalogProduct = () => {
    const [products, setProduct] = useState([{id: '001', description: 'Свитшот вставка клетка', price: '1 099 ₽', photo: image}, 
        {id: '002', description: 'Платье позрачное в цветочек черное', price: '1 299 ₽', photo: image},
        {id: '003', description: 'Бомбер Gone Crazy хаки', price: '2 499 ₽', photo: image},
        {id: '004', description: 'Бомбер Gone Crazy хаки', price: '2 499 ₽', photo: image},
    ]); 

    return (
         <div className={styles.products}>
            {products.map(({description, price, photo}) => {
                return (
                    // <div className={styles.productWrap}>
                        <Product description = {description} price = {price} photo={photo}/>
                    // </div>
                )
            })}
        </div>
    )
}

export default CatalogProduct;