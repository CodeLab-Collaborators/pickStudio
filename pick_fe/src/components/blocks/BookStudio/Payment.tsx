import { GlobalButton } from "../..";
import { usePaystackPayment } from "react-paystack";
import {
  bookAStudio,
  createStudioHistory,
  makePaymentForStudio,
} from "../../../api/bookingsAPI";
import { userHooks } from "../../../hooks/userHooks";
import { singleStudioHooks } from "../../../hooks/studioHooks";
import { useNavigate, useParams } from "react-router-dom";
import { useBooked } from "../../../global/globalState";
import { useDispatch } from "react-redux";
import { addStudioID } from "../../../global/reduxState";
import { useState } from "react";
import { ScaleLoader } from "react-spinners";

const Payment = () => {
  const navigate = useNavigate();
  const { data } = userHooks();
  const { productID } = useParams();
  const { singleStudio } = singleStudioHooks(productID!);
  const dispatch = useDispatch();
  // const bookingData = JSON.parse(localStorage.getItem("booked")!);

  const [bookingData, setBookingData]: any = useBooked();
  const [loading, setLoading] = useState<boolean>(false);
  let cost =
    bookingData?.days !== 0
      ? parseInt(bookingData?.cost?.replace(",", "")) + 500
      : parseInt(bookingData?.cost?.replace(",", "")) + 500;

  const config = {
    reference: new Date().getTime().toString(),
    email: data?.email,
    amount: cost,

    publicKey: "pk_test_5a0581a5d3a5e4eff176456546f8e4b3f32d2d01",
  };

  let start = () => {
    if (cost !== 0 && data?.email !== "") {
      setLoading(true);
      dispatch(addStudioID({ studioID: singleStudio?._id, ID: data?._id }));
      makePaymentForStudio({
        email: data?.email,
        amount: cost,
      }).then((res: any) => {
        console.log(res);
        if (res?.status === true) {
          console.log(res?.data?.authorization_url);
          window.location.replace(res?.data?.authorization_url);
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
    }
    // console.log({ studioID: singleStudio?._id, ID: data?._id });
    // console.log(data?.email);
    // console.log(cost);
  };
  return (
    <div className="pt-5 pb-11">
      <GlobalButton style={{ background: "var(--gradient)" }} onClick={start}>
        {loading ? (
          <div>
            <ScaleLoader color="white" width={5} height={10} />
          </div>
        ) : (
          "Payment Now..."
        )}
      </GlobalButton>
    </div>
  );
};

export default Payment;
