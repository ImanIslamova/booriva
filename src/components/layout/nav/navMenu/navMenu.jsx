import { useState } from "react";

function NavMenu() {
    const [menu, setMenu] = useState([
        {
            id: '000',
            name: 'Новинки',
            categories: 0,
        },
        {
            id: '001',
            name: 'Платья',
            categories: 6,
        },
        {
            id: '002',
            name: 'Верх',
            categories: 6,
        },
        {
            id: '003',
            name: 'Низ',
            categories: 5,
        },
        {
            id: '004',
            name: 'Куртки',
            categories: 6,
        },
        {
            id: '005',
            name: 'Мелочи',
            categories: 0,
        },
        {
            id: '006',
            name: 'Костюмы',
            categories: 0,
        },
    ])
        return(
            <div className="nav_menu wrapper">
            {menu.map(({id, name}) => (
                <div className="menu__title" key={id}>
                    {name}
                </div>
            ))}
            <div className="menu__title">#Boorivagirls</div>
        </div>
        )
}
  
export default NavMenu;