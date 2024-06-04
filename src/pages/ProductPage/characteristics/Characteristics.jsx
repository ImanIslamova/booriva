import { useContext, useEffect, useState } from "react";
import styles from "./characteristics.module.sass";

import Button from "../../../components/buttons/Button";
import Line from "./line/Line";
import { ChooseProductSize } from "../../../App";

const Characteristics = ({name, price, details, desc, addProductInCart}) => {
  const {size, setSize, chooseSize} = useContext(ChooseProductSize);

  // const [size, setSize] = useState('xs');

  // const chooseSize = (event) => {
  //   setSize(event.target.value);
  //   return event.target.value
  // }

  useEffect(() => {
    console.log(size);
  }, [size]);


  return (
    <div className={styles.characteristics}>
      <h1 className={styles.name}>{name}</h1>
      <h2 className={styles.price}>{price} ₽</h2>
      <div className={styles.sizeCont}>
        <p className={styles.chooseSize}>Выбрать размер:</p>
        <form id="check" className={styles.sizes}>
          <div className={styles.flexSize}>
            <input type="radio" value='xs' id='xs' name="size"  className={styles.sizeIn} checked={size === 'xs'} onClick={chooseSize}/>
            <label htmlFor='xs' className={`${styles.size} ${(size === 'xs' )? styles.selected : ''}`}> XS - S
            </label>
          </div>
          <div className={styles.flexSize}>
            <input type="radio" value='s' id='s' name="size" className={styles.sizeIn} checked={size === 's'} onClick={chooseSize}/>
            <label htmlFor='s' className={`${styles.size} ${(size === 's' )? styles.selected : ''}`}> S - M
            </label>
          </div>
          <div className={styles.flexSize}>
            <input type="radio" value='m' id='m'  name="size" className={styles.sizeIn} checked={size === 'm'} onClick={chooseSize}/>
            <label htmlFor='m' className={`${styles.size} ${(size === 'm' )? styles.selected : ''}`}> M - L
            </label>
          </div>
          <div className={styles.flexSize}>
            <input type="radio" value='l' id='l'  name="size" className={styles.sizeIn} checked={size === 'l'} onClick={chooseSize}/>
            <label htmlFor='l' className={`${styles.size} ${(size === 'l' )? styles.selected : ''}`}> L - XL
            </label>
          </div>
          
        </form>
        <div className={styles.button} onClick={addProductInCart}>
          <Button text="В корзину" />
        </div>
        <p className={styles.description}>
          {desc}
        </p>
        <div className={styles.line}>
          <Line />
        </div>
        <div className={styles.consist}>
          <span>Состав:  </span>   {details}
        </div>
      </div>
    </div>
  );
};

export default Characteristics;
