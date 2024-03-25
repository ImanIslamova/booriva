
import MiniBox from './miniBox/miniBox';
import './nav.css'
import NavBlock from './navBlock/navBlock';
import NavBox from './navBox/navBox';
import NavLine from './navLine/navLine';
import NavMenu from './navMenu/navMenu';



const Nav = () =>{
    return (
        <div className="nav">
            <NavBox/>
            <NavMenu/>
            <MiniBox/>
            <NavLine/>
            <NavBlock/>
        </div>
    )
}

export default Nav;
