import Nav from "./nav/nav";

import Category from "./category/Category";
import NewClothes from "./newClothes/NewClothes";
import Insta from "./insta/Insta";
import Footer from "../../components/layot/footer/Footer";

const HomePage = () =>{
    return (
        <div>
            <Category />
            <NewClothes />
        </div>
    )
}

export default HomePage;