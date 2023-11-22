import { IoIosMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { AuthDropDown } from ".";
import { useToggleValue } from "../../global/globalState";

const AuthBar = () => {
  const [showAuthNav, setShowAuthNav] = useToggleValue();

  return (
    <div className="flex items-center gap-2 max-md:hidden text-sm tracking-wide">
      <p className="px-4 font-medium  py-3 ease-in transition-all cursor-pointer hover:bg-[#F7F7F7] rounded-full">
        Upload your studio
      </p>

      <div
        className="p-3 rounded-full  hover:shadow-md ease-in transition-all border flex items-center justify-center gap-4 cursor-pointer"
        onClick={() => {
          setShowAuthNav(!showAuthNav);
        }}
      >
        <div className="text-2xl">
          <IoIosMenu />
        </div>
        <div className="text-2xl">
          <FaUserCircle />
        </div>
      </div>

      {showAuthNav ? (
        <div className="absolute right-20 top-20 z-50">
          <AuthDropDown />
        </div>
      ) : null}
    </div>
  );
};

export default AuthBar;
