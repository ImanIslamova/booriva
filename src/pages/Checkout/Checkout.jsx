import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../redux/cartSlice/cartSlice";
import Clear from "../../assets/icons/Clear";
import { getProductData } from "../../services/product";

import TitleOrder from "../../components/title/TitleOrder";
import styles from "./checkout.module.sass";
import stylesBasket from "../../components/layot/basket/basket.module.sass";
import Button from "../../components/buttons/Button";
import Title from "../../components/title/Title";
import { Link, useNavigate, json } from "react-router-dom";
import Basket from "../../components/layot/basket/basket";

const Checkout = () => {
  const navigate = useNavigate();
  ///Код корзины
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [allPrice, setAllPrice] = useState(0);
  const [products, setProducts] = useState([]);

  const sendDataCart = async (cart, i, products) => {
    if (i < cart.length) {
      const data = await getProductData(cart[i]);
      products.push(data);
      if (i < cart.length - 1) {
        return sendDataCart(cart, i + 1, products);
      } else {
        return products;
      }
    } else {
      return [];
    }
  };

  useEffect(() => {
    const items = sendDataCart(cart, 0, []);
    items.then((res) => setProducts(res));
  }, [cart]);

  useEffect(() => {
    let productsPrice = 0;
    for (let i = 0; i < products.length; i++) {
      productsPrice += Number(products[i].price);
    }
    setAllPrice(productsPrice);
  }, [products]);

  //////
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
    address: address,
  });

  const sendData = () => {
    setUser({
      userName: firstName,
      userLastName: lastName,
      userPhone: phoneNum,
      userEmail: email,
      way: wayId,
      address: address,
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
          <b> Заказ: </b>${products[0].name} по цене ${products[0].price} ID: ${products[0].id}

          `,
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => (res.ok ? setIsComplete(true) : navigate("/error")));
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
                    <button type="submit" className={styles.button}>
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
            <div>
              <h2 className={stylesBasket.boxTitle}>КОРЗИНА</h2>
              <div className={stylesBasket.box}>
                <div className={stylesBasket.products}>
                  {products.map((item) => (
                    <div className={stylesBasket.products_block}>
                      <div
                        className={stylesBasket.products__image}
                        style={{ backgroundImage: `URL(${item.images[0]})` }}
                      ></div>
                      <div className={stylesBasket.description}>
                        <div className={stylesBasket.description_name}>
                          {item.name}
                        </div>
                        <div className={stylesBasket.description_size}>S-M</div>
                        <div className={stylesBasket.description_price}>
                          {item.price + " ₴"}
                        </div>
                      </div>
                      <div className={stylesBasket.btnClear}>
                        <div
                          onClick={() =>
                            dispatch(
                              setCart(cart.filter((id) => id !== item.id))
                            )
                          }
                        >
                          <Clear />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {}
              <div className={stylesBasket.block}>
                <div className={stylesBasket.block_one}>
                  <span className={stylesBasket.basketTextSmall}>
                    Cумма заказа:
                  </span>
                  <span className={stylesBasket.basketTextBig}>
                    {allPrice} ₴
                  </span>
                </div>
                <div className={stylesBasket.block_one}>
                  <span className={stylesBasket.basketTextSmall}>
                    Стоимость доставки:
                  </span>
                  <span className={stylesBasket.basketTextBig}>бесплатно</span>
                </div>
                <div className={stylesBasket.block_two}>
                  <span className={stylesBasket.basketTextPrice}>
                    К оплате: . . . . . . . . . .{" "}
                  </span>
                  <span className={stylesBasket.basketTextBigPrice}>
                    {allPrice} ₴
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
