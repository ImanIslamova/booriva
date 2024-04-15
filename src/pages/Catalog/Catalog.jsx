import mainstyles from '../HomePage/category/category.module.sass'
import styles from './catalog.module.sass';
import Filter from './filter/Filter';

const Catalog = () => {
    return (
        <div className={styles.catalog}>
            <div className={mainstyles.wrapper}>
                <div className={styles.catalogFlex}>
                    <Filter />
                </div>
            </div>
        </div>
    )
}

export default Catalog;