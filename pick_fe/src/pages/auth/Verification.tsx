import React, { useRef, useState, ChangeEvent } from "react";
import { GlobalButton } from "../../components";


const Verification: React.FC = () => {
  document.title = "Verify your account - Pickastudio";

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
    const elements = fieldsRef.current?.children as HTMLCollectionOf<HTMLInputElement>;
    const dataIndex= +e?.currentTarget?.getAttribute("data-index")! || 0;


  
    if (elements && e.currentTarget && (e.key === "Delete" || e.key === "Backspace") && dataIndex > 0) {
        elements[dataIndex - 1]?.focus();
      } else if (elements && e.currentTarget && dataIndex < elements.length - 1 && e.currentTarget.value.trim() && e.key.length === 1) {
        elements[dataIndex + 1]?.focus();
      }
    };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, codeNumber: keyof typeof verificationCode) => {
    const value = e.target.value;
    setVerificationCode((prevCode:any) => ({ ...prevCode, [codeNumber]: value.slice(-1) }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault()
    const code = Object.values(verificationCode).join("");
    // Implement the logic to handle the verification code submission
    console.log("Verification Code Submitted:", code);
  };

  return (
    <div className='min-h-[80vh] flex items-center justify-center'>
      <div className="w-[35%] p-2 max-lg:w-full border  h-full flex flex-col items-center rounded-3xl my-5">
        <div className="w-full py-4 border-b">
          <p className="text-center font-semibold text-lg w-full">
            Verify your email address
          </p>
        </div>
        <div className="w-full h-full p-6 ">
          <p className="text-sm font-normal">
            We emailed you a six-digit code to <strong>name@company.com</strong> <br /> <p className="py-1">Enter the code below to confirm your email address.</p>
          </p>

{/* form */}
       <form >
       <div ref={fieldsRef} className="w-full justify-center my-6 flex items-center gap-x-2">
            {[0, 1, 2, 3,4,5].map((index) => (
              <input
                key={index}
                type="text"
                min={1}
                placeholder="0"
                value={verificationCode[`code${index + 1}`]}
                className="w-12 h-12 rounded-lg bg-white border focus:border-[var(--primary)] outline-none text-center text-2xl"
                onChange={(e) => handleChange(e, `code${index + 1}` as keyof typeof verificationCode)}
                onKeyUp={inputFocus}
                required
              />
            ))}
          </div>
          <GlobalButton
          style={{ background: "var(--gradient)" }}
        //   style={{ background: `${{verificationCode.code1 === "" || verificationCode.code2 === "" || verificationCode.code3 === "" || verificationCode.code4 === "" || verificationCode.code5 === "" || verificationCode.code6 === "" ? "var(--gradient)" : ""} }`}}
            onClick={handleSubmit}
            type="submit"
            className="mt-4  focus:outline-none"
           disabled={verificationCode.code1 === "" || verificationCode.code2 === "" || verificationCode.code3 === "" || verificationCode.code4 === "" || verificationCode.code5 === "" || verificationCode.code6 === "" ? true : false}
          >
            Verify
          </GlobalButton>
       </form>
        </div>
      </div>
    </div>
  );
};

export default Verification;
