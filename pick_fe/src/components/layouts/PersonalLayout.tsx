import AppScrollToTop from "../../routes/AppScrollToTop";
import PersonalHeader from "../blocks/Personal/PersonalHeader";
import { Outlet } from "react-router-dom";
import SignedInUserMobileNav from "../static/SignedInUserMobileNav";
import SignedOutMobileNav from "../static/SignedOutMobileNav";
import { userHooks } from "../../hooks/userHooks";

const PersonalLayout = () => {
  const { data } = userHooks();
  return (
    <div>
      <AppScrollToTop />
      <PersonalHeader />

      {data?._id ? <SignedInUserMobileNav /> : <SignedOutMobileNav />}
      <Outlet />
    </div>
  );
};

export default PersonalLayout;
