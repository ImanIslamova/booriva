import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductData } from "../../services/product";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import ProductSwiper from "../../components/productSwiper/ProductSwiper";
import Characteristics from "./characteristics/Characteristics";
import { setCart } from "../../redux/cartSlice/cartSlice";

import styles from "./productPage.module.sass";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const [imageOne, setImageOne] = useState([]);
  const [imageTwo, setImageTwo] = useState([]);
  const [imageThree, setImageThree] = useState([]);
  const [imageFour, setImageFour] = useState([]);
  const [size, setSize] = useState([]);
  const cart = useSelector(state => state.cart.cart)
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch()

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
        dispatch(setCart([...cart, id]))
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
