import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./DateTime.module.css";
import moment from "moment";
import { Box, Tab, Tabs } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  tabs: {
    "& .MuiTabs-indicator": {
      display: "none",
    },
    "& .MuiTab-root.Mui-selected": {
      color: "black",
      fontSize: ".8em",
      fontWeight: "bold",
      width: "max-content",
      backgroundColor: "rgba(231,60,51,.1)",
      borderRadius: "1.5em 1.5em 0 0",
    },
    "& .css-ptiqhd-MuiSvgIcon-root": {
      backgroundColor: "#e5e7e9",
      borderRadius: "2em",
    },
  },
});
const slotTimes = [
  { id: 0, time: 10, slot: "10-11 AM" },
  { id: 1, time: 11, slot: "11-12 AM" },
  { id: 2, time: 12, slot: "12-1 PM" },
  { id: 3, time: 1, slot: "1-2 PM" },
  { id: 4, time: 2, slot: "2-3 PM" },
  { id: 5, time: 3, slot: "3-4 PM" },
  { id: 6, time: 4, slot: "4-5 PM" },
  { id: 7, time: 5, slot: "5-6 PM" },
];
export const DateTime = ({ loggedIn }: any) => {
  const [dates, setDates] =
    useState<{ dd: string; weekDay: string; fullDate: string }[]>();
  const [cuurHour, setCurrHour] = useState<number>();
  const [value, setValue] = React.useState(0);

  const [dateBoxActive, setDateBoxActive] = useState<number>(0);
  const [timeBoxActive, setTimeBoxActive] = useState<number>(0);
  const [btnContinue, setBtnContinue] = useState(false);
  const fullDate = moment(new Date()).format("YYYY-MM-DD");
  const dd = fullDate.slice(8, 11);
  const [appointment, setAppointment] = useState({
    slotDate: fullDate,
    slotTime: slotTimes[0].slot,
  });
  const [sliceIndex, setSliceIndex] = useState<number>();
  const [CalcSliceIndex, setCalcSliceIndex] = useState<number>();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const classes = useStyles();

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 6; i++) {
      const date = new Date(new Date().getTime() + i * 24 * 60 * 60 * 1000);
      const weekDay = moment(date).format("dddd").slice(0, 3);
      const fullDate = moment(date).format("YYYY-MM-DD");
      const dd = fullDate.slice(8, 11);
      const datesObj = { dd, weekDay, fullDate };
      arr.push(datesObj);
    }
    setDates(arr);
    const currHour = moment().hour() - 12;
    const index = slotTimes.findIndex((item: any) => {
      return item.time == currHour;
    });
    setCalcSliceIndex(index + 1);
    setSliceIndex(index + 1);
  }, []);
  // useEffect(()=>)

  const slotDateHandler = (i: number, fullDate: any) => {
    setDateBoxActive(i);
    setAppointment({ ...appointment, slotDate: fullDate });
    if (i === 0) setSliceIndex(CalcSliceIndex);
    else setSliceIndex(0);
  };
  const slotTimeHandler = (i: number, slotTime: any) => {
    setTimeBoxActive(i);
    setAppointment({ ...appointment, slotTime: slotTime });
  };

  const continueHandler = () => {
    setBtnContinue(true);
  };

  return (
    <>
      {!loggedIn && (
        <Card
          variant="outlined"
          sx={{
            maxWidth: 730,
            height: 150,
            borderRadius: "0",
            marginTop: 4,
          }}
        >
          <h4 className={styles["dateTime-container-h4"]}>
            Select Date and Time of Service
          </h4>
        </Card>
      )}

      {loggedIn && (
        <>
          {" "}
          {!btnContinue ? (
            <Card
              variant="outlined"
              sx={{
                maxWidth: 730,
                // height: 150,
                borderRadius: "0",
                marginTop: 4,
                position: "relative",
              }}
            >
              <div className={styles["dateTime-container"]}>
                <h4 className={styles["dateTime-container-h4"]}>
                  Select Date and Time of Service
                </h4>
                <div className="d-flex ">
                  {dates &&
                    dates.map((data: any, i: number) => (
                      <div
                        key={i}
                        className={
                          dateBoxActive == i
                            ? styles["date-pick"]
                            : styles["date-not-pick"]
                        }
                        onClick={() => slotDateHandler(i, data.fullDate)}
                      >
                        <div className={styles["date-content"]}>
                          <div>{data.dd}</div>
                          <div className={styles["date-weekday"]}>
                            {data.weekDay}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div>
                  <span className={styles["pick-slot"]}>Pick Time Slot </span>
                  <span className={styles["available-slot"]}>
                    (5 slots available)
                  </span>

                  <div className="d-flex ">
                    <Box
                      sx={{
                        maxWidth: { xs: 320, sm: 650 },
                        bgcolor: "background.paper",
                      }}
                    >
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons={true}
                        aria-label="scrollable prevent tabs example"
                        sx={{ marginLeft: "-30px" }}
                        className={classes.tabs}
                      >
                        {slotTimes
                          .slice(sliceIndex, slotTimes.length)
                          .map((data: any, i: number) => (
                            <>
                              <div
                                key={i}
                                className={
                                  timeBoxActive == i
                                    ? styles["slot-pick-box2"]
                                    : styles["slot-pick-box"]
                                }
                                onClick={() => slotTimeHandler(i, data.slot)}
                              >
                                <div className="">
                                  <div className={styles["slot-time"]}>
                                    {data.slot}
                                  </div>
                                  <div className={styles["slot-discount"]}>
                                    Extra ₹ 100 OFF
                                  </div>
                                </div>
                              </div>
                            </>
                          ))}
                      </Tabs>
                    </Box>{" "}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                {" "}
                <hr />
              </div>
              <div className={styles["continuebtn-container"]}>
                <button
                  className="btn btn-danger position-absolute bottom-0 end-0 m-2"
                  onClick={continueHandler}
                >
                  CONTINUE <ArrowForwardIcon />
                </button>
              </div>
            </Card>
          ) : (
            <Card
              variant="outlined"
              sx={{
                maxWidth: 730,
                height: 150,
                borderRadius: "0",
                marginTop: 4,
                padding: " 1.5em 1.8em",
              }}
            >
              <h4>Select Date and Time of Service</h4>
              <div className={styles["selected-slot"]}>
                {appointment.slotDate}
                {appointment.slotTime}
              </div>
            </Card>
          )}
        </>
      )}
    </>
  );
};
