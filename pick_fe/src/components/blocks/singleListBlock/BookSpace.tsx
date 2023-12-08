import { AiFillStar } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { GlobalButton } from "../..";
import { singleStudioHooks } from "../../../hooks/studioHooks";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useBooked } from "../../../global/globalState";

const BookSpace = () => {
  const [booked, setBooked] = useBooked();
  const { productID } = useParams();
  const { singleStudio } = singleStudioHooks(productID!);

  const [toggle, setToggle] = useState<boolean>(false);
  const [daily, setDaily] = useState<boolean>(true);

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const [startDateTime, setStartDateTime] = useState(new Date());
  const [endDateTime, setEndDateTime] = useState(new Date());

  return (
    <div className="w-full h-[fit-content] p-6 rounded-lg border-[1px] shadow-md shadow-slate-200 border-slate-300 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex">
          <div className="font-[600] text-lg">
            ₦{singleStudio?.studioPrice.toLocaleString()}{" "}
            <span className="text-base font-thin">/hour</span>
          </div>
          <div className="mx-2" />
          <div className="font-[600] text-lg">
            ₦{singleStudio?.studioPrice.toLocaleString()}{" "}
            <span className="text-base font-thin">/day</span>
          </div>
        </div>
        <div className="flex items-center gap-1 font-[600]">
          <AiFillStar /> {singleStudio?.studioRate} &middot;{" "}
          <span className="font-thin text-sm text-slate-800">
            {singleStudio?.studioReview?.length} reviews
          </span>
        </div>
      </div>
      <div className="flex">
        <div
          className={`px-2 py-3 text-white font-medium rounded-md ml-1 flex-1 text-center ${
            daily ? "-translate-y-2" : ""
          } duration-500 transition-all hover:cursor-pointer`}
          style={{ background: "var(--gradient)" }}
          onClick={() => {
            setDaily(true);
          }}
        >
          Full day Booking
        </div>
        <div
          className={`px-2 py-3 text-white font-medium rounded-md ml-1 flex-1 text-center  ${
            daily ? "" : "-translate-y-2"
          } duration-500 transition-all hover:cursor-pointer `}
          style={{ background: "var(--gradient)" }}
          onClick={() => {
            setDaily(false);
          }}
        >
          Hourly Booking
        </div>
      </div>
      {daily ? (
        <div className="font-[500]">You are on Full day Booking mode</div>
      ) : (
        <div className="font-[500]">You are on Hourly Booking mode</div>
      )}
      <div className="flex flex-col gap-3">
        <div className="border rounded-md p-4">
          {/* // booking controller booking in hourly {TIME} */}
          {daily ? (
            // booking in hourly {TIME}
            <div className="flex justify-between ">
              <div className="flex flex-col border p-2  flex-1">
                {" "}
                <span className="text-[12px] font-medium  ">Booked In</span>
                {endDate !== null ? (
                  <input
                    className={`text-[12px] font-medium  p-2 `}
                    placeholder={`${moment(startDate!).format("L")}`}
                    onClick={() => {
                      console.log("await");
                      setDateRange([null, null]);
                    }}
                  />
                ) : (
                  <DatePicker
                    className="text-[12px] font-medium  p-2"
                    placeholderText="add date here"
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update: any) => {
                      setDateRange(update);
                    }}
                    isClearable={true}
                  />
                )}
              </div>
              <div className="flex flex-col border p-2  flex-1">
                <span className="text-[12px] font-medium  ">Booked Out</span>
                <input
                  className="text-[12px] font-medium p-2"
                  placeholder={`${
                    endDate
                      ? `${moment(endDate!).format("L")}`
                      : `no entered date yet`
                  }`}
                />
              </div>
            </div>
          ) : (
            // booking in hourly {TIME}
            <div className="flex justify-between ">
              <div className="flex flex-col border p-2  flex-1">
                {" "}
                <span className="text-[12px] font-medium  ">Booked In</span>
                <DatePicker
                  className="text-[12px] font-medium  p-2"
                  placeholderText="add time here"
                  selected={startDateTime!}
                  onChange={(date: any) => setStartDateTime(date)}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </div>
              <div className="flex flex-col border p-2  flex-1">
                <span className="text-[12px] font-medium  ">Booked Out</span>
                {/* <input
                  className="text-[12px] font-medium p-2"
                  placeholder={`${
                    endDate
                      ? `${moment(endDate!).format("L")}`
                      : `no entered time yet`
                  }`}
                /> */}

                <DatePicker
                  className="text-[12px] font-medium  p-2"
                  placeholderText="add the end time"
                  selected={endDateTime}
                  onChange={(date: any) => setEndDateTime(date)}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </div>
            </div>
          )}
          {/* <div>guest</div> */}
        </div>
        <Link to={`book-studio`}>
          <GlobalButton
            style={{ background: "var(--gradient)" }}
            className="w-full h-12 font-[500] rounded-lg text-white border-none focus:outline-none"
            onClick={() => {
              console.log("Awesomely clicked");
              setBooked({
                hourly:
                  (new Date(endDateTime!).getTime() -
                    new Date(startDateTime!).getTime()) /
                  (1000 * 3600),
                days:
                  (new Date(endDate!).getTime() -
                    new Date(startDate!).getTime()) /
                  (1000 * 3600 * 24),

                cost: `${
                  daily
                    ? (
                        ((new Date(endDate!).getTime() -
                          new Date(startDate!).getTime()) /
                          (1000 * 3600 * 24)) *
                        singleStudio?.studioPrice
                      ).toLocaleString()
                    : (
                        ((new Date(endDateTime!).getTime() -
                          new Date(startDateTime!).getTime()) /
                          (1000 * 3600)) *
                        singleStudio?.studioPrice
                      ).toLocaleString()
                }`,
                dateInDayStart: moment(startDate!).format("L"),
                dateInDayEnd: moment(endDate!).format("L"),

                dateInDateTimeStart: moment(startDateTime).format("lll"),
                dateInDateTimeEnd: moment(endDateTime).format("lll"),
              });
            }}
          >
            Book Space at this cost: ₦
            {daily
              ? (
                  ((new Date(endDate!).getTime() -
                    new Date(startDate!).getTime()) /
                    (1000 * 3600 * 24)) *
                  singleStudio?.studioPrice
                ).toLocaleString()
              : (
                  ((new Date(endDateTime!).getTime() -
                    new Date(startDateTime!).getTime()) /
                    (1000 * 3600)) *
                  singleStudio?.studioPrice
                ).toLocaleString()}
          </GlobalButton>
        </Link>
        <div className="text-center text-slate-800">
          You won't be charged yet however, <br />
          You are booking this space for{" "}
          {daily ? (
            <div>
              {
                <strong className="font-bold">
                  {(new Date(endDate!).getTime() -
                    new Date(startDate!).getTime()) /
                    (1000 * 3600 * 24)}{" "}
                  day
                </strong>
              }
            </div>
          ) : (
            <div>
              <strong className="font-bold">
                {(new Date(endDateTime!).getTime() -
                  new Date(startDateTime!).getTime()) /
                  (1000 * 3600)}{" "}
                hour
              </strong>
            </div>
          )}
        </div>
      </div>
      <div className="pt-5 border-t-[1px] font-[600] border-t-slate-200 flex justify-between ">
        <div>Total before taxes</div>
        <div>₦{singleStudio?.studioPrice?.toLocaleString()} </div>
      </div>{" "}
      <hr />
      {/* tip */}
      <div className="">
        <h2 className="font-semibold w-full flex justify-center">
          Safety tips
        </h2>
        <li>Do not send any pre-payments</li>
        <li>Inspect the goods to make sure they meet your needs</li>
        <li>Check all documentation and only pay if you're satisfie</li>
      </div>
    </div>
  );
};

export default BookSpace;
