import { AuthBar, Logo } from "..";
import { BiSearch } from "react-icons/bi";
import "./style.css";

const searchModal = () => {
  return (
    <div className="fadeIn fixed inset-0 transition-all ease-in duration-300 bg-[#00000080] z-50">
      <div
        className=" w-full pt-3 pb-6 bg-white px-[5%] z-10 cursor-default flex-col gap-5"
        onClick={(e: any) => {
          e.stopPropagation();
        }}
      >
        {/* top */}
        <div className="flex  items-center justify-between max-md:justify-center max-md:mb-3">
          {/* logo */}
          <div className="h-full  w-[100px] flex items-center max-md:hidden">
            <Logo />
          </div>

          {/* serach by */}
          <div className="flex gap-8 ease-in transition-all text-[15px] ">
            <p className="border-b-2 pb-1 border-black">Country</p>
            <p>Capacity</p>
            <p>Experience</p>
          </div>

          {/* auth */}

          <div>
            <AuthBar />
          </div>
        </div>

        {/* bottom */}
        <div className="flex justify-center">
          <div className="w-[55%] max-lg:w-[70%] rounded-full bg-[#DDDDDD]  relative max-md:w-full    ease-in transition-all  flex items-center justify-between overflow-hidden py-2 pr-4 pl-6 border-[1px] gap-6">
            <input
              type="search"
              placeholder="search for a studio"
              id=""
              className="flex-1 h-full bg-transparent outline-none border-0"
            />

            <button
              type="submit"
              style={{ background: "var(--gradient)" }}
              className="px-4 py-3 transition-all ease-in hover:shadow-md text-white rounded-full flex items-center gap-2"
            >
              <BiSearch /> Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default searchModal;
