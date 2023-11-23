import { FC, PropsWithChildren, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getSigninAccount } from "../api/authAPI";
import { jwtDecode } from "jwt-decode";
import { useSignUserData, useUser } from "../global/globalState";

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const [user] = useUser();
  const [userData, setUserData] = useSignUserData();
  const getToken = JSON.parse(localStorage.getItem("mainUser")!);
  useEffect(() => {
    if (user) {
      const token = jwtDecode(getToken);
      setUserData(token);
    }
  }, []);

  return (
    <div>{getToken !== null ? <>{children}</> : <Navigate to="/login" />}</div>
  );
};

export default PrivateRoute;
