import Product from '../../../components/product/Product';
import styles from './topProducts.module.sass';
import image from '../../../assets/images/bomber.png';
// import centerImage from '../../../assets/images/dress.jpg';


const TopProducts = () => {
    return (
        <div className = {`${styles.topProducts} wrapper`}>
            <div className={styles.products}>
                <Product description = 'Бомбер' price = '1560' photo = {image}/>
                <Product description = 'Бомбер' price = '1560' photo = {image}/>
            </div>

            <div className={`${styles.products} ${styles.centerImage}`}>
                {/* <img src={centerImage} alt = 'Фото'/> */}
            </div>

            <div className={styles.products}>
                <Product description = 'Бомбер' price = '1560' photo = {image}/>
            </div>
        </div>
    )
}

export default TopProducts;