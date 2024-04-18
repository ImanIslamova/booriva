
import Nav from "./pages/HomePage/nav/nav";
import Footer from "./components/layot/footer/Footer";
import HomePage from "./pages/HomePage/HomePages";
import Insta from "./pages/HomePage/insta/Insta";
import WishList from "./pages/wishList/WishList";
import Catalog from "./pages/Catalog/Catalog";

function App() {
  return (
    <div>
      <Nav />
      {/* <HomePage /> */}
      <WishList />
      {/* <Catalog /> */}
      <Insta />
      <Footer />
    </div>
  );
}

export default App;
