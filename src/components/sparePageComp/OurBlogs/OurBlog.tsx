import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useSelector } from "react-redux";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import styles from "./OurBlog.module.css";
const OurBlog = () => {
  const AppData = useSelector((state: any) => state.data[0]);

  return (
    <div className="container">
      <div>
   
      <h4> From Our Blog</h4>
   
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {AppData &&
            AppData[0].OurBlog?.map((data: any, i: any) => (
              <SwiperSlide>
                <div className={styles["feat-body"]}>
                 
                  <img
                    src={data.image}
                    alt="img"
                    style={{ width: "100%", height: "100%" }}
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

export default OurBlog;

