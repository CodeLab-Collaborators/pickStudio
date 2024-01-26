import { IoIosMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { AuthDropDown } from ".";
import { useToggleValue } from "../../global/globalState";
import { userHooks } from "../../hooks/userHooks";
import { Link } from "react-router-dom";

const AuthBar = () => {
  const [showAuthNav, setShowAuthNav] = useToggleValue();
  // const [userData]: any | {} = useSignUserData();
  const mainUser = JSON.parse(localStorage.getItem("mainUser")!);

  const { data } = userHooks();

  return (
    <div className="flex items-center gap-2 max-md:hidden text-sm tracking-wide">
      {mainUser && (
        <Link
          to={`/personal/${data?._id}`}
          className="text-black hover:text-black"
        >
          <p className="px-4 font-medium  py-3 ease-in transition-all cursor-pointer hover:bg-[#F7F7F7] rounded-full">
            Switch Mode
          </p>
        </Link>
      )}

      <div
        className="p-3 rounded-full  hover:shadow-md ease-in transition-all border flex items-center justify-center gap-4 cursor-pointer"
        onClick={() => {
          setShowAuthNav(!showAuthNav);
        }}
      >
        <div className="text-2xl">
          <IoIosMenu />
        </div>
        {mainUser ? (
          <div className="text-2xl">
            {data?.avatar ? (
              data?.avatar
            ) : (
              <div
                className="text-[15px] rounded-full flex justify-center items-center font-bold w-[25px] h-[25px] text-white "
                style={{ background: "var(--gradient)" }}
              >
                {data?.firstName?.charAt(0)}
              </div>
            )}
            {/*  */}
          </div>
        ) : (
          <FaUserCircle size={25} />
        )}
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
