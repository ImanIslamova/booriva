import styles from '../footer.module.sass';

import SocialityIcons from './socialityIcons/SocialityIcons';

const Sociality = () => {
    return (
        <div className={styles.footer__sociality}>
            <p className={styles.footer__title}>Соц.. сети</p>
            <SocialityIcons />
        </div>
    )
}

export default Sociality;