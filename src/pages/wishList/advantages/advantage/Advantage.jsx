import styles from './advantage.module.sass';

const Advantage = ({title, subtitle, photo}) => {
    return (
        <div className={styles.advantage}>
            <div className={styles.image}>
                <img src={photo} alt='cat'/>
            </div>
            <div className={styles.text}>
                <p className={styles.title}>
                    {title}
                </p>
                <p className={styles.subtitle}>
                    {subtitle}
                </p>
            </div>
        </div>
    )
}

export default Advantage;