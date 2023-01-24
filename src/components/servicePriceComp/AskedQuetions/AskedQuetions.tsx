import React from "react";
import { F_Question } from "../../reusable/F_Question/F_Question";
import { questionAnswer } from "./question";

export function AskedQuestions({ passedIndex }: any) {
  return (
    <>
      <F_Question data={questionAnswer[passedIndex]} />
    </>
  );
}
