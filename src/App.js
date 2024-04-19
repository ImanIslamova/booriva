
import './index.sass';

import Footer from "./components/layot/footer/Footer";
import HomePage from "./pages/HomePage/HomePages";
import Insta from "./pages/HomePage/insta/Insta";
import WishList from "./pages/wishList/WishList";
import Catalog from "./pages/Catalog/Catalog";
import Nav from "./components/layot/nav/Nav";
import TopProducts from './pages/HomePage/topProducts/TopProducts';

function App() {
  return (
    <div>
      <Nav />
      <HomePage />
      <WishList />
      <Catalog />
      <TopProducts />
      <Insta />
      <Footer />
    </div>
  );
}

export default App;
