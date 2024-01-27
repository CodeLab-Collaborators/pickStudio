import { Outlet } from "react-router-dom";
import { Footer, StudioHeader } from "..";
import AppScrollToTop from "../../routes/AppScrollToTop";

const StudioLayout = () => {
  const path = "studio/listings";

  return (
    <div className="bg-white  min-h-screen h-full">
      <AppScrollToTop />
      <StudioHeader />
      <div
        className={`${
          location.pathname.includes(path) ? "w-[90%] " : "w-[70%] "
        } max-md:w-[90%] m-auto py-4`}
      >
        <Outlet />
      </div>
      <Footer width="[90%]" />
    </div>
  );
};

export default StudioLayout;
