import styles from '../footer.module.sass';

const Address = () => {
    return (
        <div className={styles.footer__address}>
            <p className={styles.footer__title}>Наш адрес</p>
            <ul className={styles.footer__items}>
                <li className={styles.footer__item}>
                    г.Киев, ул. Нижний Вал, 37
                </li>
                <li className={styles.footer__item}>
                    Пн — Вс: с 11:00 до 21:00
                </li>
            </ul>
        </div>
    )
}

export default Address;