import '../../../index.css';
import styles from './category.module.sass';

import Button from "../../../components/buttons/Button";

const Category = () => {
    return (
        <div className={styles.categories + 'wrapper'}>
            <div className={styles.categories__main_flex}>
                <div className={styles.categories__flex}>
                    <div className={`${styles.block} ${styles.t_shirts}`}>
                        <div className={styles.button__t_shirts}>
                            <Button text = "Футболки"/>
                        </div>
                    </div>
                    <div className={styles.small_flex}>
                        <div className={`${styles.block_small} ${styles.bottom}`}>
                            <div className={styles.button__bottom}>
                                <Button text = "Низ"/>
                            </div>
                        </div>
                        <div className={`${styles.block_small} ${styles.top}`}>
                            <div className={styles.button__top}>
                                <Button text = "Верх"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.categories__flex}>
                    <div className={styles.small_flex}>
                        <div className={`${styles.block_small} ${styles.dresses}`}>
                            <div className={styles.button__dresses}>
                                <Button text = "Платья"/> 
                            </div>
                        </div>
                        <div className={`${styles.block_small} ${styles.castoms}`}>
                            <div className={styles.button__castoms}>
                                <Button text = "Костюмы"/>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.block} ${styles.hoodie}`}>
                        <div className={styles.button__hoodie}>
                            <Button text = "Худи"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;