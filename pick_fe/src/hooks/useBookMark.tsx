import useSWR from "swr";
import { viewBookMark } from "../api/bookMarkAPI";

export const studioBookMarkHooks = (userID: string) => {
  const { data: studioBookMark, isLoading } = useSWR(
    `/view-bookmark/${userID}`,
    () => {
      return viewBookMark(userID).then((res: any) => {
        return res.data;
      });
    }
  );

  return { studioBookMark, isLoading };
};
