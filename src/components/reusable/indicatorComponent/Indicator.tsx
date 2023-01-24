import React from "react";
import styles from "./Indicator.module.css";

import Grid from "@mui/material/Grid";
import Slider from "react-slick";
import { Dash_saperator } from "../dash-saperator/Dash_saperator";

export default function Indicator({ data }: any) {
  const settings = {
    dots: true,
    // infinite: true,
    autoplaySpeed: 1500,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className={styles["feedback-main"]}>
      {/* {data.map((data1: any, i: number) => ( */}
      <>
        <h4>{data.header}</h4>
        <Slider {...settings} autoplay>
          {data.content.map((data: any, i: number) => (
            <Grid item xs={2} sm={4} md={3} key={i}>
              <div className={styles["feedback"]}>
                <img
                  src="socialMedia/invertedComma.png"
                  className={styles["comma"]}
                />
                <div className="card-body">
                  <h5 className={styles["feedback-title"]}>{data.title}</h5>

                  <p className={styles["feedback-info"]}>{data.info}</p>
                  <div className={styles["feedback-icon"]}>
                    <div style={{ width: "50vh" }}>
                      <div className="row">
                        <div className="col-3">
                          <img
                            src={data.icon}
                            alt="img"
                            style={{ width: "80%", marginLeft: "2em" }}
                          />
                        </div>
                        <div className="col-7 mt-3">
                          <div
                            className={styles["feedback-name"]}
                            style={{ marginLeft: "-2em" }}
                          >
                            {data.name}
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className={styles["feedback-socialName"]}>
                          {data.socialName}
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr
                    style={{
                      color: "gray",
                      maxWidth: "28em",
                      position: "relative",
                      alignmentBaseline: "central",
                    }}
                  />
                  <div className={styles["feedback-name"]}>
                    <h6 className={styles["workshop-name"]}>
                      {data.workShopTitle}
                    </h6>
                    <p className={styles["feedback-workshop"]}>
                      {data.workShop}
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Slider>
      </>
      {/* ))} */}
      <Dash_saperator />
    </div>
  );
}
