import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState, useEffect } from "react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import { useLocation } from 'react-router-dom';
import qs from "qs";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import FavorWhite from "../../assets/svg/favorWhite";

import styles from "./productSwiper.module.sass";
import { addWishList } from "../../redux/wishSlice/wishSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductSwiper = ({images, imageOne, imageTwo, imageThree, imageFour}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
  const [isBlanker, setIsBlanket] = useState(window.innerWidth < 800);
  const location = useLocation();
  const [isActive, setisActive] = useState();
  const wish = useSelector(state => state.wish.wish);
  const dispatch = useDispatch();

  const addProduct = () => {
    const id = qs.parse(location.search.substring(1)).id;
    dispatch(addWishList(id));
  }
  
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
          <img src={imageOne} alt="photo"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={imageTwo} alt="photo"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={imageThree} alt="photo"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={imageFour} alt="photo" />
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
            <img src={imageOne}  alt="photo"/>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={imageTwo}  alt="photo"/>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={imageThree}  alt="photo"/>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={imageFour} alt="photo" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSwiper;
