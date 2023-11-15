import { RouterProvider } from "react-router-dom";
import { appRoutes } from "./routes/routes";

const App = () => {
  return (
    <div>
      <RouterProvider router={appRoutes} />
    </div>
  );
};

export default App;
