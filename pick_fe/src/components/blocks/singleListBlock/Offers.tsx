import { AiFillStar } from "react-icons/ai";
import { SingleOffer } from ".";
import { GlobalButton } from "../..";

const Offers = () => {
  return (
    <div className="border-b-[1px] flex flex-col gap-5 border-b-slate-300 py-9">
      <div className="text-2xl font-[600]">What this place offers</div>
      <div className="flex font-normal flex-col gap-4">
        <SingleOffer icon={<AiFillStar />} text="Garder view" />
        <SingleOffer icon={<AiFillStar />} text="Resort view" />
        <SingleOffer icon={<AiFillStar />} text="Beach access" />
        <SingleOffer icon={<AiFillStar />} text="Kitchen" />
        <SingleOffer icon={<AiFillStar />} text="Wifi - 28 Mbps" />
        <SingleOffer
          icon={<AiFillStar />}
          text="Carbon monoxide alarm"
          slashed
        />
        <SingleOffer icon={<AiFillStar />} text="Smoke alarm" slashed />
      </div>
      <GlobalButton className="border-black mt-4 text-[black] font-[600] w-full py-3 rounded-md border-[1px]">
        Show all 38 amenities
      </GlobalButton>
    </div>
  );
};

export default Offers;
