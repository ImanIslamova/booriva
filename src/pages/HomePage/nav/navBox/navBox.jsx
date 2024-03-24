import NavIcons from "./NavIcons/navIcons";
import Contacts from "./contacts/contacts";
import Logo from "./logo/logo";
import Search from "./search/search";



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