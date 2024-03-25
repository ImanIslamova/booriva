import Nav from "./nav/nav";
import Category from "./category/Category";
import NewClothes from "./category/categories/NewClothes";
import Insta from "./insta/Insta";
import Footer from "./footer/Footer";

const HomePage = () =>{
    return (
        <div>
            <Nav />
            <Category />
            <NewClothes />
            <Insta />
            <Footer />
        </div>
    )
}

export default HomePage;