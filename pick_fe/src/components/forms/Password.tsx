import { GlobalButton } from "..";
import GlobalInput from "../props/GlobalInput";

const PasswordInput = ({
  email,
  onClose,
}: {
  email: string;
  onClose?: () => void;
}) => {
  const handleContinue = () => {
    // Handle password input logic using the email
    console.log(`Password entered for ${email}`);
    onClose!(); // Close the Auth component
  };

  return (
    <>
      <div className="w-full flex items-center flex-col py-5">
        <p className="">Welcome</p>
        <p className="font-semibold text-lg">{email}</p>
      </div>

      <div className="mt-4">
        <GlobalInput
          type="password"
          placeholder="Password"

          //   onChange={handleEmailChange}
        />
      </div>
      <div className="w-full mt-5">
        <GlobalButton
          style={{ background: "var(--gradient)" }}
          onClick={handleContinue}
        >
          Sign in
        </GlobalButton>
      </div>
    </>
  );
};

export default PasswordInput;
