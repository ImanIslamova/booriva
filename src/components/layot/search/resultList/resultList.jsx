
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getCatalogDataAll } from '../../../../services/catalog';
import qs from 'qs'
import Title from '../../../title/Title';
import Product from '../../../product/Product';

import styles from './resultList.module.sass'





const ResultList = ({}) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    
    const location = useLocation()


    useEffect(() =>{
        if(window.location.search){

            setIsLoading(true)

            getCatalogDataAll(qs.parse(window.location.search?.substring(1)).search).then((res) => {
                setIsLoading(false)
                setProducts(res)
            }
                           
            )
        }
    }, [location])


    return (

        <div className={styles.result}>
            <div className="wrapper">
                <Title title="Результати" subtitle="найдено 0 товаров" />
                <div className={styles.result_container}>
                    <div className={styles.result__items}>
                       {isLoading ? (
                        <div>
                           загрузка
                         </div>
                       ) : 
                    products.length > 0 && (
                            products?.map(({name, price, images, id}) => {
                               return (
                                   <div className={styles.productWrap} key={id}>
                                       <Product
                                           name={name}
                                           price={`${price} ₽`}
                                           photo={images[0]}
                                           widthImg={"100%"}
                                           heightImg={"121%"}
                                           link={`/product?id=${id}`}
                                           id={id}
                                           heart={true}
                                       />
                                   </div>
                               );
                           }) )}
                                             
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultList;