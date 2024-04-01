import styles from '../footer.module.sass';
import logo from '../../../../assets/svg/logo.svg';

const Logo = () => {
    return (
    <div className={styles.footer__logo}>
        <img src={logo} alt='logo'></img>
    </div>
    )
}

export default Logo;