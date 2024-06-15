import { Route, Routes, useLocation } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

import "./index.sass";

import Footer from "./components/layot/footer/Footer";
import HomePage from "./pages/HomePage/HomePages";
import Insta from "./pages/HomePage/insta/Insta";
import WishList from "./pages/wishList/WishList";
import Catalog from "./pages/Catalog/Catalog";
import Nav from "./components/layot/nav/Nav";
import ProductPage from "./pages/ProductPage/ProductPage";
import Basket from "./components/layot/basket/basket";
import {useSelector} from "react-redux";
import Checkout from "./pages/Checkout/Checkout";
import Error from "./pages/Error/Error";
import AboutUs from "./pages/AboutUs/AboutUs";

export const BasketOpen = createContext();


const App = () => {
  const wish = useSelector(state => state.wish.wish);
  const cart = useSelector(state => state.cart.cart);

  const [isBasketOpen, setIsBasketOpen] = useState(false);
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const location = useLocation();
  const [isActive, setisActive] = useState(false);

  useEffect(() => {
    localStorage.setItem("wish", JSON.stringify(wish));
  }, [wish]);

  return (
    <div>
    <BasketOpen.Provider value={{isBasketOpen, setIsBasketOpen}}>
      <div className={`${isBasketOpen && "no-scroll"}`}>
        <Basket/>
          <Nav setIsBasketOpen={setIsBasketOpen} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route
              path="/product"
              element={<ProductPage />}
            />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        <Insta />
        <Footer />
      </div>
      </BasketOpen.Provider>
    </div>
  );
};

export default App;
