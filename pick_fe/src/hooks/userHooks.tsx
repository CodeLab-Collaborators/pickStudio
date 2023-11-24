import useSWR from "swr";
import { getOneUser } from "../api/userAPI";
import { useEffect } from "react";
import { JwtPayload, jwtDecode } from "jwt-decode";

export const userHooks = () => {
  const user = JSON.parse(localStorage.getItem("mainUser")!);
  const tokenID: JwtPayload | any = jwtDecode(user);
  useEffect(() => {}, []);

  const { data, isLoading } = useSWR(`${tokenID.id}`, () =>
    getOneUser(tokenID.id)
  );
  return { data, isLoading };
};
