import { AiFillStar } from "react-icons/ai";
import { FC } from "react";
import { textData } from "../../types";

const ProductFeaturedText: FC<textData> = ({
  authorName,
  place,
  rating,
  amount,
  date,
}) => {
  return (
    <div className="font-[600] text-slate-800 text-base mt-[14px]  max-sm:px-5">
      <div className="flex cursor-pointer justify-between items-center">
        <p className="tracking-wide">{place}</p>
        <div className="flex items-center gap-1">
          <AiFillStar /> {rating}
        </div>
      </div>
      <div className="cursor-pointer font-normal text-xs text-gray-500 tracking-wide leading-5 capitalize">
        Posted by: {authorName} <br /> {date}
      </div>
      <div className="gap-1 text-sm flex items-center mt-1">
        <span className="cursor-pointer font-medium">From</span>
        <p className="font-normal tracking-wider">N{amount}</p>
      </div>
    </div>
  );
};

export default ProductFeaturedText;
