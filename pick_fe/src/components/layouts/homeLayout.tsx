import { Outlet } from "react-router-dom";
import { Categories, Header } from "../blocks";
import { Footer } from "..";
import { useLocation } from "react-router-dom";

const Homelayout = () => {
  const location = useLocation();

  // if (location.pathname.includes("register"))
  return (
    <div>
      <Header width="w-[90%]" position="sticky" />
      {location.pathname.includes("register") ||
      location.pathname.includes("login") ? null : (
        <Categories />
      )}
      <div className="w-[90%] m-auto mt-3">
        <Outlet />
      </div>

      <Footer width="[90%]" />
    </div>
  );
};

export default Homelayout;
