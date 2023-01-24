import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./SpareForm.module.css";
const SpareForm = () => {
  const AppData = useSelector((state: any) => state.data[0]);
  const [manufacture, setManufacture] = useState();
  const [modal, setModal] = useState();
  const [yearrange, setYearRange] = useState();
  const [variant, setVariant] = useState();



  function manufactureHandler(e: any) {
    setManufacture(e.target.value);
  }

  function modalHandler(e: any) {
    setModal(e.target.value);
  }

  function yearRangeHandler(e: any) {
    setYearRange(e.target.value);
  }
  function variantHandler(e: any) {
    setYearRange(e.target.value);
  }
  // const []

  // useEffect(() => {
  //   setManufacture(manufacture);
  // }, []);

  return (
    <div className="container">
      <h1 className={styles["font-size"]}>Find the right Spare Parts</h1>
      <form>
        <div className={`${styles["form-box"]} row`}>
          <div className={`${styles["dropdown"]}  col-2`}>
            <select
              className={`${styles["sel"]} form-control`}
              onChange={manufactureHandler}
            >
              <option selected>Select Manufacture</option>
              {AppData &&
                AppData[0].Selectmenu?.map((data: any, i: number) => {
                  // console.log(data.id);
                  return (
                    <option key={i} value={data.id}>
                      {data.name}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className={`${styles["dropdown"]}  col-2`}>
            <select
              className={`${styles["sel"]} form-control`}
              onChange={modalHandler}
              disabled={manufacture ? false : true}
            >
              <option selected>Select Model</option>
              {AppData &&
                AppData[0].selectModel?.map(
                  (data: any, i: number) => (
                    <option key={i} value={data.value}>
                      {data.name}
                    </option>
                  )
                )}
            </select>
          </div>
          <div className={`${styles["dropdown"]} col-2`}>
            <select
              className={`${styles["sel"]} form-control`}
              onChange={yearRangeHandler}
              disabled={modal ? false : true}
            >
              <option selected>Select Year Range</option>
              {AppData &&
                AppData[0].yearRange?.map((data: any, i: number) => (
                  <option key={i} value={data.value}>
                    {data.name}
                  </option>
                ))}
            </select>
          </div>
          <div className={`${styles["dropdown"]} col-2`}>
            <select
              className={`${styles["sel"]} form-control`}
              onChange={variantHandler}
              disabled={yearrange ? false : true}
            >
              <option selected>Select Variant</option>
              {AppData &&
                AppData[0].varient?.map((data: any, i: number) => (
                  <option key={i} value={data.value}>
                    {data.name}
                  </option>
                ))}
            </select>
          </div>
          <button
            className={`${styles["search-btn"]}`}
            disabled={variant ? false : true}
            role="button"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SpareForm;
