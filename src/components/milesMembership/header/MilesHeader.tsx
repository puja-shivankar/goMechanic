import React from 'react'
import  styles  from '../header/MilesHeader.module.css';

const MilesHeader = () => {
    return (
      <div className={styles["main-container"]}>
        <div className={styles["main"]}>
  
            <img
              className={styles["logo"]}
              src="/Milesmebership/Miles Logo.png"
            />
       
        </div>
      </div>
    );
}

export default MilesHeader;
