import styles from '../footer.module.sass';
import logo from '../../../../assets/svg/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
    <div className={styles.footer__logo}>
        <Link to = "/about_us">
            <img src={logo} alt='logo'></img>
        </Link>
    </div>
    )
}

export default Logo;