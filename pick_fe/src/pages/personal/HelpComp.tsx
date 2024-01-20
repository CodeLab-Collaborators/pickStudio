import React, { FC, ReactNode } from "react";

interface iProps {
  title: string;
  sub: string;
  icon: ReactNode;
}

const HelpComp: FC<iProps> = ({ title, sub, icon }) => {
  return (
    <div className="flex border rounded-md p-6  gap-4 cursor-pointer">
      <div className="text-[35px] mr-3">{icon}</div>
      <div>
        <div className="font-medium text-[18px] capitalize">{title}</div>
        <div className="text-slate-500">{sub}</div>
      </div>
    </div>
  );
};

export default HelpComp;
