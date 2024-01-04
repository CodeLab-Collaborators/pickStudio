import React from "react";
import PersonRecord from "./PersonRecord";
import { Link } from "react-router-dom";
import Transition from "../../utils/transition";

const PersonalStart = () => {
  return (
    <div className="w-full justify-center flex">
      <div className="w-[90%] mt-[70px]">
        <div className="flex w-full items-center justify-between">
          <div className="font-bold text-[28px]">Welcome, Peter!</div>
          <div className="border rounded-md p-2 font-medium cursor-pointer transition-all duration-300  capitalize hover:bg-pink-50 text-[13px] text-center">
            <Link to="/upload-studio" className="text-black hover:text-black ">
              upload a new space
            </Link>
          </div>
        </div>

        <PersonRecord />
      </div>
    </div>
  );
};

export default PersonalStart;
