// import { useState } from "react";
import { IoIosNotifications } from "react-icons/io";

const Notify = () => {
  // const [state, setState]: any = useState<Array<{}>>([]);

  const readState = JSON.parse(localStorage.getItem("notice")!);

  return (
    <div>
      <div className="relative">
        {readState?.length > 0 && (
          <span className="relative flex h-5 w-5 top-4 -right-3 ">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-1 text-white  right-0" />
            <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 text-white text-[12px] justify-center items-center right-0 ">
              {readState?.length}
            </span>
          </span>
        )}
        <IoIosNotifications size={30} />
      </div>

      {/* <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span> */}
    </div>
  );
};

export default Notify;
