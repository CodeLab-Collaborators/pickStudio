import { Outlet } from "react-router-dom";
import { Categories, Header } from "../blocks";
import { Footer } from "..";

const Homelayout = () => {
  return (
    <div>
      <Header />
      <Categories />
      <div className="w-[90%] m-auto mt-3">
        <Outlet />
      </div>

      <Footer width="[90%]" sticky="static" />
    </div>
  );
};

export default Homelayout;
