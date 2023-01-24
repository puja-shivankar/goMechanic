import React, { useState } from "react";
import Card from "@mui/material/Card";
import PhoneInput from "react-phone-input-2";
import styles from "./PhoneNumber.module.css";

import "react-phone-input-2/lib/material.css";
export const PhoneNumber = ({ getLoggedInHandler }: any) => {
  const [value, setValue] = useState("");
  const [num, setNum] = useState();
  const [enteredotp, setEnteredOtp] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  let myNum: any;
  const continueHandler = (ev: any) => {
    if (value.length == 12) {
      myNum = Math.floor(100000 + Math.random() * 900000);
      setNum(myNum);
      alert(myNum);
      ev.preventDefault();
    } else {
      alert("Please enter Valid No.");
      ev.preventDefault();
      return false;
    }
  };
  const otpHandler = (event: any) => {
    setEnteredOtp(event.target.value);
  };
  const submitHandler = (ev: any) => {
    console.log(num, enteredotp);
    if (num == enteredotp) {
      setLoggedIn(true);
    } else {
      alert("OTP dose not match");
      ev.preventDefault();
      return false;
    }
    getLoggedInHandler(true);
  };
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 730,
        borderLeft: "2px solid #e73c33",
        borderRadius: "0",
        marginTop: 4,
      }}
    >
      {!loggedIn ? (
        <div className="p-4">
          <h5>Account</h5>
          <p>To place an order, log in to your existing account or sign up. </p>
          <div className={styles["phone-container"]}>
            <PhoneInput
              country={"in"}
              onlyCountries={["in"]}
              placeholder="+91 Enter mobile number"
              value={value}
              onChange={setValue}
            />
            {num && (
              <div>
                <input
                  type="number"
                  placeholder="One Time Password"
                  className={`${styles["otp-input"]} form-control`}
                  onChange={otpHandler}
                />
              </div>
            )}
            {!num ? (
              <button
                className={styles["continue-btn"]}
                onClick={continueHandler}
              >
                CONTINUE
              </button>
            ) : (
              <button
                className={styles["continue-btn"]}
                onClick={submitHandler}
              >
                VERIFY OTP
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="p-4">
          <h5 className="mb-4">Logged In</h5>
          <span>Customer | {value.slice(2, 12)}</span>
        </div>
      )}
    </Card>
  );
};
