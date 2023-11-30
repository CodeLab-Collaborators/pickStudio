import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HomeLayout, ProductLayout } from "../components";
import PrivateRoute from "./privateRoute";


const Home = lazy(() => import("../pages/Home"));
const SingleList = lazy(() => import("../pages/SingleList"));
const Registration = lazy(() => import("../pages/auth/Registration"));
const Login = lazy(() => import("../pages/auth/Login"));
const Verification = lazy(() => import("../pages/auth/Verification"));
const Profile = lazy(() => import("../pages/Profile"));

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <HomeLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            {/* <PrivateRoute> */}
            <Home />
            {/* </PrivateRoute> */}
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Registration />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "verification/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Verification/>
          </Suspense>
        ),
      },
      {
        path: "user",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Profile/>
          </Suspense>
        ),
      },
      {
        path: "category",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <>cat</>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "products",
    element: <ProductLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SingleList />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <>page not found</>,
  },
]);
