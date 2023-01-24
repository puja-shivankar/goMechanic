import React from "react";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import Grid from "@mui/material/Grid";
import { Dash_saperator } from "../dash-saperator/Dash_saperator";
import StarIcon from "@mui/icons-material/Star";
import styles from "./Reviews.module.css";

import { useState } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export function ReviewsService({ data }: any) {
  const [review, setReview] = useState(3);
  const [btn, setBtn] = useState(false);

  return (
    <>
      <div className="">
        {/* {data.map((data1: any, i: number) => ( */}
        <>
          <h3>{data.header}</h3>

          <Grid
            container
            // spacing={{ xs: 1, md: 3 }}
            columnSpacing={{ md: 0 }}
            rowSpacing={{ md: 0 }}
            columns={{ xs: 4, sm: 4, md: 12 }}
          >
            {data.content.slice(0, review).map((data: any, i: number) => (
              <div className={styles["reviews-main"]}>
                <div className="row">
                  <div className="col-md-1">
                    <img
                      className={styles["review-img"]}
                      src={data.Image}
                      alt="img"
                      style={{ width: "3em", height: "3em" }}
                    />
                  </div>

                  <div className="col-md-8">
                    <span className={styles["review-name"]}>
                      {data.title}
                    </span>
                    <div className="">
                      {data.star.map(() => (
                        <StarIcon color="warning" fontSize="small" />
                      ))}
                    </div>
                  </div>
                  <div className="col-md-3">
                    <p className={styles["public-time"]}> {data.time}</p>
                  </div>
                </div>
                <div>
                  <p className={styles["review-info"]}>{data.review}</p>
                </div>
              </div>
            ))}{" "}
          </Grid>
        </>
        {/* ))} */}
        <div className="mb-4 text-center">
          {!btn && (
            <>
              <span className={styles["seemore-seeless"]}>See More</span>
              <ArrowCircleDownIcon
                fontSize="medium"
                cursor="pointer"
                onClick={() => {
                  setReview(data.content.length);
                  setBtn(true);
                }}
                className={styles["see-more"]}
              ></ArrowCircleDownIcon>
            </>
          )}
          {btn && (
            <>
              <span className={styles["seemore-seeless"]}>See less</span>
              <ArrowCircleUpIcon
                cursor="pointer"
                onClick={() => {
                  setReview(3);
                  setBtn(false);
                }}
              ></ArrowCircleUpIcon>
            </>
          )}
        </div>

        <Dash_saperator />
      </div>
    </>
  );
}
