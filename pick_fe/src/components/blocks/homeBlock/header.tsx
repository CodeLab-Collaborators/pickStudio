import { FunctionComponent } from "react";
import { AuthBar, Logo, Search } from "../..";

type headerData = {
  width: string;
  position: string;
};

const Header: FunctionComponent<headerData> = ({ width, position }) => {
  return (
    <div
      className={`w-full ${position} top-0 bg-white z-30  h-[10vh] border-b border-[#0000000e]`}
    >
      <div
        className={`${width} h-full  m-auto flex items-center justify-between`}
      >
        {/* logo */}
        <div className="h-full w-[100px] flex items-center max-md:hidden">
          <Logo />
        </div>
        {/* search */}
        <Search />

        {/* auth */}
        <div>
          <AuthBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
