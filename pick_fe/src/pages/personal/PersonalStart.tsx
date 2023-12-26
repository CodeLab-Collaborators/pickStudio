import React from "react";
import PersonRecord from "./PersonRecord";

const PersonalStart = () => {
  return (
    <div className="w-full justify-center flex">
      <div className="w-[90%] mt-[70px]">
        <div className="flex w-full items-center justify-between">
          <div className="font-bold text-[28px]">Welcome, Peter!</div>
          <div className="border rounded-md p-2 font-medium cursor-pointer transition-all duration-300 hover:scale-[1.02] capitalize">
            upload a new space
          </div>
        </div>

        <PersonRecord />
      </div>
    </div>
  );
};

export default PersonalStart;
