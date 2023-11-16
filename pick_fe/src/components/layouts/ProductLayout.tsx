import { Header } from "../blocks";
import { Footer } from "..";
import { Outlet } from "react-router-dom";

const ProductLayout = () => {
  return (
    <div className="h-full">
      <Header width="w-[80%]" />
      <div className="w-[80%] m-auto  max-md:w-full">
        <Outlet />
      </div>

      <Footer width="[80%]" sticky="fixed" />
    </div>
  );
};

export default ProductLayout;
