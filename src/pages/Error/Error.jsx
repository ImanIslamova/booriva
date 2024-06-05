import styles from "./error.module.sass";
import snake from "../../assets/svg/snake.svg";
import Button from "../../components/buttons/Button";
import Ticker from "../HomePage/ticker/ticker";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className={styles.errorPage}>
            <div className={styles.ticker}>
                <Ticker />
            </div>

            <div className="wrapper">
                <div className={styles.error}>
                    <div className={styles.snake}>
                        <img src={snake} alt="snake" />
                    </div>
                    <div className={styles.bottom}>
                        <p className={styles.text}>
                        Страница не найдена, но у нас есть еще много всего интересного
                        </p>
                        <div className={styles.button}>
                            <Link to="/">
                                <Button text="На главную" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error;