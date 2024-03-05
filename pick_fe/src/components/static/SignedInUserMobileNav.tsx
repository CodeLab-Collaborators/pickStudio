import { FC } from "react";
import { MdOutlineBookmarks } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { TbMessageCircleUp } from "react-icons/tb";
import { IoIosSearch, IoMdSwitch } from "react-icons/io";
import { LuHeart, LuUserCircle } from "react-icons/lu";
import { userHooks } from "../../hooks/userHooks";
import { PiPlugsFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../global/reduxState";
import {
  useSignUserData,
  useToggleValue,
  useUser,
} from "../../global/globalState";
const SignedInUserMobileNav: FC = () => {
  const navigationItems = [
    { icon: <IoIosSearch />, label: "Explore" },
    // { icon: <LuHeart />, label: "Wishlists" },
    { icon: <IoMdSwitch />, label: "Switch Mode" },
    // { icon: <TbMessageCircleUp />, label: "Inbox" },
    { icon: <LuHeart />, label: "Wishlists" },
    { icon: <LuUserCircle />, label: "Profile" },
  ];

  const { data } = userHooks();

  const [user, setUser] = useUser();
  const [userData, setUserData] = useSignUserData();
  return (
    <header className="md:hidden fixed bottom-0 z-10 bg-white  w-full border-t border-gray-200  py-3 px-4 grid grid-cols-5 gap-10 place-items-center transition-all ease-in duration-200">
      {navigationItems.map((item, index) => (
        <NavLink
          to={
            item.label === "Explore"
              ? "/"
              : item.label === "Profile"
              ? `/user/${data?._id}`
              : item.label === "Switch Mode"
              ? `/personal/${data?._id}`
              : item.label === "Wishlists"
              ? `/wishlists`
              : "/"
          }
          style={({ isActive }) => {
            return {
              color: isActive ? " var(--primary)" : "#717171 ",
              fontWeight: isActive ? "bold" : "",
              scale: isActive ? "1.09" : "",
            };
          }}
        >
          <button
            key={index}
            className=" text-[23px] flex flex-col items-center justify-center hover:opacity-80 transition-all ease-in duration-150"
          >
            {item.icon}
            <span className="text-[0.7rem] font-normal tracking-wide p-1">
              {item.label}
            </span>
          </button>
        </NavLink>
      ))}

      <button
        className=" text-[23px] flex flex-col items-center justify-center hover:opacity-80 transition-all ease-in duration-150"
        onClick={() => {
          setUserData(null);
          setUser(null);
          localStorage.removeItem("mainUser");
          localStorage.removeItem("signUserData");
          window.location.reload();
        }}
      >
        {<PiPlugsFill />}
        <span className="text-[0.7rem] font-normal tracking-wide p-1">
          Log Out
        </span>
      </button>
    </header>
  );
};

export default SignedInUserMobileNav;
