import { FC, PropsWithChildren, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useSignUserData, useUser } from "../global/globalState";

const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const [user] = useUser();
  const [userData, setUserData] = useSignUserData();

  console.log(userData);
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
