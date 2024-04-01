import styles from '../footer.module.sass';

import instagram from '../../../../assets/svg/inst.svg';
import facebook from '../../../../assets/svg/facebook.svg';

const Sociality = () => {
    return (
        <div className={styles.footer__sociality}>
            <p className={styles.footer__title}>Соц.. сети</p>
            <div className={styles.sociality}>
                <img src={instagram} alt='instagram'></img>
                <img src={facebook} alt='facebook'></img>
            </div>
        </div>
    )
}

export default Sociality;