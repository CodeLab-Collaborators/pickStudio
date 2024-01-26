import { FC } from "react";
import { MdOutlineBookmarks } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { TbMessageCircleUp } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { LuHeart, LuUserCircle } from "react-icons/lu";
import { userHooks } from "../../hooks/userHooks";

const SignedInUserMobileNav: FC = () => {
  const navigationItems = [
    { icon: <IoIosSearch />, label: "Explore" },
    // { icon: <LuHeart />, label: "Wishlists" },
    // { icon: <MdOutlineBookmarks />, label: "Bookings" },
    // { icon: <TbMessageCircleUp />, label: "Inbox" },
    { icon: <LuUserCircle />, label: "Profile" },
  ];

  const { data } = userHooks();

  return (
    <header className="md:hidden fixed bottom-0 z-10 bg-white  w-full border-t border-gray-200  py-3 px-4 grid grid-cols-5 gap-10 place-items-center transition-all ease-in duration-200">
      {navigationItems.map((item, index) => (
        <NavLink
          to={
            item.label === "Explore"
              ? "/"
              : item.label === "Profile"
              ? `/user/${data?._id}`
              : "/" + item.label
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
    </header>
  );
};

export default SignedInUserMobileNav;
