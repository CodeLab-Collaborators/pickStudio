import useSWR from "swr";
import { getAllStudio, getSingleStudio, searchStudio } from "../api/studioAPI";

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

export const searchStudioHooks = (data: string) => {
  const { data: viewSearchStudio, isLoading } = useSWR(
    `view-search-studio/`,
    () => searchStudio(data),
    { refreshInterval: 1000 }
  );

  return { viewSearchStudio, isLoading };
};
