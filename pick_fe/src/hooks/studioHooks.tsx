import useSWR from "swr";
import { getAllStudio, getSingleStudio, searchStudio } from "../api/studioAPI";
import { createStudioHistory } from "../api/bookingsAPI";

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

export const studioHistoryHooks = (studioID: string) => {
  const { data: viewHistoryStudio, isLoading } = useSWR(
    `view-studio-bookings/`,
    () => createStudioHistory(studioID),
    { refreshInterval: 1000 }
  );

  return { viewHistoryStudio, isLoading };
};
