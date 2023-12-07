import { Outlet } from "react-router-dom";
import { Categories, Header } from "../blocks";
import { Footer } from "..";
import { useLocation } from "react-router-dom";
import SignedInUserMobileNav from "../static/SignedInUserMobileNav";

import SignedOutMobileNav from "../static/SignedOutMobileNav";
import { userHooks } from "../../hooks/userHooks";

const Homelayout = () => {
  const location = useLocation();
  const { data } = userHooks();

  return (
    <div className="bg-white min-h-screen h-full">
      <Header width="w-[90%]" position="sticky" />
      {location.pathname.includes("register") ||
      location.pathname.includes("login") ||
      location.pathname.includes("verification") ||
      location.pathname.includes("user") ||
      location.pathname.includes("setting") ? null : (
        <Categories />
      )}

      {/* mobile navigation */}

        {data?._id ? <SignedInUserMobileNav/> : <SignedOutMobileNav/>}
      


      <div className="w-[90%] min-h-[76vh] m-auto mt-3">
        <Outlet />
      </div>

      <Footer width="[90%]" />
    </div>
  );
};

export default Homelayout;
