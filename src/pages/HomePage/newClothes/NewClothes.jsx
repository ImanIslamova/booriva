import { useState } from "react";
import styles from './newClothes.module.sass';
import Title from "../../../components/title/Title";
import Product from "../../../components/product/Product";
import Button from "../../../components/buttons/Button";
import image from "../../../assets/images/switshot.png";
import banner from "../../../assets/images/baner.png"

const NewClothes = () => {
    const [products, setProduct] = useState([{id: '001', description: 'Свитшот вставка клетка', price: '1 099 ₽', photo: image}, 
    {id: '002', description: 'Платье позрачное в цветочек черное', price: '1 299 ₽', photo: image},
    {id: '003', description: 'Бомбер Gone Crazy хаки', price: '2 499 ₽', photo: image},
    {id: '004', description: 'Бомбер Gone Crazy хаки', price: '2 499 ₽', photo: image}
]);

    return (
        <section className={styles.new_clothes}>
            <div className={styles.wrapper}>
                <Title title = 'Новинки' subtitle = 'новинки' />
                <div className={styles.new_clothes__items_container}>
                    <div className={styles.new_clothes__items}>
                        {products.map(({description, price, photo}) => {
                            return (
                                <div className={styles.productWrap}>
                                    <Product description = {description} price = {price} photo={photo}/>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.new_clothes__button}>
                        <Button text = "Смотреть все"/>
                    </div>
                </div>
            </div>
            <div className={styles.banner}>
                {<img src={banner} alt="Баннер"/>}
            </div>
        </section>
    )
}

export default NewClothes;