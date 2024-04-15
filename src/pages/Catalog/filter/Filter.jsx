import { useState } from 'react';

import styles from './filter.module.sass';

import Title from '../../../components/title/Title';
import FilterName from './filterName/FilterName';
import FilterList from './filterList/FilterList';
import Product from '../../../components/product/Product';

import banner from '../../../assets/images/bannerCatalog.png';
import image from '../../../assets/images/bomber.png'

const Filter = () => {
    const [filterCategory, setFilterCategory] = useState([{id: '01', title: 'Платья'}, 
        {id: '02', title: 'Верх'}, 
        {id: '03', title: 'Низ'}, 
        {id: '04', title: 'Мелочи'},
        {id: '05', title: 'Костюмы'}, 
]);
    const [products, setProduct] = useState([{id: '001', description: 'Свитшот вставка клетка', price: '1 099 ₽', photo: image}, 
        {id: '002', description: 'Платье позрачное в цветочек черное', price: '1 299 ₽', photo: image},
        {id: '003', description: 'Бомбер Gone Crazy хаки', price: '2 499 ₽', photo: image},
        {id: '004', description: 'Бомбер Gone Crazy хаки', price: '2 499 ₽', photo: image},
    ]); 
    return (
        <div className={styles.catalog}>
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
            <div className={styles.rightBlock}> 
                <div className={styles.banner}>
                    <img src={banner} />
                </div>
                <div className={styles.products}>
                    {products.map(({description, price, photo}) => {
                        return (
                            // <div className={styles.productWrap}>
                                <Product description = {description} price = {price} photo={photo}/>
                            // </div>
                        )
                    })}

                </div>

            </div>
            
        </div>
    )
}

export default Filter;