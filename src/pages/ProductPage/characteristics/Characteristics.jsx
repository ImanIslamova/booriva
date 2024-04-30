import { useState } from "react";
import styles from "./characteristics.module.sass";

import Button from "../../../components/buttons/Button";
import Line from "./line/Line";

const Characteristics = () => {
  const [size, setSize] = useState([
    { id: "01", size: "XS - S" },
    { id: "02", size: "S - M" },
    { id: "03", size: "M - L" },
    { id: "04", size: "L - XL" },
  ]);
  return (
    <div className={styles.characteristics}>
      <h1 className={styles.name}>Бомбер Gone Crazy хаки</h1>
      <h2 className={styles.price}>2 499 ₽</h2>
      <div className={styles.sizeCont}>
        <p className={styles.chooseSize}>Выбрать размер:</p>
        <div className={styles.sizes}>
          {size.map(({ size }) => {
            return <div className={styles.size}>{size}</div>;
          })}
        </div>
        <div className={styles.button}>
          <Button text="В корзину" />
        </div>
        <p className={styles.description}>
          Over size бомбер цвета хаки на резинке с объемными рукавами. Фурнитура
          выполнена в серебряном цвете. Акцентными деталями выступают объемные
          нашитые карманы и капюшон, который отстёгивается.
        </p>
        <div className={styles.line}>
          <Line />
        </div>
        <div className={styles.consist}>
          <span>Состав:  </span>   50% вискоза, 50% полиэстер
        </div>
      </div>
    </div>
  );
};

export default Characteristics;
