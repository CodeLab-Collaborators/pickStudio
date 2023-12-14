import React from "react";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

const Filter: React.FC = () => {
  return (
    <>
      <div className="flex max-[740px]:hidden rounded-lg text-gray-600 items-center gap-3 text-[13px] font-medium h-full px-3 border-[1px] cursor-pointer">
        <TbAdjustmentsHorizontal className="text-xl" />
        <div>Filters</div>
      </div>
      <div className="hidden text-gray-600 max-[740px]:flex border-[1px] h-12 w-12 rounded-full justify-center items-center">
        <TbAdjustmentsHorizontal className="text-xl" />
      </div>
    </>
  );
};

export default Filter;
