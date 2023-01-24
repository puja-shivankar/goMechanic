import * as React from "react";
import styles from "./KeySpecs.module.css";
import { Dash_saperator } from "../../reusable/dash-saperator/Dash_saperator";

import { Grid } from "@mui/material";

export default function Key_Specs({ data }: any) {
  return (
    <>
      <div style={{ marginTop: "2em" }}>
        <h3 className="">Key Specs of Honda Amaze CNG</h3>
        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          columnSpacing={{ md: 0 }}
          rowSpacing={{ md: 3 }}
          columns={{ xs: 4, sm: 4, md: 12 }}
        >
          <div className="d-flex mt-4">
            {data.map((data: any, i: number) => (
              <table className={styles["key-table"]}>
                <tbody className={styles["key-table-tbody"]}>
                  <tr className={`${styles["key-table-tr"]}`}>
                    <th className={styles["key-table-th"]}>
                      {/* <div style={{ width: "50%", height: "50px" }}> */}
                      <img
                        className={styles["key-img"]}
                        src={data.Image}
                        alt="img"
                        style={{ width: "1.7em", height: "2em" }}
                      />
                      {/* </div> */}
                    </th>
                    <td className={styles["key-title"]}>{data.title}</td>
                    <td className={styles["key-caption"]}>{data.caption}</td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
        </Grid>
      </div>
      <Dash_saperator />
    </>
  );
}
