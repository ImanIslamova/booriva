

import Category from "./category/Category";
import NewClothes from "./newClothes/NewClothes";
import Insta from "./insta/Insta";
import Footer from "../../components/layot/footer/Footer";
import Nav from "../../components/layot/nav/Nav";


const HomePage = () =>{
    return (
        <div>
            <Nav/>
            <Category />
            <NewClothes />
        </div>
        
    )
}

export default HomePage;