import React from "react";
import styles from "./blackDash.module.css";
const BlackDash = () => {
    return (
        <div className={styles["hr"]} style={{ color: "black" }}>

            <span><hr className={styles["hr-warning"]} /></span>
            <span><hr className={styles["hr-line"]} /></span>
        </div>

    );
}
export default BlackDash;