import React from "react";
import Card from "@mui/material/Card";

import styles from "./AddAddress.module.css";
export const AddAddress = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 730,
        height: 140,
        borderRadius: "0",
        marginTop: 4,
      }}
    >
      <h4 className={styles["address-container-h4"]}>Select/ Add Address</h4>
    </Card>
  );
};
