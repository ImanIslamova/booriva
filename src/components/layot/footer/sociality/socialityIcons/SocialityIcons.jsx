import styles from './socialityIcons.module.sass';

import instagram from '../../../../../assets/svg/inst.svg';
import facebook from '../../../../../assets/svg/facebook.svg';

const SocialityIcons = () => {
    return (
        <div className={styles.sociality}>
            <img src={instagram} alt='instagram'></img>
            <img src={facebook} alt='facebook'></img>
        </div>
    )
}

export default SocialityIcons;