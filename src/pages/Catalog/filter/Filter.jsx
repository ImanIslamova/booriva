import { useState } from 'react';

import styles from './filter.module.sass';

import Title from '../../../components/title/Title';
import FilterName from './filterName/FilterName';
import FilterList from './filterList/FilterList';

const Filter = () => {
    const [filterCategory, setFilterCategory] = useState([{id: '01', title: 'Платья'}, 
        {id: '02', title: 'Верх'}, 
        {id: '03', title: 'Низ'}, 
        {id: '04', title: 'Мелочи'},
        {id: '05', title: 'Костюмы'}, 
    ]);
    return (
        <div className={styles.filter}>
            <Title title='Верх' subtitle='Топы' />
            <div className={styles.titleWrap}>
                <FilterName title = 'Категории' />
            </div>
            <div className={styles.category}>
                {filterCategory.map(({title}) => {
                    return <FilterList title={title}/>
                })}
            </div>
        </div>
    )
}

export default Filter;