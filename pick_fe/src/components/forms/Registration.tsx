import { GlobalButton } from "..";
import GlobalInput from "../props/GlobalInput";

const Registration = ({
  email,
  onClose,
}: {
  email: string;
  onClose?: () => void;
}) => {
  const handleRegister = () => {
    // Handle registration logic using the email
    console.log(`Registering user with email: ${email}`);
    onClose!(); // Close the Auth component
  };

  return (
    <>
      <form>
        {/* Simplified registration form */}
        <div className="mt-4">
          <GlobalInput
            type="text"
            placeholder="First Name"

            // onChange={handleEmailChange}
          />

          <GlobalInput
            type="text"
            placeholder="Last Name"
            // onChange={handleEmailChange}
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
