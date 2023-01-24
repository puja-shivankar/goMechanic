import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, Grid } from "swiper";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { allSpareParts, allPosters, allSmallPosters } from "./spareData";
//
const FilledButton = ({ text, event }: any) => {
  return (
    <span className="filledButton" onClick={() => event && event()}>
      {text}
    </span>
  );
};
const FloatingSearch = ({ display }: any) => {
  return (
    <div className="floatingSearch" style={{ display }}>
      <span className="floatingRect"></span>

      <span>
        Find the part you need quickly and easily. Start your search now.
      </span>
      <div className="floatingSearchData">
        <span className="floatingDataHeading"> SEARCH TYPE</span>
        <span className="floatingDataHeading">EXAMPLE </span>
        <span>Part Number</span>
        <span> 22944BS739 </span>
        <span>Part Category </span>
        <span> Shock Absorber </span>
        <span>Part Category + Manufacturer </span>
        <span> Wiper Hyundai</span>
        <span>Part Category + Manufacturer + Model </span>
        <span> Brake Hyundia Verna</span>
      </div>
    </div>
  );
};

const PaginationSlider = () => {
  return (
    <div className="paginationSlider">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {allPosters.map((data: any, i: number) => {
          return (
            <span key={"slide" + i}>
              <SwiperSlide key={i}>
                <img src={data.icon} alt="sliderImage" />
              </SwiperSlide>
            </span>
          );
        })}
      </Swiper>
    </div>
  );
};

const PaginationSliderSmall = () => {
  return (
    <div className="container">
    <div className="smallPaginationSlider">
      <Swiper
        slidesPerView={4}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {allSmallPosters.map((data:any, i: any) => {
          return (
            <span key={"smallSlide" + i}>
              <SwiperSlide key={i}>
                <img
                  src={data.icon}
                  className="smallSliderImage"
                  alt="sliderImage"
                  style={{ width: "90%", height: "100%" }}
                />
              </SwiperSlide>
            </span>
          );
        })}
      </Swiper>
    </div>
    </div>
  );
};

const SpareParts = () => {
  return (
    <div className="container">
    <div className="spearParts">
      <span className="title">Search by Categories</span>
      <Swiper
        slidesPerView={6}
        grid={{
          rows: 2,
          fill: "row",
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
      >
        {allSpareParts.map((part, index) => {
          return (
            <SwiperSlide key={index}>
              <span className="singleSparePart" key={"spare" + index}>
                <span className="spearPartIcon">
                  {" "}
                  <img
                    src={part.icon}
                    className="spearPartImage"
                    alt="spearPart"
                  />
                </span>
                <span className="spearPartName"> {part.name}</span>
              </span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
    </div>
  );
};

export {
  FilledButton,
  FloatingSearch,
  PaginationSlider,
  PaginationSliderSmall,
  SpareParts,
};
