import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layout/homeLayout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import ResetPassword from "../pages/ResetPassword";


export const mainRouter = createBrowserRouter([
 
  {
    path: "/",
    element: <HomeLayout/>,
    children: [
      {
        index: true,

        element:<Home/>
      },


    ],
    
  },
  {
    path: "/login",
    element: <Login/>,
    
  },
  {
    path: "/reset-password",
    element: <ResetPassword/>,
    
  },
]);
