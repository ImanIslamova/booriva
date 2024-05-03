import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getSubMenuItems } from "../../../../../services/menu";

import styles from "./SubMenu.module.sass";


const SubMenu = ({isShow, setIsShow, menuId}) => {
    const [subMenu, setSubMenu] = useState([])
    useEffect(() => {
        const data = getSubMenuItems(menuId)
        data.then((res) => setSubMenu(res))
    }, [menuId])
    return(
        subMenu.length > 0 && (
            <ul  className={styles.submenu + ' ' + (isShow ? styles.show : styles.hidden)} onMouseEnter={() => setIsShow(true)} onMouseLeave={() => setIsShow(false)}>
            <div className={styles.listWrap}>
            {
                subMenu.map(({id, name}) => <li> <Link to="/catalog" className={styles.subList} key={id}>{name}</Link> </li>)

            }
            </div>
            <div className={styles.subLine}></div>
        </ul>
        )
             
    )
}
export default SubMenu