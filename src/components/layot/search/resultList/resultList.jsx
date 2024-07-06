import Product from '../../../product/Product';
import Title from '../../../title/Title';
import Footer from '../../footer/Footer';
import Nav from '../../nav/Nav';


import styles from './resultList.module.sass'


const ResultList = () => {
    return (
        <div className={styles.result}>
            <div className="wrapper">
                <Title title="Результати" subtitle="найдено 0 товаров" />
                <div className={styles.result_container}>
                    <div className={styles.result__items}>
                        {/* {products.map(({ name, price, images, id }) => {
                            return (
                                <div className={styles.productWrap} key={id}>
                                <Product
                                name={name}
                                price={`${price} ₽`}
                                photo={images[0]}
                                widthImg={"100%"}
                                heightImg={"121%"}
                                link={`/product?id=${id}`}
                                id={id}
                                />
                                </div>
                            );
                        }).slice(0, 4)} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultList;