import { FC } from "react";
import { FaTags } from "react-icons/fa";
import { singleStudioHooks } from "../../../hooks/studioHooks";

interface iProps {
  props?: any;
}

const Ad: FC<iProps> = ({ props }) => {
  const { singleStudio } = singleStudioHooks(props?._id);

  return (
    <div className="border-y-[1px] md:hidden border-y-slate-300 py-7 flex justify-between">
      <div className="w-[80%] text-base font-[500]">
        Add an extra Book Time.{" "}
        <span className="font-normal">
          Extend your book time and save 20% discount. {"  "}
        </span>
        <span className="font-[500] underline">Still Inview</span>
      </div>
      <div className="text-[29px] text-[#fd44a1] ">
        <FaTags />
      </div>
    </div>
  );
};

export default Ad;
