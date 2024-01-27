import moment from "moment";
import pix from "../../assets/pix.jpg";
import { GlobalButton } from "../../components";
import { FC } from "react";
import ViewingClientScreen from "./ViewingClientScreen";

interface iProps {
  props?: any;
}

const ReadingClients: FC<iProps> = ({ props }) => {
  let data = Array.from({ length: 3 });

  return (
    <div
      className="py-6 px-2 border w-full rounded-md max-w-[100%] overflow-y-hidden "
      style={{ color: "var(--secondary)" }}
    >
      {/* header */}
      <div className="text-[gray] w-[1050px] flex items-center gap-2 text-[12px] font-medium uppercase mb-10 px-4">
        <div className="w-[100px] border-r ">Date</div>
        <div className="w-[150px] border-r">Client Image</div>
        <div className="w-[200px] border-r">Client Name</div>
        <div className="w-[200px] border-r">Studio Booked</div>
        <div className="w-[180px] border-r">Amount Paid</div>
        <div className="w-[130px] border-r">Duration</div>
      </div>

      <div className=" w-[1050px] overflow-hidden">
        <div>
          {props.map((props: any) => (
            <div>
              <div
                key={props}
                className={`w-full flex items-center gap-2 text-[12px] font-medium  h-16 px-4 my-2  overflow-hidden`}
              >
                <div className="w-[100px] border-r ">
                  {moment(props?.createdAt).format("ll")}
                </div>
                {/* name */}
                <div className="w-[150px] flex justify-center border-r">
                  <ViewingClientScreen props={props?.accountID} image />
                </div>

                <div className="w-[200px] border-r">
                  <ViewingClientScreen props={props?.accountID} name />
                </div>

                <div className="w-[200px] border-r font-bold text-[16px]">
                  {<ViewingClientScreen studioProps={props?.studioID} studio />}
                </div>

                <div className="w-[180px] border-r">
                  ₦
                  {(props?.cost * parseInt(props?.bookedDate)).toLocaleString()}
                </div>
                <div className="w-[130px] border-r">
                  {props?.bookedDate} Days
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadingClients;
