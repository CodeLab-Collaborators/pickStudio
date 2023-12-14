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
    <div className="bg-white  min-h-screen h-full">
       <div className="sticky top-0 left-0 z-[1] bg-white overflow-x-hidden">

      <Header width="w-[90%]" position="" />
      {location.pathname.includes("register") ||
      location.pathname.includes("login") ||
      location.pathname.includes("verification") ||
      location.pathname.includes("user") ||
      location.pathname.includes("setting") ? null : (
        <Categories />
      )}
       </div>

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
