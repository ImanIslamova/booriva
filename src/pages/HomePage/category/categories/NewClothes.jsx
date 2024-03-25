import Title from "../../../../components/title/Title";
import Product from "../../../../components/product/Product";
import Button from "../../../../components/buttons/Button";

const NewClothes = () => {
    return (
        <section className="new-clothes">
            <div className="wrapper">
                <Title title = 'Новинки' subtitle = 'новинки' />
            </div>
            <div className="new-clothes__items-container">
                <div className="new-clothes__items">
                    <Product description = "Свитшот вставка клетка" price = "1 099 ₽"/>
                    <Product description = "Платье позрачное в цветочек черное" price = "1 299 ₽"/>
                    <Product description = "Бомбер Gone Crazy хаки" price = "2 499 ₽"/>
                    <Product description = "Платье-футболка рыбы в аквариуме" price = "899 ₽"/>
                </div>
                <div className="new-clothes__button">
                    <Button text = "Смотреть все"/>
                </div>
            </div>
           
            <div className="banner">
                <img src="images/png/baner.png" alt="Баннер"></img>
            </div>
        </section>
    )
}

export default NewClothes;