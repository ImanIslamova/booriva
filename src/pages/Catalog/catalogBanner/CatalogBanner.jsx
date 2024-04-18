
import styles from './catalogBanner.module.sass';
import banner from '../../../assets/images/bannerCatalog.png';

const CatalogBanner = () => {
    return (
        <div className={styles.banner}>
            <img src={banner} />
        </div>
    )
}

export default CatalogBanner;