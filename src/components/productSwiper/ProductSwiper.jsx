import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState, useEffect } from "react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import styles from "./productSwiper.module.sass";

const ProductSwiper = ({images, imageOne, imageTwo, imageThree, imageFour}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
  const [isBlanker, setIsBlanket] = useState(window.innerWidth < 800);

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
        {/* {images.map(({item}) => {
          return (
            <SwiperSlide className={styles.bigSlide}>
              <img src={item} />
            </SwiperSlide>
          )  })} */}

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
