import { RouterProvider } from "react-router-dom";
<<<<<<< HEAD
import { mainRouter } from "./router/mainRouter";
=======
import { appRoutes } from "./routes/routes";
>>>>>>> 970c86426927e5fc99462a2c1c72e6cae67115a7

const App = () => {
  return (
    <div>
<<<<<<< HEAD
      <RouterProvider router={mainRouter} />
=======
      <RouterProvider router={appRoutes} />
>>>>>>> 970c86426927e5fc99462a2c1c72e6cae67115a7
    </div>
  );
};

export default App;
