import { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import { getMenuItems } from "../../../../services/menu";

const Menu = ({setIsShow, setMenuId}) => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        getMenuItems().then((res) => setMenu(res))
    }, [])
    return (
        <nav className={styles.menu + ' ' + styles.wrapper} >
            <ul  className={styles.menuli}>
                {
                    menu.map(({id, name}) => 
                    <li className={styles.li} 
                    onMouseEnter={() => {
                        setIsShow(true) 
                        setMenuId(id)}} 
                    onMouseLeave={() => setIsShow(false)} 
                    key={id}>
                    <Link to={`/catalog?menuId=${id}`} className={styles.list}>{name}</Link> </li>)
                    
                }
                    <li> <Link to="/about_us" className={styles.list} >#Boorivagirls</Link></li>
            </ul> 
        </nav>   
    )
};
export default Menu;