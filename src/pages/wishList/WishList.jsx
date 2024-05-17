

import Title from '../../components/title/Title';
import Advantages from './advantages/advantages';
import WishListComplete from './wishListComplete/WishListComplete';
import WishListEmpty from './wishListEmpty/WishListEmpty';
import qs from 'qs';

const WishList = () => {
    const wish = localStorage.getItem('wish') ? JSON.parse(localStorage.getItem('wish')) : [];
    return (
        <div className='wishList wrapper'>
            <Title title = 'Список желаний' subtitle = 'Твой тайный список желаний' />
            {localStorage.getItem('wish') ? <WishListComplete wish={wish} /> : <WishListEmpty /> }
            <Advantages />
        </div>
    )
}

export default WishList;