import { useState } from "react";
import { SearchModal } from "../modals";
import "../modals/style.css";
import { IoSearch } from "react-icons/io5";
import { BsDot } from "react-icons/bs";

const Search = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);

  return (
    <div
      onClick={() => {
        setShowSearch(!showSearch);
      }}
      className="rounded-full  relative max-md:w-full bg-white shadow-md hover:shadow-lg ease-in transition-all cursor-pointer flex items-center justify-between py-1 pr-2 pl-4 border-[1px] border-gray-200"
    >
      <div className="text-[14px] m-[5px] font-normal flex items-center max-[740px]:hidden">
        <div className="px-3 cursor-pointer">Anywhere</div>
        <div className="px-3 cursor-pointer border-x-[1px]">
          <div className="max-[1023px]:hidden">Any week</div>
          <div className="hidden max-[1023px]:flex">Week</div>
        </div>
        <div className="px-3 cursor-pointer">
          <div className="max-[1023px]:hidden">Add guests</div>
          <div className="hidden max-[1023px]:flex">Guests</div>
        </div>
        <div className="rounded-full cursor-pointer text-[15px] bg-[var(--primary)] p-[8px] text-white">
          <IoSearch />
        </div>
      </div>
      <div className="text-[14px] my-[5px] mx-3 gap-3 font-normal items-center max-[740px]:flex hidden">
        <div>
          <IoSearch className="text-2xl" />
        </div>
        <div>
          <div className="font-medium">Anywhere</div>
          <div className="flex items-center text-[12px] opacity-[.8]">
            <div>Any week</div>
            <BsDot />
            <div>Add guests</div>
          </div>
        </div>
      </div>

      <>{showSearch ? <SearchModal /> : null}</>
    </div>
  );
};

export default Search;
