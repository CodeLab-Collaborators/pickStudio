import { AiFillStar } from "react-icons/ai";
import dom from "../../../assets/jpg/Menstylica.jpeg";
import { useParams } from "react-router-dom";
import { singleStudioHooks } from "../../../hooks/studioHooks";

const StickyPrice = () => {
    const { productID } = useParams();
    const { singleStudio } = singleStudioHooks(productID!);




  return (
    <div className="p-6 flex flex-col gap-5 border-[1px] border-slate-300 rounded-lg">
      <div className="h-[100px] flex gap-4 items-start">
        <div className="h-full w-[110px] rounded-md">
          <img className="w-full h-full object-top object-cover rounded-md" src={singleStudio?.studioImages[0]} />
        </div>
        <div className="h-full flex flex-col justify-between">
          <div className="">
            <div className="text-xs text-slate-500">
            {singleStudio?.studioCategory}
            </div>
            <div className="text-sm font-normal text-slate-700">
              🈂
              {singleStudio?.studioName}
            </div>
          </div>
          <div className="text-xs flex gap-1">
            <span className="flex items-center gap-1  font-[600]">
              <AiFillStar /> {singleStudio?.studioReview.length}.00
            </span>{" "}
            reviews
          </div>
        </div>
      </div>
      <div className="py-5 border-y-[1px] border-slate-300 ">
        <div className="text-xl font-[600]">Price details</div>
        <div className="flex mt-5 flex-col gap-2">
          <div className="flex font-light justify-between">
            <div>{singleStudio?.studioPrice} x 5 days</div>
            <div>₦{singleStudio?.studioPrice}</div>
          </div>
          <div className="flex font-light justify-between">
            <div className="underline">Pickastudio service fee</div>
            <div>₦84.57</div>
          </div>
        </div>
      </div>
      <div className="flex font-[600] justify-between">
        <div>
          Total <span className="underline">(NGN)</span>
        </div>
        <div>₦{singleStudio?.studioPrice}</div>
      </div>
    </div>
  );
};

export default StickyPrice;
