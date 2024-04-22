
import Button from '../../../components/buttons/Button';
import styles from './wishlistEmpty.module.sass';
import heart from '../../../assets/svg/emptyheart.svg';
import { Link } from 'react-router-dom';

const WishListEmpty = () => {
    return (
        <div className='wrapper'> 
        <div className = {styles.wishlist}>
            <div className = {styles.wishlist__empty}>
                <div className={styles.photo__container}>
                    <img src={heart} alt='Пустое избранное'/>
                </div>
                <p className={styles.text}>
                Похоже тебе еще ничего не запало в сердечко....
                </p>
                <Link to = '/'>
                    <Button text='На главную'/>
                </Link>
            </div>
        </div>           
        </div>
    )
}

export default WishListEmpty;