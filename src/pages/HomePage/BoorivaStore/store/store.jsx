import Description from "./description/description";
import StoreImage from "./storeImage/storeImage";
import StoreWrap from "./storeWrap/storeWrap";

const Store = () =>{
    return (
    <div className="store_container">
        <StoreWrap/>
        <StoreImage/>
        <Description/>
    </div> 
    )
}

export default Store;
