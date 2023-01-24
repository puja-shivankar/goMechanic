import React from "react";
import { PackageCardData } from "./data";
import { PackageCard } from "../../../reusable/servicePriceCard/PackageCard";
import styles from "../ServiceTypes.module.css";
import { useSelector } from "react-redux";

export const CarSpa = () => {
  const AppData = useSelector((state: any) => state.data[0]);

  return (
    <div className="mb-4">
      {AppData &&
        AppData[0]?.PackageCardData[0]?.CarSpa?.map((data: any) => (
          <div className="mb-4">
            <div className={styles["card-header"]}>{data.header}</div>
            {data.content.map((content: any) => (
              <PackageCard data={content} type="CarSpa" rawData={data} />
            ))}
          </div>
        ))}
    </div>
  );
};
