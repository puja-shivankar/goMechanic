import { Card } from "@mui/material";
import styles from "./PackageCard.module.css";
import { PackageCardData } from "../../servicePriceComp/serviceTypes/periodic/data";
import { useEffect, useState } from "react";
import EngineModal from "../../servicePriceComp/serviceTypes/periodic/engineModal/EngineModal";
import { useDispatch, useSelector } from "react-redux";
import {
  AddCheckoutData,
  RemoveServiceData,
  SetIsBtnActive,
} from "../../../redux-store/action";
export const PackageCard = ({ data, ...rest }: any) => {
  const [open, setOpen] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [listCount, setListCount] = useState(5);
  const [showMore, setShowMore] = useState(true);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const checkoutData = useSelector((state: any) => state.checkout);
  const AppData = useSelector((state: any) => state.data[0]);

  const dispatch = useDispatch();
  const [rowItem, setRowItem] = useState({
    id: "",
    title: "",
    type: "",
    code: "",
    price: 0,
    originalPrice: 0,
    totalPrice: 0,
  });
  const [totalPrice, setTotalPrice] = useState(0);
  // useEffect(() => {
  //   const totalPrice =
  //     Math.round(data.price - data.price * (data.discount / 100)) +
  //     rowItem.price;
  //   setRowItem({ ...rowItem, totalPrice: totalPrice });
  // }, [totalPrice, rowItem.price]);
  useEffect(() => {
    if (isItemAdded) dispatch(AddCheckoutData(rowItem));
  }, [isItemAdded]);
  const viewItemsHandeler = (data: any) => {
    setListCount(data.bullets.length);
    setShowMore(false);
  };
  useEffect(() => {
    if (isItemAdded) console.log(AppData[0].PackageCardData);
  }, [isItemAdded]);
  const firstHandler = () => {
    setOpen(!open);
  };

  const secondHandler = (title1: any) => {
    console.log("yes");
    const totalPrice =
      Math.round(data.price - data.price * (data.discount / 100)) +
      rowItem.price;
    setRowItem({
      ...rowItem,
      id: data.title,
      title: data.title,
      originalPrice: data.price,
      type: data.type,
      code: data.code,
      price: data.price,
      totalPrice: totalPrice,
    });
    setIsItemAdded(true);

    dispatch(SetIsBtnActive([data.title, rest.type]));
    setAddedToCart(true);
    console.log(rest.rawData.content[0].isAddedToCart);
    if (checkoutData) console.log(checkoutData);
    // dispatch(AddCheckoutData(rowItem));
    console.log(rowItem);
  };

  return (
    <>
      <Card
        className={`${styles["card-container"]} rounded-0 shadow-none border`}
      >
        <div className="d-flex ">
          <div>
            <img
              src={data.cardImage}
              alt="basic-service"
              className={styles["card-image"]}
            />
          </div>

          <div className={styles["service-data"]}>
            <div className="d-flex justify-content-between">
              <h5>{data.title}</h5>
              <div className={styles["time-taken"]}>
                <img src="images/servicePage/clock.svg" /> Takes{" "}
                {data.timeTaken} Hours
              </div>
            </div>

            <div className={styles["service-desc"]}>{data.desc}</div>
            <div>
              <ul className="list-unstyled card-columns">
                {data.bullets.slice(0, listCount).map((item: any) => (
                  <div>
                    <li className={`${styles["bullet-points"]} mb-2`}>
                      <img src={data.icon} alt="img" />
                      <span className={styles.bullet}>{item}</span>
                    </li>
                  </div>
                ))}{" "}
                {showMore && data.bullets.length > 5 && (
                  <div
                    onClick={() => viewItemsHandeler(data)}
                    className={styles["show-more"]}
                  >
                    +{data.bullets.length - 5} more View All
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <span>
              <s>{`Rs ${data.price}`}</s>
            </span>
            <span className="mx-4 font-weight-bold">{`₹  ${Math.round(
              data.price - data.price * (data.discount / 100)
            )}`}</span>
          </div>
          <div>
            {!addedToCart ? (
              <button
                className="btn btn-outline-danger rounded-0"
                onClick={
                  rest.header == "Scheduled Packages"
                    ? // ? rest.onClickHandler
                      firstHandler
                    : () => secondHandler(data.title)
                }
              >
                + ADD TO CART
              </button>
            ) : (
              <div className={styles["added-tocart"]}>
                <img src="images/servicePage/tickIcon.svg" />
                <span>Added To Cart</span>
              </div>
            )}
          </div>
        </div>
      </Card>
      {open && (
        <EngineModal
          open={open}
          setOpen={firstHandler}
          data={data}
          setAddedToCart={setAddedToCart}
        />
      )}
    </>
  );
};
