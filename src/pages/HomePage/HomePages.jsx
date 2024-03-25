import Nav from "./nav/nav";
import Category from "../../components/category/Category";
import NewClothes from "../../components/category/categories/NewClothes";

const HomePage = () =>{
    return (
        <div>
            <Nav />
            <Category />
            <NewClothes />
        </div>
    )
}

export default HomePage;