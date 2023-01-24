import React from "react";
import Card from "@mui/material/Card";

import styles from "./PaymentOptions.module.css";
export const PaymentOptions = () => {
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
      <h4 className={styles["payment-container-h4"]}>Payment</h4>
    </Card>
  );
};
