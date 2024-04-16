
import Basket from "./basket/basket";
import Favorites from "./favorites/favorites";



function NavIcons() {
    return (
        <div className="nav_icons">
            <Favorites/>
            <Basket/>
        </div>
    );
}
  
export default NavIcons;