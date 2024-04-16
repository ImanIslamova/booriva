
import Contacts from "../../../../pages/HomePage/nav/navBox/contacts/contacts";
import Logo from "../../../../pages/HomePage/nav/navBox/logo/logo";
import Search from "../../../../pages/HomePage/nav/navBox/search/search";
import NavIcons from "./NavIcons/navIcons";



function NavBox() {
    return (
        <div className="nav_box wrapper">
            <Contacts/>
            <Logo/>
            <Search/>
            <NavIcons/>
        </div>
    );
}
  
export default NavBox;