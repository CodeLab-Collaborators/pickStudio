import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HomeLayout, ProductLayout } from "../components";

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
            <Home />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/products",
    element: <ProductLayout />,
    children: [
      {
        index: true,
        element: <SingleList />,
      },
    ],
  },
  {
    path: "*",
    element: <>page not found</>,
  },
]);
