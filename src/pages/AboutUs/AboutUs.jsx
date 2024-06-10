import { Link } from 'react-router-dom';
import styles from './aboutUs.module.sass';

import arrow from '../../assets/svg/linkArrow.svg';
import one from '../../assets/images/tshirts.jpg';
import two from '../../assets/images/top.jpg';
import three from '../../assets/images/hudi.jpg';
import four from '../../assets/images/castoms.jpg';
import five from '../../assets/images/dresses.jpg';
import six from '../../assets/images/pink.jpg';

import Title from '../../components/title/Title';

const AboutUs = () => {
    return (
        <div className={styles.avoutUs}>
            <div className="wrapper">
                <div className={styles.links}>
                    <Link to="/">Главная </Link> <img src={arrow} alt='arrow' /> <Link to="/aboutus"><span> Boorivagirls</span></Link>
                </div>
                <div className={styles.aboutUsFlex}>
                    <div className={styles.boorivagirls}>
                        <Title title='boorivagirls' subtitle='#boorivagirls' />
                        <div className={styles.text}>
                        Мы любим встречать booriva на улице. <br /> Так как всех не встретишь, отмечай нас в соц.сетях и мы внутри взорвемся и закричим УРА!
                        </div>
                    </div>
                    <div className={styles.block1}>
                        <div className={styles.item}>
                            <img src={one} alt='фото' />
                        </div>
                        <div className={styles.item}>
                            <img src={two} alt='фото' />
                        </div>
                        <div className={styles.item}>
                            <div className={styles.text}>
                                Ставь тэг <span>#boorivagirls</span> чтобы быть <br/>в нашей тусовке.
                            </div>
                        </div>
                    </div>
                    <div className={styles.block2}>
                        <div className={styles.item}>
                            <img src={three} alt='фото' />
                        </div>
                        <div className={styles.item}>
                            <img src={four} alt='фото' />
                        </div>
                        <div className={styles.item}>
                            <img src={five} alt='фото' />
                        </div>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.item}>
                            <img src={six} alt='фото' />
                        </div>
                        <div className={styles.item}>
                            <img src={one} alt='фото' />
                        </div>
                        <div className={styles.item}>
                            <img src={three} alt='фото' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;