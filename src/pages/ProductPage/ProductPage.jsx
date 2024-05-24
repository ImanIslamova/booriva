import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductData } from "../../services/product";
import qs from "qs";

import styles from "./productPage.module.sass";

import ProductSwiper from "../../components/productSwiper/ProductSwiper";
import Characteristics from "./characteristics/Characteristics";

const ProductPage = ({cart, setCart}) => {
  const [product, setProduct] = useState([]);
  const [imageOne, setImageOne] = useState([]);
  const [imageTwo, setImageTwo] = useState([]);
  const [imageThree, setImageThree] = useState([]);
  const [imageFour, setImageFour] = useState([]);
  const [size, setSize] = useState([]);
  const navigate = useNavigate();

  const location = useLocation();
  useEffect(() => {
    if (location.search) {
      const data = getProductData(qs.parse(location.search.substring(1)).id);
      data.then((res) => {
       setProduct(res);
       setImageOne(res.images[0]);
       setImageTwo(res.images[1]);
       setImageThree(res.images[2]);
       setImageFour(res.images[3]);
      })
    } else {
      navigate('/');
    }
   
  }, [location]);
  const addProductInCart = () =>{
    if (location.search) {
      const id = qs.parse(location.search.substring(1)).id;
      if(!cart.includes(id)){
        setCart([...cart, id])
      }
    }
  }
  return (
    <div className={`${styles.productPage} wrapper`}>
      <div className={styles.mainFlex}>
        <div className={styles.swipe}>
          <ProductSwiper images={product.images} imageOne={imageOne} imageTwo={imageTwo} imageThree={imageThree} imageFour={imageFour} />
        </div>
        <div className={styles.characteristics}>
          <Characteristics addProductInCart={addProductInCart}  name={product.name} price={product.price} details={product.details} desc={product.desc} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
