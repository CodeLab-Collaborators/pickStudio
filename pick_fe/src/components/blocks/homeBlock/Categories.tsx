import React, { useState } from "react";
import CategoryProps from "../../props/categoryProp";
import Display from "./display";
import Filter from "./filter";
import Control from "./control";

const Categories = () => {
  const [shadow, setShadow] = useState<boolean>(false);

  const ref = React.useRef<HTMLDivElement>(null);
  const leftWard = () => {
    if (ref.current) {
      ref.current.scrollLeft -= 200;
    }
  };
  const rightWard = () => {
    if (ref.current) {
      ref.current.scrollLeft += 200;
    }
  };

  const scroll = () => {
    if (window.scrollY >= 15) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  window.addEventListener("scroll", scroll);

  return (
    <div
      className={`w-screen transition-all py-3 max-md:py-0 ease-in-out duration-200 z-20 max-[740px]:border-b-[1px] max-[740px]:shadow flex justify-center ${
        shadow && "shadow-md"
      }`}
    >
      <div className="w-[90%]  flex items-center justify-between h-full gap-4 ">
        <div className="w-[99%] flex-1 max-[740px]:w-full h-full relative">
          <div className="absolute  left-0 top-0 w-[40px] max-[740px]:w-[20px] h-full bg-gradient-to-r from-white via-[#ffffff63] to-transparent flex justify-start items-center">
            <div className="max-[740px]:hidden">
              <Control onclick={leftWard} type="next" />
            </div>
          </div>
          <div className="absolute  right-0 top-0 w-[40px] max-[740px]:w-[20px] h-full bg-gradient-to-l from-white via-[#ffffff63] to-transparent flex justify-end items-center">
            <div className="max-[740px]:hidden">
              <Control onclick={rightWard} type="prev" />
            </div>
          </div>
          <div
            ref={ref}
            className="w-full  m-[auto] h-full flex gap-11 items-center  overflow-y-scroll no-scrollbar px-10"
          >
            <CategoryProps />
          </div>
        </div>
        <div className="flex flex-row justify-end max-[740px]:hidden items-center gap-3 w-[380px] h-[50px]">
          <div className="h-full">{/* <Filter /> */}</div>
          <div className="h-full">{/* <Display /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
