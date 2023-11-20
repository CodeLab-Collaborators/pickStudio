import { useState } from "react";
import { GlobalButton } from "..";
import { createAccount } from "../../api/authAPI";
import GlobalInput from "../props/GlobalInput";

const Registration = ({
  email,
  onClose,
}: {
  email: string;
  onClose?: () => void;
}) => {
  const handleRegister = () => {
    createAccount({
      email,
      password,
      lastName,
      firstName,
    });
    onClose!(); // Close the Auth component
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form>
        {/* Simplified registration form */}
        <div className="mt-4">
          <GlobalInput
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFirstName(e.target.value);
            }}
            // onChange={handleEmailChange}
          />

          <GlobalInput
            type="text"
            placeholder="Last Name"
            // onChange={handleEmailChange}
            value={lastName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setLastName(e.target.value);
            }}
            className="mt-1"
          />
          <p className="text-xs py-2  font-light">
            Make sure it matches the name on your property Document.
          </p>
          <GlobalInput
            type="email"
            placeholder="Email"
            value={email}
            // onChange={handleEmailChange}
            className="mt-5"
          />
          <p className="text-xs py-2  font-light">
            We'll email you studio booking confirmations and receipts.
          </p>
          <GlobalInput
            type="password"
            placeholder="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
            // onChange={handleEmailChange}
            className="mt-1"
          />
        </div>

        <div className="w-full mt-5">
          <GlobalButton
            style={{ background: "var(--gradient)" }}
            onClick={handleRegister}
          >
            Register
          </GlobalButton>
        </div>
      </form>
    </>
  );
};

export default Registration;
