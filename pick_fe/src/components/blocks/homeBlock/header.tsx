import { FunctionComponent } from "react";
import { AuthBar, Logo, Search } from "../..";
import Filter from "./filter";

type headerData = {
  width: string;
  position: string;
};

const Header: FunctionComponent<headerData> = ({ width, position }) => {
  return (
    <div className={`w-full ${position} h-[10vh] border-b border-[#0000000e]`}>
      <div
        className={`${width} h-full  m-auto flex items-center justify-between`}
      >
        {/* logo */}
        <div className="h-full w-[100px] flex items-center max-md:hidden">
          <Logo />
        </div>
        {/* search */}
        <Search />

        <div className="hidden h-full max-[740px]:flex flex-1 ml-4 items-center">
          <Filter />
        </div>

        {/* auth */}
        <div>
          <AuthBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
