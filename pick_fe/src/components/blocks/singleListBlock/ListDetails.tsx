// import { iEntire } from "../../../types";
import { FaTags } from "react-icons/fa";
import img1 from "../../../assets/jpg/suit.jpeg";
import { FC } from "react";

import { Link } from "react-router-dom";
import { Itemize } from ".";

export type listDetails = {
  host: string;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
};

const ListDetails: FC<listDetails> = ({
  host,
  guests,
  bedrooms,
  beds,
  baths,
}) => {
  return (
    <div className="flex flex-col md:w-[50vw]">
      <div className="border-b-[1px] border-b-slate-300 py-7  flex gap-8 flex-col ">
        <div className="w-[80%] text-2xl font-[500]">
          <div>Entire home not hosted by {host}</div>
          <div className="text-[17px] font-normal mt-1">
            {guests} guests . {bedrooms} bedrooms . {beds} beds . {baths} baths
          </div>
        </div>
        <Link to="/user" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-[50%]">
            <img className="w-full h-full rounded-[50%]" src={img1} />
          </div>
          <p>Studio name</p>
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
          The Balian treehouse is only a 3 minute walk away from the beach. From
          the veranda you can watch the sunrise in the morning, and enjoy the
          view of our beautiful garden (900m2) with pool. (when fully booked
          also see https://airbnb.com/rooms/4875630 its called The funky
          glasshouse).....
        </div>
        <div className="underline font-[600] cursor-pointer">
          Show more <span className="">{">"}</span>
        </div>
      </div>
    </div>
  );
};

export default ListDetails;
