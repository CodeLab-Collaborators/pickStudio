import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HomeLayout, ProductLayout } from "../components";
import PrivateRoute from "./privateRoute";

const Home = lazy(() => import("../pages/Home"));
const SingleList = lazy(() => import("../pages/SingleList"));

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
