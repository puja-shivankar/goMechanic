import React from "react";
import { F_Question } from "../../reusable/F_Question/F_Question";
import { ReviewsService } from "../../reusable/service-reviews/ReviewsService";
import { reviewData } from "./reviewData";


export function Reviews({ passedIndex }: any) {
  return (
    <>
      <ReviewsService data={reviewData[passedIndex]} />
    </>
  );
}
