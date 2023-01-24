import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

import { useSelector } from "react-redux";
import styles from "./ServiceTabs.module.css";
import { Periodic } from "../serviceTypes/periodic/Periodic";
import { AcService } from "../serviceTypes/acService/AcService";
import { Batteries } from "../serviceTypes/batteries/Batteries";
import { TyreWheel } from "../serviceTypes/tyreWheel/TyreWheel";
import { Denting } from "../serviceTypes/denting/Denting";
import { Detailing } from "../serviceTypes/detailing/Detailing";
import { CarSpa } from "../serviceTypes/carSpa/CarSpa";
import { Inspection } from "../serviceTypes/inspection/Inspection";
import { Windshield } from "../serviceTypes/windshield/Windshield";
import { Suspension } from "../serviceTypes/suspension/Suspension";
import { ClutchBody } from "../serviceTypes/clutchBody/ClutchBody";
import { CheckoutCard } from "../checkoutCard/CheckoutCard";
const useStyles = makeStyles({
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: "red",
      height: 3,
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
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ServiceTabs({ passIndexHandler }:any) {
  const [value, setValue] = React.useState(0);
  const AppData = useSelector((state: any) => state.data[0]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(newValue);
    passIndexHandler(newValue);
    setValue(newValue);
  };

  const classes = useStyles();

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          boxShadow: 2,
          backgroundColor: "white",
          position: "sticky",
          top: 0,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          className={classes.tabs}
        >
          {AppData &&
            AppData[0]?.ServiceTabsData?.map((data: any, i: number) => (
              <Tab
                label={data.name}
                icon={
                  <img
                    src={data.icon}
                    alt="img"
                    className={styles["tab-image"]}
                  />
                }
                key={i}
                color="black"
                sx={{
                  fontSize: "0.7rem",
                  textTransform: "none",
                  lineHeight: 1.12,
                  width: "max-content",
                  marginTop: "-0.5rem",
                }}
                {...a11yProps(i)}
              />
            ))}
        </Tabs>
      </Box>
      <div className={styles["tab-panel"]}>
        <TabPanel value={value} index={0}>
          <Periodic />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AcService />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Batteries />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <TyreWheel />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Denting />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Detailing />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <CarSpa />
        </TabPanel>
        <TabPanel value={value} index={7}>
          <Inspection />
        </TabPanel>
        <TabPanel value={value} index={8}>
          <Windshield />
        </TabPanel>
        <TabPanel value={value} index={9}>
          <Suspension />
        </TabPanel>
        <TabPanel value={value} index={10}>
          <ClutchBody />
        </TabPanel>
      </div>
    </Box>
  );
}
