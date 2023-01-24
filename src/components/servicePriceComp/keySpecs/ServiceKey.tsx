import React from "react";
import { F_Question } from "../../reusable/F_Question/F_Question";
import Key_Specs from "../../reusable/Service-KeySpecs/Key_Specs";
import { ReviewsService } from "../../reusable/service-reviews/ReviewsService";
import { Key_SpecsData } from "./data";



export function ServiceKey() {
  return (
    <>
      <Key_Specs data={Key_SpecsData} />
    </>
  );
}
