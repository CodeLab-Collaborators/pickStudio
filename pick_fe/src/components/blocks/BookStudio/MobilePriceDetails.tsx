import { useParams } from "react-router";
import { singleStudioHooks } from "../../../hooks/studioHooks";
import { useBooked } from "../../../global/globalState";

const MobilePriceDetails = () => {
  const { productID } = useParams();
  const { singleStudio } = singleStudioHooks(productID!);

  const [booked]: any = useBooked();
  const [state]: any = useBooked();
  return (
    <div className="p-6 md:hidden bg-white flex flex-col gap-7">
      <div className="text-xl">Price details</div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
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
        <div className="flex justify-between">
          <div>PcikAStudio service fee</div>
          <div>₦500</div>
        </div>
        <div className="flex font-[600] justify-between">
          <div>
            Total <span className="underline">(NGN)</span>
          </div>
          <div>
            ₦
            {(booked?.days !== 0
              ? singleStudio?.studioPrice *
                  (booked?.days ? booked?.days : booked?.hourly) +
                500
              : singleStudio?.studioPriceDaily *
                  (booked?.days ? booked?.days : booked?.hourly) +
                500
            )?.toLocaleString()}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end underline font-[600]">
        More info
      </div>
    </div>
  );
};

export default MobilePriceDetails;
