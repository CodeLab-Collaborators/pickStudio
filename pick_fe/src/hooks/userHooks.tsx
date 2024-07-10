import useSWR from "swr";
import {
  getOneUser,
  updateBankAccount,
  updateBankAccountName,
  updateBankName,
} from "../api/userAPI";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { viewUserStudioHistory } from "../api/bookingsAPI";

export const userHooks = () => {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("mainUser")!);
    if (user) {
      let tokenID: any = jwtDecode(user);
      setState(tokenID.id);
    }
  }, [state]);

  const { data, isLoading } = useSWR(`${state}`, () => getOneUser(state));

  return { data, isLoading };
};

export const useSingleUser = (userID: string) => {
  const { data: singleUser } = useSWR(`view-one-user/${userID}`, () =>
    getOneUser(userID)
  );

  return { singleUser };
};

export const useUserHistory = (userID: string) => {
  const { data: history } = useSWR(`view-user-history/${userID}`, () =>
    viewUserStudioHistory(userID)
  );

  return { history };
};

export const useUserAccountName = (userID: string, data: string) => {
  const { data: accountName } = useSWR(`update-account-name/${userID}`, () =>
    updateBankAccountName(userID, data)
  );

  return { accountName };
};

export const useUserAccountNumber = (userID: string, data: string) => {
  const { data: accountNumber } = useSWR(
    `update-account-number/${userID}`,
    () => updateBankAccount(userID, data)
  );

  return { accountNumber };
};

export const useUserBankName = (userID: string, data: any) => {
  const { data: bankName } = useSWR(`update-bank-name/${userID}`, () =>
    updateBankName(userID, data)
  );

  return { bankName };
};
