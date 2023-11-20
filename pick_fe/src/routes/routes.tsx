import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HomeLayout, ProductLayout } from "../components";

const Home = lazy(() => import("../pages/Home"));
const SingleList = lazy(() => import("../pages/SingleList"));
const Registration = lazy(() => import("../pages/Registration"));

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
            <Home />
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
        element: <>Signin page</>,
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
