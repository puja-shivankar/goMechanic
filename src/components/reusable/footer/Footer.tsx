import React, { useEffect } from "react";
import styles from "./Footer.module.css";

export const Footer = ({ data }: any) => {


  return (
    <>
      <footer
        className={`${styles["my-footer"]} bg-light text-center text-lg-start `}
      >
        <div className={styles["start"]}>
          <div className={`${styles["row-content"]} row`}>
            {data &&
              data?.map((data: any, i: any) => (
                <>
                  <div className="col-lg-2 col-md-4 mb-4  mt-3 mb-md-0">
                    <h5 className={styles["main-head"]}>{data.head}</h5>
                    <br />

                    <ul className="list-unstyled mb-0">
                      {data.sub &&
                        data.sub.map((item: any, i: any) => (
                          <li className={styles["sub-link"]}>{item.name}</li>
                        ))}
                    </ul>
                  </div>
                </>
              ))}
          </div>
        </div>
      </footer>
    </>
  );
};
