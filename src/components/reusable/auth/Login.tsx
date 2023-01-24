import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import styles from "./Login.module.css";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import { Grid, Stack } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import { Form } from "react-bootstrap";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  outline: "none",
  boxShadow: 24,
  p: 6,
  //   zIndex: 1,
};
export default function Login({ open, setOpen, chooseCityName }: any) {
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState("");
  const [num, setNum] = useState();
  const [enteredotp, setEnteredOtp] = useState(0);
  let myNum: any;
  const continueHadnler = (ev: any) => {
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
      // console.log("HI")
      alert("Login Successfully");
    } else {
      // console.log("Nothing ")
      alert("OTP dose not match");
      ev.preventDefault();
      return false;
    }
  };

  return (
    <div>
      <Modal
        className={styles["login-modal"]}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 100,
        }}
      >
        <Collapse in={open}>
          <Box sx={style}>
            <div className={styles["login"]}>
              <Stack>
                <Typography
                  id="transition-modal-title"
                  variant="h5"
                  component="h2"
                  sx={{ fontWeight: "bold" }}
                >
                  Login
                </Typography>
              </Stack>
              <img className={styles["im"]} src="images/login img.png" />

              <Stack sx={{ marginBottom: "2em" }}>
                <Typography id="transition-modal-description">
                  Enter your phone no. to continue <br />
                  Start with +91
                </Typography>
              </Stack>

              <Grid
                container
                spacing={{ xs: 1, md: 2 }}
                columns={{ xs: 4, sm: 8, md: 5 }}
                sx={{ textAlign: "center" }}
              ></Grid>
            </div>
            <form className={styles["mobile-no"]}>
              <b>Enter Mobile No.</b>
              <PhoneInput
                country="india"
                placeholder="+91 Enter mobile number"
                value={value}
                onChange={setValue}
              />

              <button onClick={continueHadnler} className={styles["btn"]}>
                Continue
              </button>
              <form>
                <b>Enter Otp.</b>
                <input className={styles["inp"]} onChange={otpHandler} />
                <button className={styles["btn"]} onClick={submitHandler}>
                  Login
                </button>
              </form>
            </form>
          </Box>
        </Collapse>
      </Modal>
    </div>
  );
}
