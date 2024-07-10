import { RouterProvider } from "react-router-dom";
import { appRoutes } from "./routes/routes";
import { RecoilRoot } from "recoil";

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
