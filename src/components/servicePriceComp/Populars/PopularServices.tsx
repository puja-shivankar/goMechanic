import React from "react";
import { SwiperComp } from "../../reusable/Swiper/SwiperComp";
import { serviceData } from "./services";



export function PopularServices() {
    return (
        <>
            <SwiperComp data={serviceData} />
        </>
    );
}
