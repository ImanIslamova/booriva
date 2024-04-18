import styles from './insta.module.sass';

import instaOneBig from '../../../assets/images/insta-one-big.png'
import instaOneSmall from '../../../assets/images/insta-one-small.png'
import instaTwo from '../../../assets/images/insta-two.png';
import instaThreeSmall from '../../../assets/images/insta-three-small.png';
import instaThreeBig from '../../../assets/images/insta-three-big.png';



const Insta = () => {
    return (
        <section className={`${styles.insta} wrapper`}>
            <div className={styles.insta__item}>
                <div>
                    <div className={styles.insta__title}>Instagram</div>
                    <div className={styles.insta__text}>Мы очень рады, когда ты нас отмечаешь) Отмечай, плз чаще</div>
                </div>
                <div className={styles.insta__minis}>
                    <div className={styles.insta__image_container}>
                        <img src={instaOneBig} alt = 'фото'/>
                    </div>
                    <div className={styles.insta__image_container__small}>
                        <img src={instaOneSmall} alt = 'фото'></img>
                    </div>
                </div>
            </div>
            <div className={`${styles.insta__item} ${styles.insta_two}`}>
                <img src={instaTwo} alt = 'фото'></img>               
            </div>
            <div className={styles.insta__item}>
                <div className={`${styles.insta__minis} ${styles.insta__minis__second}`}>
                    <div className={styles.insta__image_container__small}>
                        <img src={instaThreeSmall} alt = 'фото'></img>
                    </div>
                    <div className={styles.insta__image_container__big}>
                        <img src={instaThreeBig} alt = 'фото'></img>
                    </div>
                </div>
                <div>
                    <div>
                        <div className={styles.insta__tag}>#boorivagirls </div>
                        <div className={styles.insta__text}>Ставь тег, чтобы быть в нашей тусовке</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Insta;