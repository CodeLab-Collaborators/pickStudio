import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { SearchModal } from "../modals";
import "../modals/style.css";

const Search = () => {
  const [showSearch, setShowSearch] = useState<boolean>(false);

  return (
    <div
      onClick={() => {
        setShowSearch(!showSearch);
      }}
      className="rounded-full  relative max-md:w-full bg-white shadow-md hover:shadow-lg ease-in transition-all cursor-pointer flex items-center justify-between py-2 pr-2 pl-4 border-[1px] border-gray-200"
    >
      <div className="text-[15px]  font-medium px-3 border-r">Anywhere</div>

      <div className="text-[15px]  font-medium px-3 border-r">Any week</div>

      <div className="text-[15px] font-normal text-[#0000006e] px-2 ">
        Add studio
      </div>
      <div className="w-8 h-8 flex items-start justify-start">
        <div
          className="self-stretch flex-1 text-lg rounded-full text-white  flex items-center justify-center p-1"
          style={{ background: "var(--gradient)" }}
        >
          <BiSearch />
        </div>
      </div>

      <>{showSearch ? <SearchModal /> : null}</>
    </div>
  );
};

export default Search;
