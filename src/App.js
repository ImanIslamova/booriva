import { Route, Routes } from 'react-router-dom';

import './index.sass';

import Footer from "./components/layot/footer/Footer";
import HomePage from "./pages/HomePage/HomePages";
import Insta from "./pages/HomePage/insta/Insta";
import WishList from "./pages/wishList/WishList";
import Catalog from "./pages/Catalog/Catalog";
import Nav from "./components/layot/nav/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/catalog' element={<Catalog />}/>
        <Route path='/wishlist' element={<WishList />}/>
      </Routes>
      <Insta />
      <Footer />
    </div>
  );
}

export default App;
