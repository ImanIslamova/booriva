import { useState } from "react";

import Basket from "../../components/layot/basket/basket";
import TitleOrder from "../../components/title/TitleOrder";
import styles from "./checkout.module.sass";
import Button from "../../components/buttons/Button";
import Title from "../../components/title/Title";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [isComplete, setIsComplete] = useState(false);

  const [firstName, setFirstName] = useState("");
  const changeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const [lastName, setLastName] = useState("");
  const changeLastName = (event) => {
    setLastName(event.target.value);
  };

  const [phoneNum, setPhoneNum] = useState("");
  const changePhoneNum = (event) => {
    setPhoneNum(event.target.value);
  };

  const [email, setEmail] = useState("");
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const [address, setAddress] = useState("");
  const changeAddress = (event) => {
    setAddress(event.target.value);
  };

  const User = {
    userName: firstName,
    userLastName: lastName,
    userPhone: phoneNum,
    userEmail: email,
  };

  const [wayId, setWayId] = useState("почта");
  const changeWayId = (event) => {
    setWayId(event.target.value);
  };

  const Delivery = {
    way: wayId,
    address: address,
  };

  const sendData = () => {
    setIsComplete(true);
    console.log(User, Delivery);
    console.log(isComplete);
  };

  return (
    <div className={styles.checkoutPage}>
      <div
        className={
          styles.backdrop + " " + (isComplete ? styles.backdrop_open : " ")
        }
        onClick={() => {
          setIsComplete(false);
        }}
      ></div>
      <div className={styles.modal  + " " + (isComplete ? styles.modal_open : " ")}>
        <div
          className={styles.close}
          onClick={() => setIsComplete((prev) => !prev)}
        >
          <span></span>
          <span></span>
        </div>
        <div className={styles.boorivagirls}>
            <TitleOrder title='Спасибо' subtitle='Ваш заказ был принят!' />
            <div className={styles.text}>
            Мы любим встречать booriva на улице. <br /> Так как всех не встретишь, отмечай нас в соц.сетях и мы внутри взорвемся и закричим УРА!
            </div>
            <div className={styles.button}>
                <Link to="/">
                    <Button text="На главную" />
                </Link>
            </div>
        </div>

      </div>
      <div className="wrapper">
        <div className={styles.checkout}>
          <div className={styles.checkoutOptions}>
            <div className={styles.clientDataSection}>
              <div className={styles.title}>
                <TitleOrder title={'\u00A0' + 1} subtitle={"контактные данные"} />
              </div>
              <div className={styles.clientData}>
                <form className={styles.client}>
                  <input
                    type="text"
                    className={styles.input}
                    value={firstName}
                    onChange={changeFirstName}
                    placeholder="Имя"
                  />
                  <input
                    type="text"
                    className={styles.input}
                    value={lastName}
                    onChange={changeLastName}
                    placeholder="Фамилия"
                  />
                  <input
                    type="text"
                    className={styles.input}
                    value={phoneNum}
                    onChange={changePhoneNum}
                    placeholder="+7 ( __ ) ________"
                  />
                  <input
                    type="text"
                    className={styles.input}
                    value={email}
                    onChange={changeEmail}
                    placeholder="E-mail"
                  />
                </form>
              </div>
            </div>
            <div className={styles.deliverySection}>
              <div className={styles.title}>
                <TitleOrder title={'\u00A0' + 2} subtitle={"способ доставки"} />
              </div>
              <div>
                <form className={styles.delivery}>
                  <div>
                    <input
                      type="radio"
                      name="delivery"
                      value={"почта"}
                      className={styles.radio}
                      checked={wayId === "почта"}
                      onChange={changeWayId}
                    />{" "}
                    <label>Доставка в оделение почты </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="delivery"
                      value={"самовывоз"}
                      className={styles.radio}
                      checked={wayId === "самовывоз"}
                      onChange={changeWayId}
                    />{" "}
                    <label>
                      {" "}
                      Самовывоз с нашего шоурума - <span>бесплатно</span>{" "}
                    </label>
                  </div>
                  <textarea
                    type="text"
                    className={styles.address}
                    value={address}
                    onChange={changeAddress}
                    placeholder="Введите адрес:"
                  />
                </form>
              </div>
            </div>
            <div className={styles.button} onClick={sendData}>
              <Button text="Оформить заказ" />
            </div>
          </div>
          <div className={styles.basketData}>
            <Title title="В корзине" subtitle="Товары в корзине" />
            <div className={styles.basketDataResult}>
              <div className={styles.total}>
                Всего
                <b> 6 товаров</b>
              </div>
              <div className={styles.totalSumm}>
                Сумма заказа
                <b>6000 ₽</b>
              </div>
            </div>
          </div>
          <div className={styles.basket}>
            Здесь у нас воображаемая корзина
            {/* <Basket cart={cart} setCart={setCart}/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
