import React, { useState, useEffect } from 'react'

import styles from "./miles.module.css";


import { CircleLoader, ClipLoader, PulseLoader } from "react-spinners";
import MilesHeader from '../../components/milesMembership/header/MilesHeader';
import BlackDash from '../../components/reusable/BlackDash/BlackDash';
import { Miles_Questions } from '../../components/milesMembership/MilesQuestion/Miles_Question';
import { M_Footer } from '../../components/milesMembership/MilesFooter/M_Footer';
import { MilesFc } from '../../components/milesMembership/MilesCard/MilesFc';
import Switch_member from '../../components/milesMembership/membership/Switch_member';




const Milesmembership = () => {
  const [loading, setLoading] = useState(false);
  const [passedIndex, setPassedIndex] = useState(0);
  const passIndexHandler = (index: number) => {
    console.log(index)
    setPassedIndex(index);
  }
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>{loading ? (
      <div className={styles["loader-style"]}>
        <ClipLoader
          className="text-center mt-5 "
          color={"#fff"}
          loading={loading}

          size={40}

        />
      </div>

    ) : (
      <div className={styles["mile-div"]}>
        <MilesHeader />

        <div className={`${styles["main-page"]} d-flex`}>
          <div >
            {/* <ServiceTabs passIndexHandler={passIndexHandler} /> */}
            <div className={styles["home-content"]}>

              <MilesFc />
              <Switch_member />
              <BlackDash />

            </div>
          </div>
          <div className={styles["xyz"]}>
            <Miles_Questions />
          </div>
          <M_Footer />
        </div>

      </div>
    )}

    </>
  );
}

export default Milesmembership;


