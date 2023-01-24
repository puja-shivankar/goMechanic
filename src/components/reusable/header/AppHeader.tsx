import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import appLogo from "../../../assets/images/app-logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./AppHeader.module.css";
import CityModal from "../cityModal/CityModal";
import Login from "../auth/Login";
import { useNavigate } from "react-router-dom";

export const AppHeader = ({ bgColor, getCityName }: any) => {
  const [state, setState] = useState(false);
  const [openMyModal, setOpenModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Pune");
  const chooseCityName = (city: string) => {
    setSelectedCity(city);
    getCityName(city);
  };
  const newTabHandler = () => {
    window.open("/spares","_blank");
  }

  const navigate = useNavigate();

  const handleClick = (e: any) => {
    e.preventDefault();
    setOpenModal(true);
  };
  return (
    <>
      <AppBar
        position="static"
        style={{
          background: bgColor,
          boxShadow: "none",
          marginTop: ".8em",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <img
              src={appLogo}
              alt="logo"
              className={styles["app-logo"]}
              onClick={() => {
                navigate("/");
              }}
            />
          </IconButton>
          <Stack
            sx={{ flexGrow: 1 }}
            className={styles["header-menu"]}
            direction="row"
            onClick={() => {
              setState(true);
            }}
          >
            <Stack>
              <Typography className={styles["btn-typography"]}>
                {selectedCity}
                <KeyboardArrowDownIcon />
              </Typography>
            </Stack>
          </Stack>
          {bgColor == "black" && (
            <div className={styles["search-box"]}>
              <input type="search" placeholder="Example: Periodic Services" />
            </div>
          )}
          <Stack direction="row" spacing={1} className={styles["header-menu"]}>
            <Button color="inherit">
              <Typography className={styles["btn-typography"]}>
                <span onClick={newTabHandler}>Spare</span>
              </Typography>
            </Button>
            <Button color="inherit">
              <Typography className={styles["btn-typography"]}>Blog</Typography>
            </Button>
            <Button color="inherit">
              <Typography className={styles["btn-typography"]}>More</Typography>
            </Button>
            <Button variant="contained" color="error" onClick={handleClick}>
              <Typography className={styles["btn-typography"]}>
                Login
              </Typography>
            </Button>
          </Stack>
          <CityModal
            open={state}
            setOpen={setState}
            chooseCityName={chooseCityName}
          />
        </Toolbar>
      </AppBar>
      <Login open={openMyModal} setopen={setOpenModal} />
    </>
  );
};
