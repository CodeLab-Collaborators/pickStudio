import React, { useRef, useState, ChangeEvent } from "react";
import { GlobalButton } from "../../components";
import { useEmailValue } from "../../global/globalState";
import { verifyAccount } from "../../api/authAPI";
import { useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { PinInput } from "react-input-pin-code";

const Verification: React.FC = () => {
  const [mail] = useEmailValue();
  document.title = "Verify your account - Pickastudio";

  const navigate = useNavigate();
  const [toggle, setToggle] = useState<boolean>(false);
  const [values, setValues] = React.useState(["", "", "", "", "", ""]);

  const fieldsRef = useRef<HTMLDivElement>(null);
  const [verificationCode, setVerificationCode] = useState<any>({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
    code6: "",
  });

  const inputFocus = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const elements = fieldsRef.current
      ?.children as HTMLCollectionOf<HTMLInputElement>;
    const dataIndex = +e?.currentTarget?.getAttribute("data-index")! || 0;

    if (
      elements &&
      e.currentTarget &&
      (e.key === "Delete" || e.key === "Backspace") &&
      dataIndex > 0
    ) {
      elements[dataIndex - 1]?.focus();
    } else if (
      elements &&
      e.currentTarget &&
      dataIndex < elements.length - 1 &&
      e.currentTarget.value.trim() &&
      e.key.length === 1
    ) {
      elements[dataIndex + 1]?.focus();
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    codeNumber: keyof typeof verificationCode
  ) => {
    const value = e.target.value;
    setVerificationCode((prevCode: any) => ({
      ...prevCode,
      [codeNumber]: value.slice(-1),
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const code = Object.values(verificationCode).join("");
    // Implement the logic to handle the verification code submission

    setToggle(true);
    verifyAccount(values.join("")).then(() => {
      setToggle(false);
      navigate("/login");
    });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-[35%] p-2 max-lg:w-full border  h-full flex flex-col items-center rounded-3xl my-5">
        <div className="w-full py-4 border-b">
          <p className="text-center font-semibold text-lg w-full">
            Verify your email address
          </p>
        </div>
        <div className="w-full h-full p-6 ">
          <p className="text-sm font-normal">
            We emailed you a six-digit code to <strong>{mail}</strong> <br />{" "}
            <p className="py-1">
              Enter the code below to confirm your email address.
            </p>
          </p>

          {/* form */}
          <form>
            <PinInput
              type="text"
              autoTab={true}
              values={values}
              onChange={(value, index, values) => setValues(values)}
            />
            <p
              id="helper-text-explanation"
              className="mt-2 text-sm text-gray-500 dark:text-gray-400"
            >
              Please enter the 6 digit code we sent to your via email.
            </p>

            <GlobalButton
              style={{ background: "var(--gradient)" }}
              onClick={handleSubmit}
              type="submit"
              className="mt-4  focus:outline-none"
            >
              {toggle ? (
                <ScaleLoader color="#fff" width={5} height={12} />
              ) : (
                "Verify"
              )}
            </GlobalButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verification;
