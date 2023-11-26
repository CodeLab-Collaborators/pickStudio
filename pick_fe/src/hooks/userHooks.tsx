import useSWR from "swr";
import { getOneUser } from "../api/userAPI";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const userHooks = () => {
  const [state, setState] = useState<string>("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("mainUser")!);
    if (user) {
      let tokenID: any = jwtDecode(user);
      setState(tokenID.id);
    }
  }, [state]);

  console.log(state);
  const { data, isLoading } = useSWR(`${state}`, () => getOneUser(state));

  return { data, isLoading };
};

export const useSingleUser = (userID: string) => {
  const { data: singleUser } = useSWR(`view-one-user/${userID}`, () =>
    getOneUser(userID)
  );

  return { singleUser };
};
