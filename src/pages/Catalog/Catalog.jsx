import styles from './catalog.module.sass';
import Filter from './filter/Filter';
import CatalogBanner from './catalogBanner/CatalogBanner';
import CatalogProducts from './catalogProducts/CatalogProducts';
import { getCatalogData } from "../../services/catalog";


const Catalog = () => {
    return (
        <div className={styles.catalog}>
            <div className='wrapper'>
                <div className={styles.catalogFlex}>
                    <Filter />
                    <div className={styles.rightBlock}>
                        <CatalogBanner />
                        <CatalogProducts />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalog;