import { useEffect, useState } from "react";

import TitleOrder from "../../components/title/TitleOrder";
import styles from "./checkout.module.sass";
import Button from "../../components/buttons/Button";
import Title from "../../components/title/Title";
import { Link, useNavigate, json } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const [isComplete, setIsComplete] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [wayId, setWayId] = useState("почта");
  const changeWayId = (event) => {
    setWayId(event.target.value);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  
  console.log(wayId);
  
  const [user, setUser] = useState({
    userName: firstName,
    userLastName: lastName,
    userPhone: phoneNum,
    userEmail: email,
    way: wayId, //здесь короче у меня не получается, чтобы оно обновлялось в реальном времени
    address: address
  });

  const sendData = () => {
    setUser({
      userName: firstName,
      userLastName: lastName,
      userPhone: phoneNum,
      userEmail: email,
      way: wayId,
      address: address
    });

    fetch(
      "https://api.telegram.org/bot6452584114:AAERbOG2WM1dQqVveN6BkS2hUDIyL1k0gAw/sendMessage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          chat_id: "462291550",
          parse_mode: "html",
          text: `<b>Новый заказ:</b>
          <b> Имя: </b>${user.userName}
          <b> Фамилия: </b>${user.userLastName}
          <b> Номер телефона: </b> ${user.userPhone}
          <b> E-mail: </b> ${user.userEmail}
          <b> Способ доставки: </b>${user.way}
          <b> Адрес: </b>${user.address}

          `,
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => (res.ok ? setIsComplete(true) : navigate("/error")));

    console.log(user);
    // console.log(isComplete);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    sendData(user);
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
      <div
        className={styles.modal + " " + (isComplete ? styles.modal_open : " ")}
      >
        <div
          className={styles.close}
          onClick={() => setIsComplete((prev) => !prev)}
        >
          <span></span>
          <span></span>
        </div>
        <div className={styles.boorivagirls}>
          <TitleOrder title="Спасибо" subtitle="Ваш заказ был принят!" />
          <div className={styles.text}>
            Мы любим встречать booriva на улице. <br /> Так как всех не
            встретишь, отмечай нас в соц.сетях и мы внутри взорвемся и закричим
            УРА!
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
            <div className={styles.optionsFlex}>
              <div className={styles.titles}>
                <div className={styles.title}>
                  <TitleOrder
                    title={"\u00A0" + 1}
                    subtitle={"контактные данные"}
                  />
                </div>
                <div className={styles.title + " " + styles.title2}>
                  <TitleOrder
                    title={"\u00A0" + 2}
                    subtitle={"способ доставки"}
                  />
                </div>
              </div>
              <div className={styles.clientDataSection}>
                <div className={styles.clientData}>
                  <form className={styles.client} onSubmit={handleFormSubmit}>
                    <input
                      type="text"
                      className={styles.input}
                      value={user.userName}
                      onChange={handleChange}
                      placeholder="Имя"
                      name="userName"
                      required
                    />
                    <input
                      type="text"
                      className={styles.input}
                      value={user.userLastName}
                      onChange={handleChange}
                      placeholder="Фамилия"
                      name="userLastName"
                      required
                    />
                    <input
                      type="text"
                      className={styles.input}
                      value={user.userPhone}
                      onChange={handleChange}
                      placeholder="+7 ( __ ) ________"
                      name="userPhone"
                      required
                    />
                    <input
                      type="text"
                      className={styles.input}
                      value={user.userEmail}
                      onChange={handleChange}
                      placeholder="E-mail"
                      name="userEmail"
                      required
                    />
                    <div>
                      <input
                        type="radio"
                        name="почта"
                        value="почта"
                        className={styles.radio}
                        checked={wayId === "почта"}
                        onChange={changeWayId}
                      />{" "}
                      <label>Доставка в оделение почты </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="самовывоз"
                        value="самовывоз"
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
                      value={user.address}
                      onChange={handleChange}
                      name="address"
                      placeholder="Введите адрес:"
                      required
                    />
                    <button
                      type="submit"
                      className={styles.button}
                    >
                      <Button text="Оформить заказ" />
                    </button>
                  </form>
                </div>
              </div>
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
