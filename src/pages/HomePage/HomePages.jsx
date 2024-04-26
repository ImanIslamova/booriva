

import BoorivaStore from "./BoorivaStore/BoorivaStore";

import Category from "./category/Category";
import NewClothes from "./newClothes/NewClothes";
import Ticker from "./ticker/ticker";
import TopProducts from "./topProducts/TopProducts";

const HomePage = () =>{
    return (
        <div>
            <Category />
            <NewClothes />
            <BoorivaStore/>
            <Ticker />
            <TopProducts />
        </div>
    )
}

export default HomePage;