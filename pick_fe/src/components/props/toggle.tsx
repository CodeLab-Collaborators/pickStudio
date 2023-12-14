import React from "react";
import { MdCheck } from "react-icons/md";

type iToggle = {
  on?: boolean;
  onclick?: () => void;
};

const Toggle: React.FC<iToggle> = ({ on, onclick }) => {
  return (
    <div
      onClick={onclick}
      style={{
        backgroundColor: on ? "#717171" : "#AFAFAF",
       
      }}
      className="h-[26px]  w-[40px] transition-all duration-[.25s] cursor-pointer hover:opacity-[.7] rounded-full flex items-center">
      <div
        style={{ transform: on ? "translateX(15px)" : "translateX(0px)" }}
        className=" w-[20px] h-[20px] text-white bg-[var(--primary)] transition-all duration-[.25s] rounded-full mx-[2px] flex justify-center items-center">
        {on ? <MdCheck  /> : null}
      </div>
    </div>
  );
};

export default Toggle;
