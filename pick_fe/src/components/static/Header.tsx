import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import pix from "../../assets/pix.jpg";
import { AuthDropDown } from ".";

const Header = () => {
  return (
    <div className="w-full justify-center flex items-center h-[70px] ">
      <div className="flex w-[98%] justify-between h-full border-b-2 items-center ">
        <div>PickAStudio</div>

        <div className="xm:hidden md:hidden">
          <div className="flex border items-center pl-6 py-2 rounded-[30px] text-[15px] shadow-sm ">
            <div className="mr-2">Anywhere</div>
            <div className="border-r-2 h-[25px] w-2  " />
            <div className="ml-2">Any week</div>

            <div className="flex items-center ">
              <input
                className="ml-4 text-gray-400 flex-1 h-[30px] outline-none "
                placeholder="Add Guests"
              />
              <div className="mr-3 p-1 text-white bg-red-500 rounded-full ">
                <AiOutlineSearch size={25} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center ">
          <div className="hover:bg-[var(--primary)] px-4 transition-all duration-300 hover:text-white hover:cursor-pointer py-2 rounded-full ">
            Add your Studio
          </div>

          <div className="flex items-center ml-4 border px-2 py-1 rounded-full ">
            <AiOutlineMenu size={20} />
            <img
              src={pix}
              className="w-10 h-10 ml-2 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute right-20 top-40 z-50"></div>
    </div>
  );
};

export default Header;
