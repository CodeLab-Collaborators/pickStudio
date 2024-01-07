import { GlobalButton } from "../..";
import { usePaystackPayment } from "react-paystack";

const Payment = () => {
  const config = {
    reference: new Date().getTime().toString(),
    email: "peter@example.com",
    amount: 20000 * 100,
    publicKey: "pk_test_f747091150685438ae86d5a98b5df3c60275f367",
  };

  const onSuccess = () => {
    console.log("success");
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
          initializePayment(onSuccess, onClose);
        }}
      >
        Payment Now
      </GlobalButton>
    </div>
  );
};

export default Payment;
