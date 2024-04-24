import { useState } from "react";
import styles from "./SubMenu.module.sass";
const SubMenu = ({isShow, setIsShow}) => {
    const [subMenu, setSubMenu] = useState([
        {
            "id": "000",
            "text": "Комбинезоны",
            "categories": 0
            },
            {
            "id": "001",
            "text": "Пиджаки",
            "categories": 6
            },
            {
            "id": "002",
            "text": "Рубашки",
            "categories": 6
            },
            {
            "id": "003",
            "text": "Свитшоты",
            "categories": 5
            },
            {
            "id": "004",
            "text": "Худи",
            "categories": 6
            },
            {
            "id": "005",
            "text": "Топы",
            "categories": 0
            },
            {
            "id": "006",
            "text": "Футболки"
            }
    ])
    return(
        <ul  className={styles.submenu + ' ' + (isShow ? styles.show : styles.hidden)} onMouseEnter={() => setIsShow(true)} onMouseLeave={() => setIsShow(false)}>
            <div className={styles.listWrap}>
            {
                subMenu.map(({id, text}) => <li> <a href="" className={styles.subList} key={id}>{text}</a> </li>)

            }
            </div>
            <div className={styles.subLine}></div>
        </ul>      
    )
}
export default SubMenu