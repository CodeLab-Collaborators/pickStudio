import useSWR from "swr";
import {
  getAllStudio,
  getSingleStudio,
  getUserStudios,
  searchStudio,
} from "../api/studioAPI";
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
    getSingleStudio(accountID).then((res) => {
      return res;
    })
  );

  return { singleStudio };
};

export const searchStudioHooks = (data: string) => {
  const { data: viewSearchStudio, isLoading } = useSWR(
    `view-search-studio/${data}`,
    () => searchStudio(data)
    // { refreshInterval: 1000 }
  );

  return { viewSearchStudio, isLoading };
};

export const studioHistoryHooks = (studioID: string) => {
  const { data: viewHistoryStudio, isLoading } = useSWR(
    `view-studio-bookings/${studioID}`,
    () => createStudioHistory(studioID)
    // { refreshInterval: 1000 }
  );

  return { viewHistoryStudio, isLoading };
};

export const userStudioHooks = (userID: string) => {
  const { data: userStudio } = useSWR(
    `view-user-studio/${userID}`,
    () =>
      getUserStudios(userID).then((res) => {
        return res;
      })
    // { refreshInterval: 1000 }
  );

  return { userStudio };
};
