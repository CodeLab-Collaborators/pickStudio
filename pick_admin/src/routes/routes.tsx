import { createBrowserRouter } from "react-router-dom";


export const mainRouter = createBrowserRouter([
  {
    path: "/",
    
    // element: <Layout />,
    element: <p>hello world</p>,
    children: [
      {
        index: true,
        // element: <HomeScreen />,
      },
    ],
  },
]);
