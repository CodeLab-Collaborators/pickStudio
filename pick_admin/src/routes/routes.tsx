import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layout/homeLayout";


export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    children: [
      {
        index: true,

        element: <>content</>,
        // element: <HomeScreen />,
      },
    ],
  },
]);
