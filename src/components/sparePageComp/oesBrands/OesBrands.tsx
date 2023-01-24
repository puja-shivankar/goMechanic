import React from "react";
import { useSelector } from "react-redux";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./OesBrands.module.css";

export const OesBrands = () => {
  const AppData = useSelector((state: any) => state.data[0]);

  return (
    <div className="container">
      <div className={styles["oem-box"]}></div>
        <h4 className={styles["slider-box"]}> Our Trusted OES Brands</h4>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={6}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {AppData &&
            AppData[0].OESBrands?.map((data: any, i: number) => (
              <SwiperSlide>
                <div className={styles["oes-body"]}>
                  <div className={styles["text-color-red"]}>{data.text}</div>

                  <div className={styles["text-color"]}>{data.name}</div>
                  <img
                    src={data.image}
                    alt="img"
                    style={{ width: "80%", height: "80%" }}
                    className={styles["image-box"]}
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};
