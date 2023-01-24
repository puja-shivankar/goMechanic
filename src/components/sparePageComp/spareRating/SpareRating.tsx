import React from 'react'
import CountUp from 'react-countup'
import styles from "./SpareRating.module.css"
export const SpareRating = () => {
  return (
    <div className={styles["main-div"]}>
    <div className="container">
        <div className='row'>
        <div className="col-6 mt-4">
    <img
                  src="images/sparePage/Star.svg"
                  className={styles["star-img"]}
                  alt="sliderImage"
                  style={{ width: "20%", height: "20%" }} /> 
                
                  <span className={styles["first-content"]}>   <span className={styles["color"]}>4.5/5</span> Based On <CountUp end={ 11577 } />+ Reviews</span>
                 </div>
        <div className= "col-6 mt-4">
        <span  className={styles["sec-content"]}>
        <img
                  src="images/sparePage/Group.svg"
                  className={styles["star-img"]}
                  alt="sliderImage"
                  style={{ width: "28%", height: "23%" }} /> 
       <CountUp end={377488} />+    Happy Customers
     </span>
     </div>
        </div>
    </div>
    </div>
  )
}
