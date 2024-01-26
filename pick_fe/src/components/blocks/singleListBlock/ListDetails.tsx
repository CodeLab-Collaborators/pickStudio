// import { iEntire } from "../../../types";
import { FaTags } from "react-icons/fa";
import img1 from "../../../assets/jpg/suit.jpeg";
import { FC } from "react";

import { Link, useParams } from "react-router-dom";
import { Itemize } from ".";
import { singleStudioHooks } from "../../../hooks/studioHooks";

import { useSingleUser } from "../../../hooks/userHooks";

export type listDetails = {
  host?: string;
  guests: number;
  bedrooms?: number;
  beds?: number;
  baths?: number;
};

const ListDetails: FC<listDetails> = ({ guests, bedrooms, beds, baths }) => {
  const { productID } = useParams();

  const { singleStudio } = singleStudioHooks(productID!);
  const { singleUser } = useSingleUser(singleStudio?.accountHolderID!);

  return (
    <div className="flex flex-col md:w-[50vw]">
      <div className="border-b-[1px] border-b-slate-300 py-7  flex gap-8 flex-col ">
        <div className="w-[80%] text-2xl font-[500]">
          <div>
            Entire studio space hosted by
            <p className=" font-bold pt-1  w-full">
              {singleUser?.firstName} {singleUser?.lastName}
            </p>
          </div>
          <div className="text-[15px] font-medium mt-1 leading-tight">
            {guests} Guests Allowed/Book . {bedrooms} Steady Power . {beds} Good
            Room-Space
          </div>
          <div className="text-[12px]">{/* <div>studio features:</div> */}</div>
        </div>
        <Link
          to={`/user/${singleStudio?.accountHolderID}`}
          className="flex text-black items-center gap-3"
        >
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
          title={singleStudio?.studioCategory}
          content=""
        />
      </div>
      <div className="border-b-[1px] border-b-slate-300 py-7 gap-4 flex flex-col">
        <div className="overflow-ellipsis">
          {singleStudio?.studioDescription ? (
            <div
              dangerouslySetInnerHTML={{
                __html: `${singleStudio?.studioDescription}`,
              }}
            />
          ) : (
            "no despcription yet"
          )}
        </div>
        <div className="underline font-[600] cursor-pointer">
          Show more <span className="">{">"}</span>
        </div>
      </div>
    </div>
  );
};

export default ListDetails;
