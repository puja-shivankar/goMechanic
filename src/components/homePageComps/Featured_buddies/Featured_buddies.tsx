import React from "react";
import styles from "./Featured.module.css";
import StarIcon from "@mui/icons-material/Star";
import Grid from "@mui/material/Grid";
import Rating from '@mui/material/Rating';
import Slider from "react-slick";
import { Dash_saperator } from "../../reusable/dash-saperator/Dash_saperator";
import { featured } from "./featured";

export default function Featured_buddies() {
  const settings = {
    dots: true,
    // infinite: true,
    autoplaySpeed: 1500,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div>
      {featured.map((data1: any, i: number) => (
        <>
          <h3>{data1.header}</h3>
          <Slider {...settings} autoplay>
            {data1.content.map((data: any, i: number) => (
              <Grid item xs={2} sm={4} md={3} key={i}>
                <div className={styles["feedback-main"]}>
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        className={styles["featured-img"]}
                        src={data.icon}
                        alt="img"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="col-md-6">
                      <h5 className={styles["featured-title"]}>{data.title}</h5>
                      <div style={{}}>
                        {/* {data.star.map(() => ( */}
                        <Rating name="half-rating" defaultValue={2.9} precision={0.5} size="small" readOnly />
                        {/* ))} */}
                      </div>
                      <ul className="">
                        {data.bullets.map((item: any) => (
                          <div>
                            <li className={styles["featured-li"]}>
                              <span>{item}</span>
                            </li>
                          </div>
                        ))}{" "}
                      </ul>
                    </div>
                  </div>
                  <div className={styles["featured-fix"]}>
                    <p className={styles["featured-info"]}>{data.info}</p>
                  </div>
                </div>
              </Grid>
            ))}
          </Slider>
        </>
      ))}
      <Dash_saperator />
    </div>
  );
}
