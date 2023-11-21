import { AiFillFlag } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";

const ConfirmedDetailsBlock = () => {
  return (
    <div>
      <div className="w-full p-6 border border-gray-300 rounded-3xl">
        <h2 className="text-3xl font-extrabold pb-3 max-sm:text-2xl">
          Isaac's confirmed information
        </h2>
        {/* confirmed datas */}
        <div className="flex gap-2 items-center pb-2">
          <span>
            <FaCheck />
          </span>
          <div className="text-[18px] md:-text-[20px] font-[500] text-[#717171]">
            Identify
          </div>
        </div>
        <div className="flex gap-2 items-center pb-2">
          <span>
            <FaCheck />
          </span>
          <div className="text-[18px] md:-text-[20px] font-[500] text-[#717171]">
            Email Address
          </div>
        </div>
        <div className="flex gap-2 items-center pb-2">
          <span>
            <FaCheck />
          </span>
          <div className="text-[18px] md:-text-[20px] font-[500] text-[#717171]">
            Phone number
          </div>
        </div>

        {/* report profile */}
      </div>
      <div className="flex items-center mt-5 gap-2 text-[20px]">
        <div>
          <AiFillFlag />
        </div>
        <div className="font-semibold text-base underline">
          Report this profile
        </div>
      </div>
    </div>
  );
};

export default ConfirmedDetailsBlock;
