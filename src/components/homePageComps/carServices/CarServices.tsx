import React from "react";

import { Grid } from "@mui/material";
import styles from "./carServices.module.css";
import { useSelector } from "react-redux";
import { Dash_saperator } from "../../reusable/dash-saperator/Dash_saperator";
const CarServices = ({ cityName }: any) => {
  const AppData = useSelector((state: any) => state.data[0]);

  return (
    <div id="our-services">
      <h3>Car Services Available In {cityName}</h3>
      <p className={styles["heading-data"]}>
        Get Affordable and hassle-free periodic car service,car repair,wheel
        care services, Cashless insurance services claim and much more in Queen
        of Deccan Pune.
      </p>

      <Grid
        container
        spacing={{ xs: 1, md: 3 }}
        columnSpacing={{ md: 0 }}
        rowSpacing={{ md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {AppData &&
          AppData[0].CarServicesData?.map((data: any, i: number) => (
            <Grid item xs={4} sm={4} md={3} key={i}>
              <div className={styles["car-service"]}>
                <img
                  src={data.image}
                  alt="img"
                  style={{ width: "50%", height: "50%" }}
                />
                <div className="mt-2">{data.name}</div>
              </div>
            </Grid>
          ))}
      </Grid>
      {/* ))} */}
      <Dash_saperator />
    </div>
  );
};

export default CarServices;
