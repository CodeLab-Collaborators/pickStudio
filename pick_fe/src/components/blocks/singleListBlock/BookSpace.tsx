import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GlobalButton } from "../..";

const BookSpace = () => {
  return (
    <div className="w-full h-[fit-content] p-6 rounded-lg border-[1px] shadow-md shadow-slate-200 border-slate-300 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="font-[600] text-lg">
          $104 <span className="text-base font-thin"> night</span>
        </div>
        <div className="flex items-center gap-1 font-[600]">
          <AiFillStar /> 4.85 .{" "}
          <span className="font-thin text-sm text-slate-800">292 reviews</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Link to="/seller">
          <GlobalButton
            style={{ background: "var(--gradient)" }}
            className="w-full h-12 font-[500] rounded-lg  text-white border-none focus:outline-none"
          >
            Message seller
          </GlobalButton>
        </Link>
        <div className="text-center text-slate-800">
          You won't be charged yet
        </div>
      </div>
      <div className="pt-5 border-t-[1px] font-[600] border-t-slate-200 flex justify-between ">
        <div>Total before taxes</div>
        <div>$607</div>
      </div>{" "}
      <hr />
      {/* tip */}
      <div className="">
        <h2 className="font-semibold w-full flex justify-center">
          Safety tips
        </h2>
        <li>Do not send any pre-payments</li>
        <li>Inspect the goods to make sure they meet your needs</li>
        <li>Check all documentation and only pay if you're satisfie</li>
      </div>
    </div>
  );
};

export default BookSpace;
