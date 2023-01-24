import * as React from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styles from "./StickyHeader.module.css";
import { Dash_saperator } from "../../reusable/dash-saperator/Dash_saperator";
export function StickyHeader() {
  const AppData = useSelector((state: any) => state.data[0]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  function scrollSmoothTo(elementId: any) {
    var element: any = document.getElementById(elementId);
    console.log(element);
    element.scrollIntoView({
      block: "start",
      // behavior: "smooth",
    });
  }

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: { xs: 320, sm: 800 },
          bgcolor: "#f6f6f6",
          color: "#4a4a4a",
          position: "sticky",
          marginBottom: "2em",
        }}
        className={`${styles["sticky-header"]} sticky-top`}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}
          className={styles["sticky-tabs"]}
        >
          {AppData &&
            AppData[0]?.StickyMenudata.map((data: any, index: number) => (
              <Tab
                label={data.title}
                key={index}
                sx={{
                  textTransform: "capitalize",
                  color: "#4a4a4a",
                  fontWeight: "600",
                  fontStretch: "normal",
                  fontStyle: "normal",
                  fontSize: ".9rem",
                }}
                onClick={() => {
                  scrollSmoothTo(data.id);
                }}
              />
            ))}
        </Tabs>
      </Box>
      <Dash_saperator />
    </>
  );
}
