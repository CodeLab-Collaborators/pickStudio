import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

import { MdOutlineNotifications } from "react-icons/md";

const PersonalHeader = () => {
  const name = "Peter";
  return (
    <div className="h-[97px] flex w-full justify-center items-center border-b">
      <div className="w-[90%] flex h-full justify-between items-center">
        <div>
          <Link to="/">
            <img src={logo} className="h-14" />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border flex justify-center items-center p-1 bg-white relative">
            <MdOutlineNotifications className="text-[20px]" />
            {/* <div className="w-4 h-4 rounded-full flex justify-center items-center absolute -top-1 -right-1 bg-red-600 text-white text-[9px] font-medium  ">
              1
            </div> */}
          </div>
          <div
            className="w-10 h-10 rounded-full border p-1 bg-slate-500 text-white justify-center flex items-center font-medium"
            style={{ background: "var(--gradient)" }}
          >
            {name.charAt(0)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalHeader;
