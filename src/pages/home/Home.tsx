import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppHeader } from "../../components/reusable/header/AppHeader";
import { ServiceModal } from "../../components/reusable/serviceModal/ServiceModal";
import CustomServices from "../../components/homePageComps/customServices/CustomServices";
import CarServices from "../../components/homePageComps/carServices/CarServices";
import { MechanicBenefits } from "../../components/homePageComps/goMechanicBenefit/mechanicBenefits";
import MechanicWork from "../../components/homePageComps/goMechanicWork/mechanicWork";
import { StickyHeader } from "../../components/homePageComps/stickyHeader/StickyHeader";

import { GoQuetion } from "../../components/homePageComps/Quetions/GoQuetions";
import { Dash_saperator } from "../../components/reusable/dash-saperator/Dash_saperator";
import OwnersFeedback from "../../components/homePageComps/ownersFeedback/OwnersFeedback";

import axios from "axios";
import { WhyChoose } from "../../components/homePageComps/choose/WhyChoose";
import { PriceTable } from "../../components/homePageComps/priceTable/PriceTable";
import { Footer } from "../../components/reusable/footer/Footer";
import { FooterEnd } from "../../components/reusable/footer/FooterEnd";

import { SaveData } from "../../redux-store/action";
import RatingDiv from "../../components/reusable/ratingModule/ratingDiv";
import FestiveCarEssential from "../../components/homePageComps/festiveCarEssential/FestiveCarEssential";
import Workshop from "../../components/homePageComps/workshop/Workshop";
import LuxCars from "../../components/homePageComps/lux-cars.tsx/LuxCars";
import Featured_buddies from "../../components/homePageComps/Featured_buddies/Featured_buddies";
import HomeFooter from "../../components/homePageComps/homeFooter/HomeFooter";
import HomeFooterEnd from "../../components/homePageComps/homeFooter/HomeFooterEnd";
import { PulseLoader } from "react-spinners";
export const Home = ({ selectedCarHandler }: any) => {
  const [cityName, setCityName] = useState("Pune");
  const [selectedCar, setSelectedCar] = useState();
  const [passedIndex, setPassedIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:3000/Alldata")
      .then((res: any) => {
        console.log(res.data);
        dispatch(SaveData(res.data));
      })
      .catch((err: any) => console.log(err));
  }, []);

  const getCityName = (city: string) => {
    setCityName(city);
  };
  const passIndexHandler = (index: number) => {
    console.log(index)
    setPassedIndex(index);
  }
  const getSelectedCar = (data: any) => {
    setSelectedCar(data);
    selectedCarHandler(data);
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

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
            <div className={styles["bodyDiv"]}>
              <div className={`${styles["img-container"]}`}>
                <div className="d-flex">
                  <AppHeader bgColor="transparent" getCityName={getCityName} />
                </div>
              </div>
              <ServiceModal
                cityName={cityName}
                getSelectedCar={getSelectedCar}
                className={`${styles["floatingDiv"]}`}
              />
              <div className={`${styles["home-content"]}`}>
                <StickyHeader />
                <CarServices cityName={cityName} />
                <CustomServices />
                <FestiveCarEssential />
                <Workshop />
                <LuxCars />
                <MechanicWork />
                <MechanicBenefits />
                <RatingDiv />
                <OwnersFeedback passedIndex={passedIndex} />
                <GoQuetion passedIndex={passedIndex} />
                <Featured_buddies />
                <WhyChoose passedIndex={passedIndex} />
                <PriceTable />
              </div>
            </div>
            <div className={`${styles["footer-main"]}`}>
              <HomeFooter />
              <HomeFooterEnd />
            </div>
          </div>
        )}
    </>
  );
};
