import useSWR from "swr";
import { getOneUser } from "../api/userAPI";

const URL: string = "https://pick-be.onrender.com/api/v1";

export const userHooks = (userID: string) => {
  const { data, isLoading } = useSWR(`${userID}`, (userID) =>
    getOneUser(userID)
  );
  return { data, isLoading };
};
