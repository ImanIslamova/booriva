import Nav from "./nav/nav";

import Category from "./category/Category";
import NewClothes from "./newClothes/NewClothes";
import Insta from "./insta/Insta";
import Footer from "../../components/layot/footer/Footer";

import Catalog from "../Catalog/Catalog";

const HomePage = () =>{
    return (
        <div>
            <Nav />
            <Category />
            <NewClothes />
            <Insta />
            <Footer />

            <Catalog />
        </div>
    )
}

export default HomePage;