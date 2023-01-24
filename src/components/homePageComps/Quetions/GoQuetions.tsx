import React from "react";
import { quetionAnswer } from "./quetion";
import { F_Question } from "../../reusable/F_Question/F_Question";

export function GoQuetion({ passedIndex }: any) {
  return (
    <>
      <F_Question data={quetionAnswer[passedIndex]} />
    </>
  );
}
