import useSWR from "swr";
import { getAllStudio, getSingleStudio } from "../api/studioAPI";

export const studioHooks = () => {
  const { data: allStudio, isLoading } = useSWR(
    `view-all-studio`,
    getAllStudio
  );

  return { allStudio, isLoading };
};

export const singleStudioHooks = (accountID: string) => {
  const { data: singleStudio } = useSWR(`view-single-studio/${accountID}`, () =>
    getSingleStudio(accountID)
  );

  return { singleStudio };
};
