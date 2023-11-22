import { signinAccount } from "../../api/authAPI";
import { GlobalButton, SocialLogin } from "../../components";
import GlobalInput from "../../components/props/GlobalInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ScaleLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const Login = () => {
  document.title = "Login - Pickastudio";

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // signinAccount
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const { handleSubmit } = useForm();

  const onHandleSubmit = handleSubmit(() => {
    const data = { email, password };
    setShow(true);
    signinAccount(data)
      .then(() => {
        toast("welcome");
        setShow(false);
      })
      .then(() => {
        navigate("/");
      });
  });
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <ToastContainer />

      <div className="w-[35%] p-2 max-lg:w-full border  h-full flex flex-col items-center rounded-3xl my-5">
        <div className="w-full py-4 border-b ">
          <p className="text-center font-semibold text-lg w-full">
            Log in to your account
          </p>
        </div>
        <div className="w-full h-full  p-6 ">
          <form method="dialog" className="" onSubmit={onHandleSubmit}>
            <h2 className="text-xl my-t font-medium">Welcome back</h2>

            <div className="mt-6">
              <GlobalInput
                type="email"
                placeholder="Email"
                required
                // onChange={handleEmailChange}
                value={email}
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
              />
              <div className="mt-4 relative ">
                <GlobalInput
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  //   onChange={handleEmailChange}
                  value={password}
                  onChange={(e: any) => {
                    setPassword(e.target.value);
                  }}
                />
                <p
                  className="absolute bottom-4 cursor-pointer right-4 underline font-semibold text-gray-600 hover:text-black transition-all ease-in duration-100"
                  onClick={togglePassword}
                >
                  show
                </p>
              </div>
              <div className="w-full mt-6">
                <GlobalButton
                  style={{ background: "var(--gradient)" }}
                  // onClick={handleContinue}
                  type="submit"
                >
                  {show ? (
                    <ScaleLoader color="#fff" width={5} height={12} />
                  ) : (
                    "Sign in"
                  )}
                </GlobalButton>
              </div>
            </div>

            <>
              <div className="relative mt-10 text-gray-500">
                <span className="block w-full h-px bg-gray-200"></span>
                <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
                  or
                </p>
              </div>
              {/* Social auth */}
              <SocialLogin />
            </>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;