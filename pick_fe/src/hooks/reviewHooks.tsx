import useSWR from "swr";
import { readReeviews } from "../api/reviewAPI";

export const studioReviewHooks = (studioID: string) => {
  const { data: studioReview } = useSWR(`/get-review-studio/${studioID}`, () =>
    readReeviews(studioID)
  );

  return { studioReview };
};
