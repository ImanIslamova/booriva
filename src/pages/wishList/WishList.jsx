
import '../../index.css';

import Title from '../../components/title/Title';
import Advantages from './advantages/advantages';
import WishListComplete from './wishListComplete/WishListComplete';
import WishListEmpty from './wishListEmpty/WishListEmpty';


const WishList = () => {
   
    return (
        <div className='wrapper'>
        <Title title = 'Список желаний' subtitle = 'Твой тайный список желаний' />

        <WishListComplete />       
        {/* <WishListEmpty /> */}
        <Advantages />
           
        </div>
    )
}

export default WishList;