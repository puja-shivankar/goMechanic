import React from "react";
import Indicator from "../../../reusable/indicatorComponent/Indicator";
import { customerQuotes } from "./data";
export const HondaAmaze = ({ passedIndex }: any) => {
  return (
    <>
      <Indicator data={customerQuotes[passedIndex]} />
    </>
  );
};
