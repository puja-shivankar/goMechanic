import styles from "./Servics.module.css";
import { AppHeader } from "../../components/reusable/header/AppHeader";

import RatingDiv from "../../components/reusable/ratingModule/ratingDiv";
import ServiceTabs from "../../components/servicePriceComp/serviceTabs/ServiceTabs";
import { HondaAmaze } from "../../components/servicePriceComp/customerQuotes/HondaAmaze/HondaAmaze";
import { AskedQuestions } from "../../components/servicePriceComp/AskedQuetions/AskedQuetions";

import { useState, useEffect } from "react";
import { CheckoutCard } from "../../components/servicePriceComp/checkoutCard/CheckoutCard";
import { WhyHonda } from "../../components/servicePriceComp/whyChooseForBrand/WhyHonda";
import { SwiperComp } from "../../components/reusable/Swiper/SwiperComp";
import { PopularServices } from "../../components/servicePriceComp/Populars/PopularServices";
import { PopularRegion } from "../../components/servicePriceComp/popularRegion/PopularRegion";

import { Reviews } from "../../components/servicePriceComp/reviewsPeriodicServices/Reviews";
import { ServiceKey } from "../../components/servicePriceComp/keySpecs/ServiceKey";
import { Done } from "../../components/servicePriceComp/HowItWorks/Done";
import { PulseLoader } from "react-spinners";

export function Services({ selectedCar }: any) {
  const [cityName, setCityName] = useState("Pune");
  const [checkoutData, setCheckoutData] = useState([]);
  const [passedIndex, setPassedIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  const getCityName = (city: string) => {
    setCityName(city);
  };
  const checkoutDataHandler = (data: any) => {
    setCheckoutData(data);
  };
  const passIndexHandler = (index: number) => {
    console.log(index)
    setPassedIndex(index);
  }
  return (
    <>
      {
        loading ? (
          <div className={styles["loader-style"]} >
            <PulseLoader
              className="text-center mt-5 "
              color={"#e73c33"}
              loading={loading}

              size={20}

            />
          </div >
        ) : (
          <div>
            <AppHeader bgColor="black" getCityName={getCityName} />
            <div className="d-flex">
              <div className={styles["sliding-tabs"]}>
                <ServiceTabs passIndexHandler={passIndexHandler} />
                <div className={styles["home-content"]}>
                  <RatingDiv />
                  <Done passedIndex={passedIndex} />
                  <HondaAmaze passedIndex={passedIndex} />
                  <AskedQuestions passedIndex={passedIndex} />
                  <ServiceKey />
                  <WhyHonda passedIndex={passedIndex} />
                  <Reviews passedIndex={passedIndex} />
                  <PopularServices />
                  <PopularRegion />
                </div>
              </div>
              <CheckoutCard selectedCar={selectedCar} />
            </div>
          </div>
        )}
    </>
  );
}
