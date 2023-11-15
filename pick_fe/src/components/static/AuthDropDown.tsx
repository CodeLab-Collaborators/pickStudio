import { useState } from "react";
import { AuthModal } from "../modals";

const AuthDropDown = () => {
  const [showAuth, setShowAuth] = useState<boolean>(false);

  const toggle = () => {
    setShowAuth(!showAuth);
  };

  return (
    <div className="w-[250px] relative bg-white text-[15px] flex flex-col gap-2 rounded-xl shadow-lg">
      <p
        onClick={toggle}
        className=" hover:bg-[#f7f7f7] text-black ease-in transition-all cursor-pointer px-6 py-2 mt-6"
      >
        Sign up
      </p>
      <p
        onClick={toggle}
        className=" hover:bg-[#f7f7f7] ease-in transition-all cursor-pointer px-6 py-2 "
      >
        Log in
      </p>

      <hr />
      <p className=" text-xs tracking-wider px-6 my-5">PICKASTUDIO</p>

      <div className="absolute right-20 top-20 z-50">
        {showAuth ? <AuthModal /> : null}
      </div>
    </div>
  );
};

export default AuthDropDown;
