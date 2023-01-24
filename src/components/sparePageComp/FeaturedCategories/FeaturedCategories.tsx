import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useSelector } from "react-redux";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import styles from "./FeaturedCategories.module.css";
const FeaturedCategories = () => {
  const AppData = useSelector((state: any) => state.data[0]);

  return (
    <div className={styles["Feat-categories"]}>
      <div className="container">
      <div className={`${styles["content"]}`}>

   
        <h4>Featured Categories</h4>
        <span>specifically curated for you</span>
  
      <div className={`${styles["slider-box "]}`}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={6}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {AppData &&
            AppData[0].FeaturedCategories?.map((data: any, i: number) => (
              <SwiperSlide>
                <div className={styles["card-body"]}>
                  <div className={styles["text-color-red"]}>{data.text}</div>
                  <hr className={styles["line"]} />
                  <div className={styles["text-color"]}>{data.name}</div>
                  <img
                    src={data.image}
                    alt="img"
                    style={{ width: "40%", height: "40%" }}
                    className={styles["image-box"]}
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        </div>
        </div>
        </div>
    </div>
  );
};

export default FeaturedCategories;
