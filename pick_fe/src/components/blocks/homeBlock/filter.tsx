import React from "react";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { userHooks } from "../../../hooks/userHooks";
import { IoMdSwitch } from "react-icons/io";

const Filter: React.FC = () => {
  const { data } = userHooks();

  return (
    <>
      <div className="flex max-[740px]:hidden rounded-lg text-gray-600 items-center gap-3 text-[13px] font-medium h-full px-3 border-[1px] cursor-pointer">
        <TbAdjustmentsHorizontal className="text-xl" />
        <div>Filters</div>
      </div>
      {data && (
        <div className="hidden text-gray-600 max-[740px]:flex border-[1px] h-12 w-12 rounded-full justify-center items-center cursor-pointer ">
          <NavLink to={`/personal/${data?._id}`} className={`text-[#626546]`}>
            <IoMdSwitch className="text-xl  transition-all duration-300" />
          </NavLink>
        </div>
      )}

      {/* {toggle && (
        <div className="absolute h-[100px] w-[200px] border rounded-md flex flex-col right-0 z-20 top-20 backdrop-blur-sm ">
          <Link
            to={`/user/${data?._id}`}
            onClick={() => {
              setToggle(!toggle);
            }}
            className="pl-2 my-3 border-b"
          >
            Account
          </Link>
          <Link
            to={`/personal/${data?._id}`}
            onClick={() => {
              setToggle(!toggle);
            }}
            className="pl-2 my-3 border-b"
          >
            Switch
          </Link>
        </div>
      )} */}
    </>
  );
};

export default Filter;
// hover:text-[#900728]
