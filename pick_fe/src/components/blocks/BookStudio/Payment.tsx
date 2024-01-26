import { GlobalButton } from "../..";
import { usePaystackPayment } from "react-paystack";
import { bookAStudio, createStudioHistory } from "../../../api/bookingsAPI";
import { userHooks } from "../../../hooks/userHooks";
import { singleStudioHooks } from "../../../hooks/studioHooks";
import { useNavigate, useParams } from "react-router-dom";
import { useBooked } from "../../../global/globalState";

const Payment = () => {
  const navigate = useNavigate();
  const { data } = userHooks();
  const { productID } = useParams();
  const { singleStudio } = singleStudioHooks(productID!);
  // const bookingData = JSON.parse(localStorage.getItem("booked")!);

  const [bookingData, setBookingData]: any = useBooked();

  let cost =
    bookingData?.days !== 0
      ? (parseInt(bookingData?.cost?.replace(",", "")) + 500) * 100
      : (parseInt(bookingData?.cost?.replace(",", "")) + 500) * 100;

  const config = {
    reference: new Date().getTime().toString(),
    email: data?.email,
    amount: cost,

    publicKey: "pk_test_5a0581a5d3a5e4eff176456546f8e4b3f32d2d01",
  };

  const onSuccess = () => {
    bookAStudio(
      data?._id,
      singleStudio?._id,

      {
        bookedDate:
          bookingData?.days !== 0 ? bookingData?.days : bookingData?.hourly,
        calendarDate: `${bookingData?.dateInDateTimeStart} - ${bookingData?.dateInDateTimeEnd} `,
      }
    )
      .then(() => {
        setBookingData({});
      })
      .then(() => {
        navigate("/");
      });
  };

  const onClose = () => {};

  let initializePayment: any = usePaystackPayment(config);

  let start = async () => {
    return await initializePayment(onSuccess, onClose);
  };

  return (
    <div className="pt-5 pb-11">
      <GlobalButton
        style={{ background: "var(--gradient)" }}
        onClick={() => {
          start().then(async (res: any) => {
            onSuccess();
          });
        }}
      >
        Payment Now...
      </GlobalButton>
    </div>
  );
};

export default Payment;
