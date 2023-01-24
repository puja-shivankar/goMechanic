import React from "react";

import { useSelector } from "react-redux";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SpareOffer.module.css";
export const SpareOffer = () => {
  const AppData = useSelector((state: any) => state.data[0]);

  return (
    <div className={styles["Feat-categories"]}>
      <div className="container">
        <h4> Offers</h4>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={6}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper: any) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {AppData &&
              AppData[0].SpareOffer?.map((data: any, i: number) => (
                <SwiperSlide>
                  <div className={styles["offer-body"]}>
                    <div className={styles["text-color-red"]}>{data.name}</div>
                    <div className={styles["text-image-container"]}>
                      <div className={styles["text-color"]}>
                        {data.description}
                       </div> 
                       <div className={styles["img-div"]}>
                        <img
                          src={data.image}
                          alt="img"
                          style={{ width: "70%", height: "50%" }}
                          className={styles["image-box"]}
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

          
          </Swiper>
        </div>
      </div>
    </div>
  );
};
