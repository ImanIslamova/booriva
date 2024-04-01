import styles from './footer.module.sass';
import mainstyles from '../../../pages/HomePage/category/category.module.sass';

import Logo from './logo/Logo';
import Info from './info/Info';

import Address from './address/Address';
import Sociality from './sociality/Sociality';
import ReadUs from './readUs/ReadUs';


const Footer = () => {
    return (
        <section className={`${styles.footer} ${mainstyles.wrapper}`}>
                <Logo />
                <Info />
                <div className={styles.wrap_in_adaptive}>
                    <Address />
                    <Sociality />
                </div>
                <ReadUs />
        </section>
    )
}

export default Footer;