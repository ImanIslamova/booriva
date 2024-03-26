import { useState } from "react";
import Title from "../../../components/title/Title";
import Product from "../../../components/product/Product";
import Button from "../../../components/buttons/Button";
import image from "../../../assets/images/switshot.png";
import banner from "../../../assets/images/baner.png"

const NewClothes = () => {
    const [products, setProduct] = useState([{id: '001', description: 'Свитшот вставка клетка', price: '1 099 ₽', photo: image}, 
    {id: '002', description: 'Платье позрачное в цветочек черное', price: '1 299 ₽', photo: image},
    {id: '003', description: 'Бомбер Gone Crazy хаки', price: '2 499 ₽', photo: image}]);

    return (
        <section className="new-clothes">
            <div className="wrapper">
                <Title title = 'Новинки' subtitle = 'новинки' />
            </div>
            <div className="new-clothes__items-container">
                <div className="new-clothes__items">
                    {products.map(({description, price, photo}) => {
                        <Product description = {description} price = {price} photo={photo}/>
                    })}
                </div>
                <div className="new-clothes__button">
                    <Button text = "Смотреть все"/>
                </div>
            </div>
            <div className="banner">
                {<img src={banner} alt="Баннер"/>}
            </div>
        </section>
    )
}

export default NewClothes;