import { useState } from "react";
import BoorivaLogo from "../../../assets/icons/BoorivaLogo";
import Basket from "./basket/Basket";
import Contacts from "./contacts/Contacts";
import Menu from "./menu/Menu";
import Search from "./search/Search";
import Wishlist from "./wishlist/Wishlist";
import SubMenu from "./menu/subMenu/SubMenu";
import MenuBottom from "./menu/menuBottom/menuBottom";
import Searcher from "../../layot/search/searcher";


import styles from "./../../../components/layot/nav/Nav.module.css";



const Nav = ({setIsBasketOpen, productsLength}) => {
    const [isShow, setIsShow] = useState(false)
    const [showSearcher, setShowSearcher] = useState(false);
    const [menuId, setMenuId] = useState(0)
    return (
        <div className={styles.nav}>
            <div className={styles.block + ' ' + styles.wrapper}>
                <div className={styles.blocktwo}>
                    <Contacts />
                    <BoorivaLogo />
                    <Search showSearcher={showSearcher} setShowSearcher={setShowSearcher} />
                    <div className={styles.blockthree}>
                        <Wishlist />
                        <Basket setIsBasketOpen={setIsBasketOpen} productsLength={productsLength} />
                    </div>
                </div>
                <div className={styles.menu}>
                    <Menu setIsShow={setIsShow} setMenuId={setMenuId}/>
                    <MenuBottom/>
                </div>
                <SubMenu isShow={isShow} setIsShow={setIsShow} menuId={menuId} />
                    <Searcher showSearcher={showSearcher} setShowSearcher={setShowSearcher} />
            </div>
        </div>

    )

}
export default Nav