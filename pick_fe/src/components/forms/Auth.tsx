import { MdClose } from "react-icons/md";
import { GlobalButton } from "..";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";

const Auth = ({ onClose }: { onClose?: () => void }) => {
  return (
    <div className="w-full h-full bg-white  p-6 ">
      {/* title */}
      <div className="flex justify-between items-center border-b  pb-4">
        <button onClick={onClose}>
          <MdClose />
        </button>
        <p className="text-lg ">Login or Signup</p>
      </div>
      <form method="dialog" className="">
        <div className="mt-4">
          <h2 className="text-xl font-medium">Welcome to Pickastudio</h2>
        </div>

        {/* email and password */}
        <div className="mt-4">
          <label className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3  focus-within:border-black focus-within:ring-1 focus-within:ring-black">
            <input
              placeholder="Email"
              className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
              Email
            </span>
          </label>

          <div className="w-full mt-5">
            <GlobalButton style={{ background: "var(--gradient)" }}>
              Continue
            </GlobalButton>
          </div>

          <div className="relative mt-8 text-gray-500">
            <span className="block w-full h-px bg-gray-200"></span>
            <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
              or
            </p>
          </div>

          {/* social auth */}

          <div className="w-full mt-8 flex flex-col gap-4">
            <GlobalButton className="bg-white flex justify-center items-center gap-2 text-black border-gray-500 border ">
              <p className="text-xl">
                <FcGoogle />
              </p>
              Continue with Google
            </GlobalButton>
            <GlobalButton className="bg-white flex justify-center items-center gap-2 text-black border-gray-500 border ">
              <p className="text-xl text-blue-800">
                <ImFacebook2 />
              </p>
              Continue with Facebook
            </GlobalButton>
            \
          </div>
        </div>
      </form>
    </div>
  );
};

export default Auth;
