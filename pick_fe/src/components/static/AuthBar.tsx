// import {useState} from 'react'
import { IoIosMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

const AuthBar = () => {
  return (
    <div className="flex items-center gap-2 max-md:hidden text-sm font-semibold">
      <p className="px-4 py-3 ease-in transition-all cursor-pointer hover:bg-slate-50 rounded-full">
        Upload your studio
      </p>

      <div
        className="p-3 rounded-full shadow-md hover:shadow-lg ease-in transition-all border flex items-center justify-center gap-4 cursor-pointer"
        //   onClick={showAuth}
      >
        <div className="text-2xl">
          <IoIosMenu />
        </div>
        <div className="text-2xl">
          <FaUserCircle />
        </div>
      </div>
    </div>
  );
};

export default AuthBar;
