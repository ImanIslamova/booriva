import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import styles from './productSwiper.module.sass';

import image1 from "../../assets/images/hudi.jpg";
import image2 from "../../assets/images/bomber.png";
import image3 from "../../assets/images/dress.jpg";

const ProductSwiper = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className={styles.productSwiper}>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide className={styles.bigSlide}>
          <img src={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} />
        </SwiperSlide>
      </Swiper>
      <div className={styles.miniSwiperWrap}>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        direction={"vertical"}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={`${styles.miniSwiper} mySwiper`}
      >
        <SwiperSlide className={styles.slide}>
          <img src={image1}  />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img src={image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img src={image1} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img src={image2} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img src={image3}/>
        </SwiperSlide>
      </Swiper>
      </div>
    
    </div>
  );
};

export default ProductSwiper;
