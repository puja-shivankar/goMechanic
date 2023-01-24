import styles from "./Footer.module.css";
export const FooterEnd = ({ data }: any) => {
  return (
    <div className={styles["footer-last"]}>
      <div className={`${styles["div-content"]} row m-0`}>
        <div className={`${styles["first-div"]} col-4 p-0 m-0`}>
          <img
            src="images/footer/WHITE.png"
            alt="img"
            style={{ width: "45%", height: "15%" }}
            className={`${styles["img-size"]} mt-5 `}
          />
          {data.map((data: any, i: any) => (
            <>
              <p className={`${styles["para"]} col-10 `}>
                {data.text}
                {data.text2}
              </p>
              <div className={`${styles["image-box"]} d-flex `}>
                {data.sub &&
                  data.sub.map((item: any, i: any) => (
                    <img
                      src={item.image}
                      alt="img"
                      className={styles["image-data"]}
                    />
                  ))}
              </div>
            </>
          ))}
        </div>
        <div className="col-4 p-0">
          <div className="mt-5">
            {data.map((data: any, i: any) => (
              <div className="row">
                <div className={`${styles["para"]} col-6 `}>
                  <img
                    src={data.image}
                    alt="img"
                    className={`${styles["image-data"]} d-inline`}
                  />
                  <span> {data.name}</span>
                </div>
                <div className={`${styles["para-2"]} col-6 `}>
                  <span> {data.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-4 p-0">
          <div className={`${styles["image-position"]}`}>
            <img
              src="images/footer/appstore.png"
              alt="img"
              style={{ width: "60%", height: "24%" }}
            />
            <br />
            <br />
            <img
              src="images/footer/playstore.png"
              alt="img"
              style={{ width: "60%", height: "24%" }}
            />
            footer-text
          </div>
        </div>
      </div>
      {/* <div className={styles[""]}>
      {FooterEndData.map((data: any,i: any)=>(
       <span >{data.text3}</span>
      ))}
     </div> */}
    </div>
  );
};
