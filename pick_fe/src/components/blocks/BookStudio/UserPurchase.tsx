import React, { useState } from "react";
import BookingCalendar from "./BookingCalendar";
import { useBooked } from "../../../global/globalState";

const UserPurchase: React.FC = () => {
  const [show, setShow] = useState(true);

  const [state]: any = useBooked();

  return (
    <div className="bg-white md:border-b-[1px] border-slate-300 p-6 flex flex-col gap-5">
      <div className="text-2xl">Your purchase</div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="font-[600] text-black text-[18px]">
            Your proposed booked Dates
          </div>

          <div>
            {!!state?.days ? state?.dateInDayStart : state?.dateInDateTimeStart}{" "}
            - {!!state?.days ? state?.dateInDayEnd : state?.dateInDateTimeEnd}
          </div>
          <div className="-mt-2 font-medium">
            {" "}
            {state?.days ? state?.days : state?.hourly}{" "}
            {!!state.days ? "days" : "hours"}
          </div>
        </div>
        <div
          className="underline font-[600] cursor-pointer"
          onClick={() => {
            // setShow(!show);
          }}
        >
          {/* Edit date */}
        </div>
        <div className="mt-5" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="font-[600] text-black">Guests</div>

          <div>1 guest</div>
        </div>
        {/* <div className="underline font-[600]">Edit</div> */}
      </div>

      {show && <BookingCalendar />}
    </div>
  );
};

export default UserPurchase;
