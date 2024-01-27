import { RouterProvider, useLocation } from "react-router-dom";
import { appRoutes } from "./routes/routes";
import { RecoilRoot } from "recoil";
import { useEffect } from "react";

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <RouterProvider router={appRoutes} />
      </RecoilRoot>
    </div>
  );
};

export default App;
