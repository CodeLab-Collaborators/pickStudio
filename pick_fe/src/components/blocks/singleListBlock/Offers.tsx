import { AiFillStar } from "react-icons/ai";
import { SingleOffer } from ".";
import { GlobalButton } from "../..";
import { singleStudioHooks } from "../../../hooks/studioHooks";
import { useParams } from "react-router-dom";

// const offerTexts = [
//   "Garden view",
//   "Resort view",
//   "Beach access",
//   "Kitchen",
//   "Wifi - 28 Mbps",
//   "Carbon monoxide alarm",
//   "Smoke alarm",
// ];


const Offers = () => {
  const { productID } = useParams();

  const { singleStudio } = singleStudioHooks(productID!);

  return (
    <div className="border-b-[1px] flex flex-col gap-5 border-b-slate-300 py-9">
      <div className="text-2xl font-[600]">What this place offers</div>
      <div className="flex font-normal flex-col gap-4">
        {singleStudio?.studioFeatures.map((text:string, index:any) => (
          <SingleOffer key={index} icon={<AiFillStar />} text={text} />
        ))}
      </div>
      {singleStudio?.studioFeatures.length > 7 && (
        <GlobalButton
          style={{ color: "black" }}
          className="border-black mt-4 font-[600] w-full py-3 rounded-md border-[1px]"
        >
        Show all {singleStudio?.studioFeatures.length} features
      </GlobalButton> )}
    </div>
  );
};

export default Offers;
