import { useState } from "react";
import GlobalInput from "../../components/props/GlobalInput";
import { GlobalButton, SocialLogin } from "../../components";
import { useForm } from "react-hook-form";
import { createAccount } from "../../api/authAPI";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEmailValue } from "../../global/globalState";
import { ScaleLoader } from "react-spinners";

const Registration = () => {
  const navigation = useNavigate();
  document.title = "Sign up - Pickastudio";

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirm, setConfirm] = useState("");

  const [mail, setMail] = useEmailValue();
  const [toggle, setToggle] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const { handleSubmit } = useForm();

  const onHandleSubmit = handleSubmit(() => {
    setShow(true);
    const data = { firstName, lastName, email, password, confirm };
    if (password === confirm) {
      createAccount(data).then((res: any) => {
        setMail(email);
        if (res.status === 201) {
          navigation("/verification");
        } else {
          toast(
            "can't create an account, because Email has already been taken!"
          );
          setShow(false);
        }
      });
    } else {
      toast("password and confirm password, must match");
    }
  });

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      {<ToastContainer />}

      <div className="w-[35%] p-2 max-lg:w-full border  h-full flex flex-col items-center rounded-3xl my-5">
        <div className="w-full py-4 border-b ">
          <p className="text-center font-semibold text-lg w-full">
            Let's get you set up
            <p>
              <Link
                to="/register"
                className="text-[16px] "
                style={{ color: "var(--secondary)" }}
              >
                or login here
              </Link>
            </p>
          </p>
        </div>
        <div className="w-full h-full  p-6 ">
          <form onSubmit={onHandleSubmit}>
            {/*  registration form */}
            <div className="mt-4">
              <GlobalInput
                type="text"
                placeholder="First Name"
                required
                inputType="peter"
                // onChange={handleEmailChange}

                value={firstName}
                onChange={(e: any) => {
                  setFirstName(e.target.value);
                }}
              />

              <GlobalInput
                type="text"
                placeholder="Last Name"
                required
                // onChange={handleEmailChange}
                className="mt-1"
                value={lastName}
                onChange={(e: any) => {
                  setLastName(e.target.value);
                }}
              />
              <p className="text-xs py-2  font-normal">
                Make sure it matches the name on your property Document.
              </p>
              <GlobalInput
                type="email"
                placeholder="Email"
                required
                // onChange={handleEmailChange}
                className="mt-5"
                value={email}
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
              />
              <p className="text-xs py-2  font-normal">
                We'll email you studio booking confirmations and receipts.
              </p>
              <div className="mt-4 relative ">
                <GlobalInput
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e: any) => {
                    setPassword(e.target.value);
                  }}
                  //   onChange={handleEmailChange}
                />
                <p
                  className="absolute bottom-4  text-sm cursor-pointer right-4 underline font-semibold text-gray-600 hover:text-black transition-all ease-in duration-100"
                  onClick={togglePassword}
                >
                  show
                </p>
              </div>
              <div className="mt-1 relative ">
                <GlobalInput
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Passsword"
                  required
                  value={confirm}
                  onChange={(e: any) => {
                    setConfirm(e.target.value);
                  }}
                  //   onChange={handleEmailChange}
                />
                <p
                  className="absolute bottom-4 cursor-pointer text-sm right-4 underline font-semibold text-gray-600 hover:text-black transition-all ease-in duration-100"
                  onClick={togglePassword}
                >
                  show
                </p>
              </div>
            </div>

            <div className="w-full mt-5">
              <GlobalButton
                type="submit"
                style={{ background: "var(--gradient)" }}
                // onClick={handleRegister}
              >
                {show ? (
                  <ScaleLoader color="#fff" width={5} height={12} />
                ) : (
                  "Register"
                )}
              </GlobalButton>
            </div>
          </form>
          <>
            <div className="relative mt-8 text-gray-500">
              <span className="block w-full h-px bg-gray-200"></span>
              <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
                or
              </p>
            </div>
            <SocialLogin />
          </>
        </div>
      </div>
    </div>
  );
};

export default Registration;
