import React, { useState } from "react";
import { PackageCardData } from "./data";
import { PackageCard } from "../../../reusable/servicePriceCard/PackageCard";
import styles from "../ServiceTypes.module.css";
import { useSelector } from "react-redux";
export const AcService = () => {
  const [open, setOpen] = useState(false);
  const [oilContent, setOilContent] = useState();
  const [header, setHeader] = useState("");
  const AppData = useSelector((state: any) => state.data[0]);

  const onClickHandler = (content: any, header: any) => {
    setOilContent(content);
    setHeader(header);
    setOpen(!open);
    console.log(content);
  };
  return (
    <>
      {AppData &&
        AppData[0]?.PackageCardData[0]?.AcService?.map((data: any) => (
          <div className="mb-4">
            <div className={styles["card-header"]}>{data.header}</div>
            {data.content.map((content: any) => (
              <PackageCard
                data={content}
                onClickHandler={() => onClickHandler(content, data.header)}
                open={open}
                header={data.header}
                type="AcService"
              />
            ))}
          </div>
        ))}
    </>
  );
};
