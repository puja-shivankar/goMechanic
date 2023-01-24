import React from 'react'
import SparePageMain from '../../components/sparePageComp/SparePageMain';
import styles from "./SparePage.module.css";
import { useState, useEffect } from "react";
import { PulseLoader } from 'react-spinners';
const SparePage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
          <div className="flex ">

            <SparePageMain />
          </div>
        )}
    </>
  )
}

export default SparePage