import { useState } from 'react';

import styles from './advantage/advantage.module.sass';
import Advantage from './advantage/Advantage';
import cat from '../../../assets/svg/cat.svg';
import fly from '../../../assets/svg/fly.svg';
import heart from '../../../assets/svg/heart.svg';


const Advantages = () => {
    const [advantages, setAdvantage] = useState([{id: '001', title: 'Отправка день в день', subtitle: 'При заказе до 18:00', photo: cat}, 
    {id: '002',  title: 'Легкий возврат/обмен', subtitle: 'В течение 14 дней', photo: fly},
    {id: '003',  title: 'Сделано в России', subtitle: 'Прям в Грозном', photo: heart},
]);
    return (
        <div className={styles.advantages}>
            {advantages.map(({title, subtitle, photo, id}) => {
                return <Advantage title = {title} subtitle = {subtitle} photo={photo} key={id} />
            })}
        </div>
    )
}

export default Advantages;