import { Outlet } from "react-router-dom";
import { Categories, Header } from "../blocks";
import { Footer } from "..";

const Homelayout = () => {
  return (
    <div>
      <Header width="w-[90%]" />
      <Categories />
      <div className="w-[90%] m-auto mt-3">
        <Outlet />
      </div>

      <Footer width="[90%]" />
    </div>
  );
};

export default Homelayout;
