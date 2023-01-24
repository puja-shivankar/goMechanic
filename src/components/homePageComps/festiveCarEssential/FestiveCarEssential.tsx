import React from "react";
import { festive } from "../../reusable/serviceModal/carBrands";
import { Grid } from "@mui/material";
import styles from "./FestiveCarEssential.module.css";
import { Dash_saperator } from "../../reusable/dash-saperator/Dash_saperator";

const FestiveCarEssential = () => {
  return (
    <>
      <div className="mt-4" id="monsoon-mist">
        <h2>Festive Car Essential</h2>
        <div className="row mt-4">
          <div className={`${styles["custom-card"]} col-md-1`}>
            <img src="images/Festive Car Inspection/uci.jpg"></img>
          </div>
          <div className={`${styles["custom-card"]} col-md-1`}>
            <img src="images/Festive Car Inspection/RSA service.jpg"></img>
          </div>
          <div className={`${styles["custom-card"]} col-md-1`}>
            <img src="images/Festive Car Inspection/Festive 360.jpg"></img>
          </div>
          <div className={`${styles["custom-card"]} col-md-1`}>
            <img src="images/Festive Car Inspection/Ac Service repair.jpg"></img>
          </div>
        </div>
      </div>
      <Dash_saperator />
    </>
  );
};

export default FestiveCarEssential;
