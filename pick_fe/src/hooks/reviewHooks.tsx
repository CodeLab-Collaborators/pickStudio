import useSWR from "swr";
import { readReeviews } from "../api/reviewAPI";
import { readArticle, readOneArticle } from "../api/ArticlesAPI";

export const studioReviewHooks = (studioID: string) => {
  const { data: studioReview } = useSWR(`/get-review-studio/${studioID}`, () =>
    readReeviews(studioID)
  );

  return { studioReview };
};

export const useReadArticles = () => {
  const { data: articles } = useSWR(`/read-articles/`, readArticle);

  return { articles };
};

export const useReadOneArticles = (articleID: string) => {
  const { data: oneArticle } = useSWR(`/read-one-articles/`, () => {
    return readOneArticle(articleID).then((res: any) => {
      return res.data;
    });
  });

  return { oneArticle };
};
