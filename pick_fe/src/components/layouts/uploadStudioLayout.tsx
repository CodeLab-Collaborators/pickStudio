import { Outlet } from "react-router-dom";
import { UploadStudioFooter, UploadStudioHeader } from "../blocks/uploadStudio";
import AppScrollToTop from "../../routes/AppScrollToTop";

const UploadStudioLayout = () => {
  return (
    <div className="bg-white w-full h-screen grid grid-rows-[.15fr,1fr,.12fr] gap-3">
      <AppScrollToTop />
      <UploadStudioHeader />
      <Outlet />
      <UploadStudioFooter />
    </div>
  );
};

export default UploadStudioLayout;
