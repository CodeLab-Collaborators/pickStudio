import { FaTags } from "react-icons/fa";

const Ad = () => {
  return (
    <div className="border-y-[1px] md:hidden border-y-slate-300 py-7 flex justify-between">
      <div className="w-[80%] text-base font-[500]">
        Add an extra night and save.
        <span className="font-normal">
          Extend your stay by adding Sep 2 for only $372.
        </span>
        <span className="font-[500] underline"> Add night</span>
      </div>
      <div className="text-[29px] text-[#fd44a1] ">
        <FaTags />
      </div>
    </div>
  );
};

export default Ad;
