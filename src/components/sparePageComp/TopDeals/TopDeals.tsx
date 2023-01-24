import React from "react";
import { useSelector } from "react-redux";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./TopDeals.module.css";
const TopDeals = () => {
  const AppData = useSelector((state: any) => state.data[0]);
  return (
    <div className="container">
      <h4>Top Deals for you</h4>
      <div className={styles["topdeal-div"]}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={200}
          slidesPerView={5}
        
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {AppData &&
            AppData[0].TOPDEALS?.map((data: any, i: number) => (
              <SwiperSlide>
                <div className={styles["card-body"]}>
                  <div className={styles["topdeal-head"]}>{data.head}</div>
                  <div>
                    <img
                      src={data.image}
                      alt="img"
                      style={{ width: "60%", height: "70%" }}
                      className={styles["topdeal-image"]}
                    />
                  </div>
                  <div className={styles["topdeal-rating"]}>{data.rating}</div>

                  <div className={styles["topdeal-name"]}>{data.name}</div>
                  <div className={styles["topdeal-desc"]}>
                    {data.description}
                  </div>
                  <div>
                        <span className={styles["topdeal-price"]}>{data.originalPrice}</span>
                        <span className={styles["topdeal-off"]}>{data.off}</span>
                        <button className={styles["topdeal-button"]}>Add</button>
                        
                 </div>
            
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopDeals;
