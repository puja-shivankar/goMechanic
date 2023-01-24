
import React from "react";

import { HondaData } from "./HondaData";

import { BigData } from "../../reusable/bigDataComp/BigData";
export const WhyHonda = ({ passedIndex }: any) => {
    return (
        <>
            <BigData data={HondaData[passedIndex]} />
        </>
    );
};
