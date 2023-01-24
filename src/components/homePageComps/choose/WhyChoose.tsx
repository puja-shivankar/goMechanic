import { Grid } from "@mui/material";
import React from "react";

import { whyChooseGomechanic } from "./Data";

import { BigData } from "../../reusable/bigDataComp/BigData";
export const WhyChoose = ({ passedIndex }: any) => {
  return (
    <>
      <BigData data={whyChooseGomechanic[passedIndex]} />
    </>
  );
};
