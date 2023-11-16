import React from "react";
import { GlobalButton } from "..";
import GlobalInput from "../props/GlobalInput";
import { inputData } from "../../types";

const Login: React.FC<inputData> = ({ email, setEmail, handleContinue }) => {
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <form>
      {/* email*/}
      <div className="mt-4">
        <GlobalInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      <div className="w-full mt-5">
        <GlobalButton
          style={{ background: "var(--gradient)" }}
          onClick={handleContinue}
          type="submit"
        >
          Continue
        </GlobalButton>
      </div>
    </form>
  );
};

export default Login;
