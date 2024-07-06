import { Route, Routes, useLocation } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import {useSelector} from "react-redux";

import Footer from "./components/layot/footer/Footer";
import HomePage from "./pages/HomePage/HomePages";
import Insta from "./pages/HomePage/insta/Insta";
import WishList from "./pages/wishList/WishList";
import Catalog from "./pages/Catalog/Catalog";
import Nav from "./components/layot/nav/Nav";
import ProductPage from "./pages/ProductPage/ProductPage";
import Basket from "./components/layot/basket/basket";
import Checkout from "./pages/Checkout/Checkout";
import Error from "./pages/Error/Error";
import AboutUs from "./pages/AboutUs/AboutUs";
import ResultList from "./components/layot/search/resultList/resultList";
import Searcher from "./components/layot/search/searcher";

import "./index.sass";



export const BasketOpen = createContext();


const App = () => {
  const wish = useSelector(state => state.wish.wish);
  const cart = useSelector(state => state.cart.cart);
  const [products, setProducts] = useState([])

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
        <Basket  products={products} setProducts={setProducts}/>
        {/* <Searcher/> */}
          <Nav setIsBasketOpen={setIsBasketOpen} productsLength={products?.length} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resultList" element={<ResultList />} />
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
