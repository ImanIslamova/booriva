import styles from '../footer.module.sass';
import ivanka from '../../../../assets/images/ivanka.png';

const ReadUs = () => {
    return (
        <div className={styles.footer__read_us}>
            <div>
                <img src={ivanka} alt='Иванка'></img>
            </div>
            <div className={styles.read_us}>
                <p className={styles.footer__item}>Нам важно знать, что ты думаешь про нас! Просто напиши мне!</p>
                <p className={styles.footer__title}>Написать Иванке</p>
            </div>
        </div>
    )
}

export default ReadUs;