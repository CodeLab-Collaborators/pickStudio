// import { iEntire } from "../../../types";
import { FaTags } from "react-icons/fa";
import img1 from "../../../assets/jpg/suit.jpeg";
import { FC } from "react";

import { Link, useParams } from "react-router-dom";
import { Itemize } from ".";
import { singleStudioHooks } from "../../../hooks/studioHooks";

import { useSingleUser } from "../../../hooks/userHooks";

export type listDetails = {
  host: string;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
};

const ListDetails: FC<listDetails> = ({ guests, bedrooms, beds, baths }) => {
  const { productID } = useParams();

  const { singleStudio } = singleStudioHooks(productID!);
  const { singleUser } = useSingleUser(singleStudio?.accountHolderID!);

  return (
    <div className="flex flex-col md:w-[50vw]">
      <div className="border-b-[1px] border-b-slate-300 py-7  flex gap-8 flex-col ">
        <div className="w-[80%] text-2xl font-semibold">
          <div className="flex">
            Entire studio space hosted by{" "}
            <p className="ml-1 font-bold text-[30px]">
              "{singleUser?.firstName} {singleUser?.lastName}"
            </p>
          </div>
          <div className="text-[17px] font-normal mt-1">
            {guests} guests . {bedrooms} bedrooms . {beds} beds . {baths} baths
          </div>
        </div>
        <Link to="/user" className="flex text-black items-center gap-3">
          <div className="w-12 h-12 rounded-[50%]">
            {singleUser?.avatar ? (
              <img className="w-full h-full rounded-[50%]" src={img1} />
            ) : (
              <div
                className="w-full h-full rounded-[50%] flex justify-center items-center text-white text-[25px] shadow-md "
                style={{ background: "var(--gradient)" }}
              >
                {singleUser?.firstName?.charAt(0)}
              </div>
            )}
          </div>
          <p className="font-semibold">{singleStudio?.studioName}</p>
        </Link>
      </div>

      <div className="border-b-[1px] border-b-slate-300 py-7 flex flex-col gap-6">
        <Itemize
          icon={<FaTags />}
          title="Free wifi"
          content=" A common area with wifi that’s well-suited for working."
        />
        <Itemize
          icon={<FaTags />}
          title="Dedicated parking space"
          content="You can check in with the doorman."
        />
        <Itemize
          icon={<FaTags />}
          title="Free cancellation for 48 hours."
          content=""
        />
      </div>
      <div className="border-b-[1px] border-b-slate-300 py-7 gap-4 flex flex-col">
        <div className="overflow-ellipsis">
          {singleStudio?.studioDescription
            ? singleStudio?.studioDescription
            : "no despcription yet"}
        </div>
        <div className="underline font-[600] cursor-pointer">
          Show more <span className="">{">"}</span>
        </div>
      </div>
    </div>
  );
};

export default ListDetails;
