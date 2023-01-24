import Grid from "@mui/material/Grid";
import { Dash_saperator } from "../dash-saperator/Dash_saperator";
import CountUp from "react-countup";
import StarIcon from "@mui/icons-material/Star";
import styles from "./rating.module.css";
const RatingDiv = () => {
  return (
    <div className={styles["container"]} id="rating-reviews">
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 6, md: 12 }}
        className={styles["Benefit-data"]}
      >
        <div className={styles["font-style"]}>
          <span>
       
            <CountUp end={20000} />+
          </span>
          <br />
          <span className={styles["sub-text"]}>Cars Serviced</span>
        </div>
        <div className={styles["font-style"]}>
          <span>
            <CountUp end={200000} />+
          </span>
          <br />
          <span className={styles["sub-text"]}>Happy Customer</span>
        </div>
        <div className={styles["font-style"]}>
          <span>
            <CountUp end={4.7} className="mt-3" />
            <StarIcon />
          </span>
          <br />
          <span className={styles["sub-text"]}>Average Rating</span>
        </div>
        <div className={styles["font-style"]}>
          <span>
            <CountUp end={800} />+
          </span>
          <br />
          <span className={styles["sub-text"]}>Touch Point In India</span>
        </div>
      </Grid>
      <Dash_saperator />
    </div>
  );
};

export default RatingDiv;
