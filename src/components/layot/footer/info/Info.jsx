import styles from '../footer.module.sass';

const Info = () => {
    return (
        <div className={styles.footer__info}>
            <p className={styles.footer__title}>Инфо</p>
            <ul className={styles.footer__items}> 
                <li className={styles.footer__item}>
                    Контакты
                </li>
                <li className={styles.footer__item}>
                    Система лояльности                            
                </li>
                <li className={styles.footer__item}>
                    Обмен и возврат                            
                </li>
                <li className={styles.footer__item}>
                    Доставка и оплата                            
                </li>
            </ul>
        </div>
    )
}

export default Info;