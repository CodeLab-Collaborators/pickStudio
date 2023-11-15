import { Outlet } from "react-router-dom";
import { Categories, Header } from "../blocks";

const Homelayout = () => {
  return (
    <div>
      <Header />
      <Categories />
      <div className="w-[90%] m-auto mt-3">
        <Outlet />
      </div>

      {/* <Footer width="[90%]" sticky="fixed" /> */}
    </div>
  );
};

export default Homelayout;
