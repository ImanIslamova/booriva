

import BoorivaStore from "./BoorivaStore/BoorivaStore";

import Category from "./category/Category";
import NewClothes from "./newClothes/NewClothes";
import Ticker from "./ticker/ticker";



const HomePage = () =>{
    return (
        <div>
            <Category />
            <NewClothes />
            <BoorivaStore/>
            <Ticker />
        </div>
        
    )
}

export default HomePage;