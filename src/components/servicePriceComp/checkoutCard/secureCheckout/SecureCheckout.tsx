import { Box } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";
import { AddAddress } from "./addAddress/AddAddress";
import { DateTime } from "./dateTime/DateTime";
import { PaymentOptions } from "./payment/PaymentOptions";
import { PhoneNumber } from "./phoneNumber/PhoneNumber";
import styles from "./SecureCheckout.module.css";
export const SecureCheckout = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const getLoggedInHandler = (data: any) => {
    console.log(data);
    setLoggedIn(data);
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {
        loading ? (
          <div className={styles["loader-style"]} >
            <PuffLoader
              className="text-center mt-5 "
              color={"hsla(0, 92%, 51%, 1)"}
              loading={loading}

              size={70}

            />
          </div >
        ) : (
          <>
            <Box
              boxShadow={3}
              sx={{ height: "5.5em" }}
              className={styles["checkout-header"]}
            >
              <div className={styles["checkout-headerDesc"]}>
                <img src="images/servicePage/checkoutCard/car.png" />

                <div>Secure Checkout</div>
              </div>
            </Box>

            <div className={styles["checkout-content"]}>
              <PhoneNumber getLoggedInHandler={getLoggedInHandler} />
              <DateTime loggedIn={loggedIn} />
              <AddAddress />
              <PaymentOptions></PaymentOptions>
            </div>
          </>
        )}
    </>
  );
};
