import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomeScreen from "../pages/HomeScreen";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
]);
