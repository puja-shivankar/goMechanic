
import styles from "./milesFc.module.css";
import CountUp from "react-countup";

export function MilesFc() {


    return (
        <>
            <div className={styles["mile-fc"]}>
                <div className={styles["content"]}>
                    <span className={styles["save"]}>Save Upto</span>
                    <div className={styles["rate"]}>
                        <span style={{ fontSize: "32px", padding: "0.4em" }}>₹</span>
                        <span style={{ width: "fit-content", fontSize: "35px" }}><CountUp end={20700} /></span>
                    </div>
                </div>
                <p className={styles["mile-p"]}>Annually on your Maruti Suzuki WagonR</p>
                <div className={styles["mile-card"]}>
                    <div className={styles["card-content"]}>
                        <p className={styles["mile-data"]}>Extra Discounts on 100+ Services</p>

                        <ul className={styles["mile-list"]}>
                            <li>Upto 25% Extra Off</li>
                            <li>12 Months Validity</li>
                        </ul>

                    </div>
                    <div className={styles["card-content"]}>
                        <p className={styles["mile-data"]}>Free Road Side Assistance</p>

                        <ul className={styles["mile-list"]}>
                            <li>2 Free SOS Services</li>
                            <li>Discounts on 1000+ Accessories</li>
                        </ul>

                    </div>
                </div>
            </div>
            <p className={styles["last-p"]}>17380 users have joined Miles last week</p>
        </>
    );
}