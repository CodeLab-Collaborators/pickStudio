import axios from "axios";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getSigninAccount } from "../api/authAPI";

// ("http://localhost:3300/api/v1/sign-in/success")

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    getSigninAccount().then((res) => {
      console.log("read: ", res);
    });
  }, []);

  //   console.log("Reading Now: ", user);

  return <div>{!user ? <Navigate to="/" /> : <>{children}</>}</div>;
};

export default PrivateRoute;
