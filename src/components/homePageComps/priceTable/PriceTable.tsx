import React from "react";
import { PriceData } from "./PriceData";
import { useState } from "react";
import styles from "./PriceData.module.css";
export const PriceTable = () => {
  const [tableIndex, setTableIndex] = useState(4);
  const [showBtn, setShowBtn] = useState(false);

  return (
    <div>
      <h3>Car Services PriceList In Pune,India 2022</h3>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Services Type</th>
            <th>Price Starts from Rs</th>
            <th>Savings</th>
          </tr>
        </thead>
        <tbody>
          {PriceData.slice(0, tableIndex).map((item: any, index: any) => {
            return (
              <tr key={index}>
                <td>{item.type}</td>
                <td>{item.Price}</td>
                <td>{item.saving}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mb-4">
        <span>this data was last updated on 19/10/2022</span>
        {!showBtn && (
          <button
            onClick={() => {
              setTableIndex(PriceData.length);
              setShowBtn(true);
            }}
            className={styles["see-more"]}
          >
            SEE MORE
          </button>
        )}
        {showBtn && (
          <button
            onClick={() => {
              setTableIndex(4);
              setShowBtn(false);
            }}
            className={styles["see-more"]}
          >
            SEE LESS
          </button>
        )}
      </div>
    </div>
  );
};
