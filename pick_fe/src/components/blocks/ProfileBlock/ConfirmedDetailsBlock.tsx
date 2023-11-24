import { AiFillFlag } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";
import { userHooks } from "../../../hooks/userHooks";
import { FcCancel } from "react-icons/fc";
import { Link } from "react-router-dom";

const ConfirmedDetailsBlock = () => {
  const { data } = userHooks();

  return (
    <div>
      <div className="w-full p-6 border border-gray-300 rounded-3xl">
        <h2 className="text-3xl font-extrabold pb-3 max-sm:text-2xl">
          {data?.firstName}'s confirmed information
        </h2>
        {/* confirmed datas */}
        <div className="flex gap-2 items-center pb-2">
          <span className="w-8">
            <FaCheck className="text-green-600" />
          </span>
          <div className="text-[18px] md:-text-[20px] font-[500] text-[#717171]">
            Identify
          </div>
        </div>
        <div className="flex gap-2 items-center pb-2">
          <span className="w-8">
            <FaCheck className="text-green-600" />
          </span>
          <div className="text-[18px] md:-text-[20px] font-[500] text-[#717171]">
            Email Address
          </div>
        </div>
        <div className="flex gap-2 items-center pb-2">
          <span className="w-8">
            {data?.phone ? (
              <FaCheck className="text-green-600" />
            ) : (
              <FcCancel size={20} />
            )}
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
        <Link to="/setting" style={{ textDecoration: "none", color: "black" }}>
          <div className="font-semibold text-base underline">
            Update your profile
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmedDetailsBlock;
