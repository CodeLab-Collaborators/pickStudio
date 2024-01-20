import { GlobalButton } from "../..";
import { usePaystackPayment } from "react-paystack";
import { bookAStudio, createStudioHistory } from "../../../api/bookingsAPI";
import { userHooks } from "../../../hooks/userHooks";
import { singleStudioHooks } from "../../../hooks/studioHooks";
import { useParams } from "react-router-dom";
import { useBooked } from "../../../global/globalState";

const Payment = () => {
  const { data } = userHooks();
  const { productID } = useParams();
  const { singleStudio } = singleStudioHooks(productID!);
  // const bookingData = JSON.parse(localStorage.getItem("booked")!);

  const [bookingData, setBookingData]: any = useBooked();

  const config = {
    reference: new Date().getTime().toString(),
    email: data?.email,
    amountbookingData:
      bookingData?.days !== 0
        ? (parseInt(bookingData?.cost?.replace(",", "")) + 500) * 100
        : (parseInt(bookingData?.cost?.replace(",", "")) + 500) * 100,

    publicKey: "pk_test_f747091150685438ae86d5a98b5df3c60275f367",
  };

  const onSuccess = () => {
    console.log("success");

    bookAStudio(
      data?._id,
      singleStudio?._id,

      {
        bookedDate:
          bookingData?.days !== 0 ? bookingData?.days : bookingData?.hourly,
        calendarDate: `${bookingData?.dateInDateTimeStart} - ${bookingData?.dateInDateTimeEnd} `,
      }
    ).then(() => {
      setBookingData({});
    });
  };

  const onClose = () => {
    console.log("closed");
  };

  const initializePayment: any = usePaystackPayment(config);

  return (
    <div className="pt-5 pb-11">
      <GlobalButton
        style={{ background: "var(--gradient)" }}
        onClick={() => {
          // initializePayment(onSuccess, onClose);
          onSuccess();
        }}
      >
        Payment Now...
      </GlobalButton>
    </div>
  );
};

export default Payment;
