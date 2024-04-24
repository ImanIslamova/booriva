
import { Link } from "react-router-dom";
import WishlistIcon from "../../../../assets/icons/WishlistIcon";
import styles from "./../../../../components/layot/nav/Nav.module.css";

const Wishlist = () => {
    return (
        <Link to="/wishlist" className={styles.wishlist}>
            <WishlistIcon />
        </Link>

    )

}
export default Wishlist