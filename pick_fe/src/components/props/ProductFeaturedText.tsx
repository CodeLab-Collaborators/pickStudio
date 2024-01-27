import { AiFillStar } from "react-icons/ai";
import { FC } from "react";
import { textData } from "../../types";
import { useSingleUser } from "../../hooks/userHooks";

const ProductFeaturedText: FC<textData> = ({
  place,
  rating,
  amount,
  amountHourly,
  date,
  props,
}) => {
  // useSingleUser
  const { singleUser } = useSingleUser(props?.accountHolderID);

  return (
    <div className="font-[600] text-slate-800 text-base mt-[14px]  max-sm:px-5">
      <div className="flex cursor-pointer justify-between items-center">
        <p className="tracking-wide">{place}</p>
        <div className="flex items-center gap-1">
          <AiFillStar /> {rating}
        </div>
      </div>
      <div className="cursor-pointer font-normal text-xs text-gray-500 tracking-wide leading-5 capitalize">
        Posted by: {singleUser?.firstName} {singleUser?.lastName} <br /> {date}
      </div>
      <div className="gap-1 text-sm flex items-center mt-1">
        <span className="cursor-pointer font-normal"></span>
        <p className="font-medium tracking-wider">
          {amountHourly ? (
            <div>₦{amountHourly}/hour</div>
          ) : (
            <p className="text-[12px]">No Hourly service</p>
          )}
        </p>
        &middot;
        <p className="font-medium tracking-wider">₦{amount}/day</p>
      </div>
    </div>
  );
};

export default ProductFeaturedText;
