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

export const WishListOpen = createContext();

function App() {
  const location = useLocation();
  const [isActive, setisActive] = useState(false);
  const [wish, setWish] = useState(
    localStorage.getItem("wish") ? JSON.parse(localStorage.getItem("wish")) : []
  );

  const addWishList = (id) => {
      if (wish.includes(id)) {
          setWish(wish.filter(wishId => wishId !== id));
      } else {
      console.log(id);
      localStorage.setItem('wish', JSON.stringify([...wish, id]));
      setisActive(prev => !prev);

      setWish(localStorage.getItem('wish') ? JSON.parse(localStorage.getItem('wish')) : []);
    }
  }
  
  useEffect(() => {
    localStorage.setItem("wish", JSON.stringify(wish));
  }, [wish]);

  return (
    <div>
      <WishListOpen.Provider value={{ wish, setWish, addWishList }}>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </WishListOpen.Provider>
      <Insta />
      <Footer />
    </div>
  );
}

export default App;
