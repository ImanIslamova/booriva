import styles from '../footer.module.sass';
import logo from '../../../../assets/svg/logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
    <div className={styles.footer__logo}>
        <Link to = "/">
            <img src={logo} alt='logo'></img>
        </Link>
    </div>
    )
}

export default Logo;