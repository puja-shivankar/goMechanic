import { Grid } from "@mui/material";
import React from "react";
import styles from "./BigData.module.css";

import { Dash_saperator } from "../../reusable/dash-saperator/Dash_saperator";
export const BigData = ({ data }: any) => {
    return (
        <div>
            {/* {data.map((data: any, i: number) => ( */}
            <>
                <h3 className={styles["heading-data"]}>{data.MainHeading}</h3>
                <div className={styles["choose-container"]}>
                    {data.content.map((data: any, i: any) => (
                        <div>
                            <strong className={styles["Title"]}>{data.heading}</strong>

                            <p className={styles["line-data"]}>{data.para}</p>
                            {data.sub &&
                                data.sub.map((item: any, i: any) => (
                                    <div className={styles["choose"]}>
                                        <strong className={styles["Title"]}>{item.subheading}</strong>

                                        <p className={styles["line-data"]}>{item.para}</p>
                                    </div>
                                ))}
                        </div>
                    ))}
                </div></>
            {/* ))} */}


            <Dash_saperator />
        </div>
    );
};
