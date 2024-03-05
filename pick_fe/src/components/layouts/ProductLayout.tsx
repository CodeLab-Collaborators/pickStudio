import { Header, ProductHeader } from "../blocks";
import { useState, useEffect } from "react";
import { Footer } from "..";
import { Outlet } from "react-router-dom";
import AppScrollToTop from "../../routes/AppScrollToTop";
import SignedInUserMobileNav from "../static/SignedInUserMobileNav";
import SignedOutMobileNav from "../static/SignedOutMobileNav";
import { userHooks } from "../../hooks/userHooks";

const ProductLayout = () => {
  const { data } = userHooks();
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowHeader(scrollY >= 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showHeader]);

  return (
    <div className="h-full bg-white">
      <AppScrollToTop />
      <Header width="w-[90%]" position="static" />
      <div className="h-full ease-in transition-all">
        {showHeader && <ProductHeader />}
      </div>
      {data?._id ? <SignedInUserMobileNav /> : <SignedOutMobileNav />}
      <div className="w-[90%] m-auto  max-md:w-full">
        <Outlet />
      </div>

      <Footer width="[90%]" sticky="fixed" />
    </div>
  );
};

export default ProductLayout;
