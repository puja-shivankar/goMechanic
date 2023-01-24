import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { Dash_saperator } from "../../reusable/dash-saperator/Dash_saperator";
import { WorkshopArray } from "../../reusable/serviceModal/carBrands";
import styles from "./Workshop.module.css";

const Workshop = () => {
  const AppData = useSelector((state: any) => state.data[0]);

  const settings = {
    loop: false,
    className: "center",
    // centerMode: true,
    infinite: false,
    centerPadding: "290px",
    slidesToShow: 3,
    speed: 300,
    rows: 1,
    slidesPerRow: 1,
  };
  return (
    <>
      <div className={`${styles["car-logo"]}`} id="curated-customer-service">
        <h2>Choose the Workshop Near You</h2>
        <p>Schedule a Pickup Today!</p>

        <Slider {...settings}>
          {WorkshopArray.map((data: any) => (
            //  <Carousel.Item  >
            <div className=" flex-column  text-center ">
              <div>
                <img
                  src={data.icon}
                  alt="icon"
                  style={{ width: "100%", height: "100%", padding: "10%" }}
                />
              </div>

              <span>{data.name}</span>
            </div>
          ))}
        </Slider>

        <Dash_saperator />
      </div>
    </>
  );
};

export default Workshop;
