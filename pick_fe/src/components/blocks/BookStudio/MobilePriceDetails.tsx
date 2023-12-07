import { useParams } from "react-router";
import { singleStudioHooks } from "../../../hooks/studioHooks";

const MobilePriceDetails = () => {
  const { productID } = useParams();
  const { singleStudio } = singleStudioHooks(productID!);
  return (
    <div className="p-6 md:hidden bg-white flex flex-col gap-7">
      <div className="text-xl">Price details</div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div>$119.81 x 5 nights</div>
          <div>$599.05</div>
        </div>
        <div className="flex justify-between">
          <div>MSMA service fee</div>
          <div>$84.57</div>
        </div>
        <div className="flex font-[600] justify-between">
          <div>
            Total <span className="underline">(USD)</span>
          </div>
          <div>$683.62</div>
        </div>
      </div>
      <div className="w-full flex justify-end underline font-[600]">
        More info
      </div>
    </div>
  );
};

export default MobilePriceDetails;
