import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

type iControl = {
  type: "next" | "prev";
  onclick?: () => void;
};

const Control: React.FC<iControl> = ({ type, onclick }) => {
  return (
    <div
      onClick={onclick}
      className="bg-[var(--primary-color)] text-[10px] p-[6px] cursor-pointer border-[1px] rounded-full">
      {type === "next" ? <SlArrowLeft /> : <SlArrowRight />}
    </div>
  );
};

export default Control;
