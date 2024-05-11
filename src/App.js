import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Footer from "./components/layot/footer/Footer";
import HomePage from "./pages/HomePage/HomePages";
import Insta from "./pages/HomePage/insta/Insta";
import WishList from "./pages/wishList/WishList";
import Catalog from "./pages/Catalog/Catalog";
import Nav from "./components/layot/nav/Nav";
import ProductPage from './pages/ProductPage/ProductPage';
import Basket from './components/layot/basket/basket';

import './index.sass';

const App = () => {
  const[isBasketOpen, setIsBasketOpen] = useState(false);
  return (
    <div className={`${isBasketOpen && 'no-scroll'}`}>
      <Basket isBasketOpen={isBasketOpen} setIsBasketOpen={setIsBasketOpen}/>
      <Nav setIsBasketOpen={setIsBasketOpen}/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/catalog' element={<Catalog />}/>
        <Route path='/wishlist' element={<WishList />}/>
        <Route path='/product' element={<ProductPage />}/>
      </Routes>
      <Insta />
      <Footer />
    </div>
  );
}

export default App;
