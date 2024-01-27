import AppScrollToTop from "../../routes/AppScrollToTop";
import PersonalHeader from "../blocks/Personal/PersonalHeader";
import { Outlet } from "react-router-dom";

const PersonalLayout = () => {
  return (
    <div>
      <AppScrollToTop />
      <PersonalHeader />
      <Outlet />
    </div>
  );
};

export default PersonalLayout;
