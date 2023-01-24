import React, { useEffect, useState } from "react";
import { Card, Box, Button, Grid } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./ServiceModal.module.css";
import { CarBrands, CarModels, FuelType } from "./carBrands";

import { CircleLoader, PulseLoader } from "react-spinners";
import PhoneInput from "react-phone-input-2";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { style } from "@mui/system";
import { useNavigate } from "react-router-dom";

export const ServiceModal = ({ cityName, getSelectedCar }: any) => {
  const [value, setValue] = useState("");
  const [isSelectCar, setIsSelectCar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleChange = (e: any) => {
    const { value } = e.target;
    setSearch(value);
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2300);
  }, []);

  const [selectedCar, setSelectedCar] = useState({
    brand: "",
    carModel: "",
    fuelType: "",
    carImage: "",
  });
  const [yourSelectedCar, setYourSelectedCar] = useState("Select Your Car");
  const [model, setModel] = useState({
    isCarModel: false,
    isFuelType: false,
  });
  const onlyNumberKey = (evt: any) => {
    var ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
    return true;
  };
  return (
    <Card className={styles["service-modal"]}>
      {!isSelectCar ? (
        <div>
          <h3>Experience The Best Car Services In {cityName}</h3>
          <p>Get instant quotes for your car service</p>
          <div
            className={styles["select-car"]}
            onClick={() => setIsSelectCar(true)}
          >
            <span>{yourSelectedCar}</span> <KeyboardArrowDownIcon />
          </div>
          <div className={styles["mobile-no"]}>
            <PhoneInput
              country="india"
              placeholder="Enter mobile number"
              value={value}
              onChange={setValue}
            />
          </div>
          <Button
            variant="contained"
            color="error"
            style={{ width: "100%", marginBottom: "1em", padding: "0.8em" }}
            onClick={() => {
              navigate("/services");
            }}
          >
            <span className={styles["check-price-btn"]}>
              CHECK PRICES FOR FREE
            </span>
          </Button>
          <div>
            By continuing, you agree to GoMechanic's{" "}
            <a href="#">Terms & Conditions</a>&<a href="#"> Privacy Policy.</a>
          </div>
        </div>
      ) : !model.isCarModel ? (
        <div>
          <span className={styles["back-arrow"]}>
            <ArrowBackIcon
              fontSize="small"
              onClick={() => {
                setIsSelectCar(false);
                setSearch("");
              }}
            />
          </span>
          <span className={styles["text-heading"]}>Select Manufacturer</span>
          <div className={styles["select-car"]}>
            <input
              type="search"
              placeholder="Search Brands"
              // onChange={(e) => setSearch(e.target.value)}
              onChange={handleChange}
            />
          </div>
          {loading ? (
            <PulseLoader
              className="text-center "
              color={"#D0021B"}
              loading={loading}
              size={20}
            />
          ) : (
            <div className={styles["scroll-card"]}>
              <Grid
                container
                spacing={{ xs: 1, md: 2 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {CarBrands.filter((CarBrands) =>
                  CarBrands.name.toLocaleLowerCase().includes(search)
                ).map((data, i) => (
                  <Grid item xs={2} sm={4} md={4} key={i}>
                    <div
                      className={styles["car-text"]}
                      onClick={() => {
                        setSelectedCar({
                          ...selectedCar,
                          brand: data.name,
                        });
                        setSearch("");
                        setModel({ ...model, isCarModel: true });
                      }}
                    >
                      <div className={styles["car-logo"]}>
                        <img
                          src={data.icon}
                          alt="icon"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <span>{data.name}</span>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          )}
        </div>
      ) : !model.isFuelType ? (
        <div>
          <span className={styles["back-arrow"]}>
            <ArrowBackIcon
              fontSize="small"
              onClick={() => {
                setModel({ ...model, isCarModel: false });
                setSearch("");
              }}
            />
          </span>
          <span className={styles["text-heading"]}>Select Model</span>
          <div className={styles["select-car"]}>
            <input
              type="search"
              placeholder="Search Model"
              onChange={handleChange}
            />
          </div>
          {loading ? (
            <PulseLoader
              className="text-center "
              color={"#D0021B"}
              loading={loading}
              size={20}
            />
          ) : (
            <Grid
              container
              spacing={{ xs: 1, md: 2 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {CarModels.filter((carModel) =>
                carModel.name.toLocaleLowerCase().includes(search)
              ).map((data: any, i: any) => (
                <Grid item xs={2} sm={4} md={4} key={i}>
                  <div
                    className={styles["car-text"]}
                    onClick={() => {
                      setSelectedCar({
                        ...selectedCar,
                        carModel: data.name,
                        carImage: data.icon,
                      });
                      setSearch("");
                      setModel({ ...model, isFuelType: true });
                    }}
                  >
                    <div className={styles["car-logo"]}>
                      <img
                        src={data.icon}
                        alt="icon"
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                    <span>{data.name}</span>
                  </div>
                </Grid>
              ))}
            </Grid>
          )}
        </div>
      ) : (
        <div>
          <span className={styles["back-arrow"]}>
            <ArrowBackIcon
              fontSize="small"
              onClick={() => {
                setModel({ ...model, isFuelType: false });
                setSearch("");
              }}
            />
          </span>
          <span className={styles["text-heading"]}>Select Fuel</span>
          <div className={styles["select-car"]}>
            <input
              type="search"
              placeholder="Search Fuel Type"
              onChange={handleChange}
            />
          </div>

          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {FuelType.filter((fuelType) =>
              fuelType.name.toLocaleLowerCase().includes(search)
            ).map((data: any, i: any) => (
              <Grid item xs={2} sm={4} md={4} key={i}>
                <div
                  className={styles["car-text"]}
                  onClick={() => {
                    setSelectedCar({ ...selectedCar, fuelType: data.name });
                    setIsSelectCar(false);
                    setModel({ isCarModel: false, isFuelType: false });
                    setSearch("");
                    setYourSelectedCar(
                      `${selectedCar.brand}, ${selectedCar.carModel}, ${data.name}`
                    );
                    getSelectedCar({
                      brand: selectedCar.brand,
                      model: selectedCar.carModel,
                      fuel: data.name,
                      img: selectedCar.carImage,
                    });
                  }}
                >
                  <div className={styles["car-logo"]}>
                    <img
                      src={data.icon}
                      alt="icon"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <span>{data.name}</span>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </Card>
    // </Box>
  );
};
