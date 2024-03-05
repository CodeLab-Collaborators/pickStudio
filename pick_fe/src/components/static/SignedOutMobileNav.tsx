import { FC } from "react";

import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { LuHeart, LuUserCircle } from "react-icons/lu";

const SignedOutMobileNav: FC = () => {
  const navigationItems = [
    { icon: <IoIosSearch />, label: "Explore" },

    { icon: <LuUserCircle />, label: "login" },
  ];

  return (
    <header className="md:hidden fixed bottom-0 z-10 flex justify-center  bg-white  w-full border-t border-gray-200 py-3 px-4  transition-all ease-in duration-200">
      <div className="grid  grid-cols-3 gap-16 ml-32">
        {navigationItems.map((item, index) => (
          <NavLink
            to={item.label === "Explore" ? "/" : `/${item.label}`}
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
              className=" text-[25px] flex flex-col items-center justify-center hover:opacity-80 transition-all ease-in duration-150"
            >
              {item.icon}
              <span className="text-[0.7rem] font-normal tracking-wide p-1">
                {item.label}
              </span>
            </button>
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default SignedOutMobileNav;
