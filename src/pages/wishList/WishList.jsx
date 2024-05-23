

import { useContext, useEffect } from 'react';
import Title from '../../components/title/Title';
import Advantages from './advantages/advantages';
import WishListComplete from './wishListComplete/WishListComplete';
import WishListEmpty from './wishListEmpty/WishListEmpty';
import { WishListOpen } from '../../App';

const WishList = () => {
    const { wish, setWish } = useContext(WishListOpen);

    useEffect(() => {
        const storedWish = JSON.parse(localStorage.getItem('wish'));
        if (storedWish) {
          setWish(storedWish);
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