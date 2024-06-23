

import { useEffect } from 'react';
import Title from '../../components/title/Title';
import Advantages from './advantages/advantages';
import WishListComplete from './wishListComplete/WishListComplete';
import WishListEmpty from './wishListEmpty/WishListEmpty';
import { useDispatch, useSelector } from 'react-redux';
import { setWish } from '../../redux/wishSlice/wishSlice';

const WishList = () => {
    const wish = useSelector(state => state.wish.wish);
    const dispatch = useDispatch();

    useEffect(() => {
        const storedWish = JSON.parse(localStorage.getItem('wish'));
        if (storedWish) {
          dispatch(setWish(storedWish))
        }
      }, [setWish]);

    return (
        <div className='wishList wrapper'>
            <Title title = 'Список желаний' subtitle = 'Твой тайный список желаний' />
            {/* {localStorage.getItem('wish') ? <WishListComplete /> : <WishListEmpty /> } */}
            {wish.length ? <WishListComplete /> : <WishListEmpty /> }
            <Advantages />
        </div>
    )
}

export default WishList;