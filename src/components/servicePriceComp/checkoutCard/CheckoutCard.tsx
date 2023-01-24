import React, { useEffect } from "react";
import { Card } from "@mui/material";
import styles from "./Checkout.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  RemoveCheckoutRow,
  RemoveServiceData,
} from "../../../redux-store/action";
export const CheckoutCard = ({ selectedCar }: any) => {
  // const checkoutData = useSelector((state: any) => state.checkout);
  const checkoutData = useSelector((state: any) => state.checkout);
  const dispatch = useDispatch();
  const subTotal = checkoutData.reduce((a: any, b: any) => {
    return a + b.totalPrice;
  }, 0);
  return (
    <div className={styles["checkout-container"]}>
      <Card
        className={styles["checkout-card"]}
        sx={{ boxShadow: 12, borderRadius: 0 }}
      >
        <div className="text-center">
          <img src={selectedCar.img} alt="img" />
        </div>
        <div className="d-flex justify-content-between mx-2">
          <div className="d-flex">
            <h5 className="mx-2">
              {selectedCar.brand} {selectedCar.model}
            </h5>
            <span>{selectedCar.fuel} </span>
          </div>
          <span className="">CHANGE</span>
        </div>
        <hr />
        {Object.keys(checkoutData).length === 0 ? (
          <div className={styles.trolly}>
            <img
              src="images/servicePage/checkoutCard/trolly.svg"
              alt="trolly"
            />
            <p className="mt-2">Go ahead and book a service for your car.</p>
          </div>
        ) : (
          <>
            <div className={styles["row-container"]}>
              {checkoutData &&
                checkoutData?.map((data: any) => (
                  <>
                    <div className={styles["item-row"]}>
                      <div className="d-flex flex-column">
                        <span className={styles["item-row-title"]}>
                          {data.title}
                        </span>
                        <div className={styles["type-code"]}>
                          <span className="me-2">{data.code}</span>
                          <span>{data.type}</span>
                        </div>
                      </div>
                      <div>
                        <span className="mx-2">
                          <s>₹ {data.originalPrice} </s>
                        </span>
                        <span>₹{data.totalPrice}</span>
                        <span
                          className="mx-2"
                          onClick={() =>
                            dispatch(RemoveCheckoutRow(data.title))
                          }
                        >
                          <img src="images/servicePage/checkoutCard/cancel.svg" />
                        </span>
                      </div>
                    </div>
                    <hr className={styles["item-hr"]} />
                  </>
                ))}
            </div>
            <div className={styles["subTotal"]}>
              <h5 className="d-flex justify-content-between">
                <span>Subtotal ({checkoutData.length} Items)</span>{" "}
                <span>₹{subTotal}</span>
              </h5>

              <p>Extra charges may apply </p>
              <div className={styles["checkout-btn"]}>
                <span>₹{subTotal}</span>
                <span>CHECKOUT</span>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};
