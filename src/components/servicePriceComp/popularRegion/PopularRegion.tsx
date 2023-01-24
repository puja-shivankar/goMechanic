import React from "react";
import { SwiperComp } from "../../reusable/Swiper/SwiperComp";
import { regionData } from "./region";




export function PopularRegion() {
    return (
        <>
            <SwiperComp data={regionData} />
        </>
    );
}
