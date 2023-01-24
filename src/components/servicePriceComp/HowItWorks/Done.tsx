import React from "react";
import { HowDone } from "../../reusable/service_Waranty/HowDone";
import { Waranty } from "./data";
export const Done = ({ passedIndex }: any) => {
    return (
        <>
            <HowDone data={Waranty[passedIndex]} />
        </>
    );
};
