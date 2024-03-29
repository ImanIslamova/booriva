import Nav from "../HomePage/nav/nav";
import Insta from "../HomePage/insta/Insta";
import Footer from "../../components/layot/footer/Footer";
import WishList from "./wishList/WishList";

const Catalog = () =>{
    return (
        <div>
            <Nav />
            <WishList />

            <Insta />
            <Footer />
        </div>
    )
}

export default Catalog;