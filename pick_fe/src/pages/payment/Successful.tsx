import React, { useEffect } from "react";
import { GlobalButton, Logo } from "../../components";
import success from "../../assets/gif/sucess.gif";
import { useLocation, useNavigate } from "react-router-dom";
import { useBooked } from "../../global/globalState";
import { bookAStudio, verifyPaymentForStudio } from "../../api/bookingsAPI";
import { userHooks } from "../../hooks/userHooks";
import { useSelector } from "react-redux";

const Successful: React.FC = () => {
  const navigate = useNavigate();
  const { data } = userHooks();
  const studio = useSelector((state: any) => state.studioID);
  const [bookingData, setBookingData]: any = useBooked();
  const { search } = useLocation();

  let ID = search.split("=")[search.split("=").length - 1];

  console.log(
    bookingData?.days !== 0 ? bookingData?.days : bookingData?.hourly
  );

  console.log(ID);

  useEffect(() => {
    verifyPaymentForStudio(ID).then((res) => {
      if (res.status === true) {
        bookAStudio(
          studio.ID,
          studio.studioID,

          {
            bookedDate: `${
              bookingData?.days !== 0 ? bookingData?.days : bookingData?.hourly
            }`,

            calendarDate: `${bookingData?.dateInDateTimeStart} - ${bookingData?.dateInDateTimeEnd} `,
          }
        ).then((res) => {
          if (res.status === 201) {
            console.log("done: ", res);
            setBookingData({});
          }
        });
      }
    });
  }, []);

  return (
    <div className="w-full bg-slate-100 text-slate-900 h-screen flex justify-center items-center ">
      <div className="flex flex-col items-center">
        {/* top */}
        <div className="h-full w-[200px] mb-6 flex items-center">
          <Logo />
        </div>

        {/* botttom */}
        <div className="min-w-[500px] bg-slate-50 border max-md:shadow-none max-md:rounded-none max-md:border-0 shadow-sm rounded-lg p-4 h-[55vh] ">
          {/* successfull icon
           */}
          <div className="flex flex-col py-4 items-center ">
            <img src={success} alt="sucess" />
          </div>

          {/* desc */}
          <div className="w-full flex  flex-col items-center gap-4 mt-6">
            <h3 className="font-semibold">Payment Sucessful</h3>
            <desc className="text-[13px] w-[550px]  max-md:w-full text-slate-600 text-center">
              Payment for "studio name" was sucessful, you'll get additional
              information in your mailbox sdhsghsdfghsdf
            </desc>
          </div>

          {/* button */}
          <div className="mt-7 px-5">
            <GlobalButton
              style={{ background: "var(--gradient)" }}
              className="font-semibold "
              onClick={() => {
                navigate(`/personal/${data?._id}`);
              }}
            >
              Go back
            </GlobalButton>
          </div>
        </div>
        {/* copyright */}
        <div className="mt-8 text-xs tracking-wider">
          <p>© {new Date().getFullYear()} PICKASTUDIO</p>
        </div>
      </div>
    </div>
  );
};

export default Successful;
