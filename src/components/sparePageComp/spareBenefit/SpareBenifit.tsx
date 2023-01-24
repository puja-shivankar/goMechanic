import React from 'react'
import { useSelector } from 'react-redux';
import styles from "./SpareBenefit.module.css"
export const SpareBenifit = () => {
    const AppData = useSelector((state: any) => state.data[0]);
  return (
    <div className={styles["main-div"]}>
        <div className='container'>
           
            {AppData &&
            AppData[0].SpareBenefit?.map((data: any, i: any) => (
                <div className='row'>
                <div className='col-6 mt-5'>
                <span className={`${styles["first-col"]} mt-5`}>{data.text}</span><br/><br/>
                <span className={`${styles["first-col"]} mt-5`}>{data.subtext}</span>
                </div>
       
         </div>
            ))}
         
      
         
            </div>
        </div>
   
  )
}
