import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState, useEffect, useContext } from "react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import { useLocation } from 'react-router-dom';
import qs from "qs";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import FavorWhite from "../../assets/svg/favorWhite";
import { WishListOpen } from "../../App";


import styles from "./productSwiper.module.sass";

const ProductSwiper = ({images, imageOne, imageTwo, imageThree, imageFour}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
  const [isBlanker, setIsBlanket] = useState(window.innerWidth < 800);
  const location = useLocation();
  const [isActive, setisActive] = useState();
  const { wish, setWish, addWishList } = useContext(WishListOpen);

  const addProduct = () => {
    const id = qs.parse(location.search.substring(1)).id;
    addWishList(id);
  }
  // const addWishList = () => {
  //   if (location.search){
  //     const id = qs.parse(location.search.substring(1)).id;
  //     const wish = localStorage.getItem('wish') ? JSON.parse(localStorage.getItem('wish')) : [];
  //     localStorage.setItem('wish', JSON.stringify([...wish, id]));
  //     setisActive(prev => !prev);
  //   }
  // }

  // const addWishList = () => {
  //   if (location.search){
  //     const id = qs.parse(location.search.substring(1)).id;
  //     if (wish.includes(id)) {
  //         setWish(wish.filter(wishId => wishId !== id));
  //     } else {
  //     console.log(id);
  //     // const id = qs.parse(location.search.substring(1)).id;
  //     // const wish = localStorage.getItem('wish') ? JSON.parse(localStorage.getItem('wish')) : [];
  //     localStorage.setItem('wish', JSON.stringify([...wish, id]));
  //     setisActive(prev => !prev);

  //     setWish(localStorage.getItem('wish') ? JSON.parse(localStorage.getItem('wish')) : []);
  //   }}
  // }
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsBlanket(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <div className={styles.productSwiper}>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#FDA3C4",
          "--swiper-pagination-bullet-inactive-color": "#fff",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-border-color": "#000",
          height: "100%",
        }}
        spaceBetween={10}
        navigation={true}
        pagination={isMobile ? true : false}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Pagination, Thumbs]}
        className="mySwiper2"
      >
        <div className={styles.favor_container} onClick={addProduct}>
            <FavorWhite isActive={isActive} />
          </div>
        <SwiperSlide className={styles.bigSlide}>
          <img src={imageOne} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={imageTwo} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={imageThree} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={imageFour} />
        </SwiperSlide>
      </Swiper>
      <div className={styles.miniSwiperWrap}>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          direction={isBlanker ? "horizontal" : "vertical"}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={`${styles.miniSwiper} mySwiper`}
        >
          <SwiperSlide className={styles.slide}>
            <img src={imageOne} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={imageTwo} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={imageThree} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={imageFour} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSwiper;
